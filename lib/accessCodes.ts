// Access code validation utilities

interface AccessCodeData {
  code: string;
  platform: string;
}

// This will hold our access codes - we'll populate this from your CSV
let accessCodesMap: Map<string, string> = new Map(); // code -> platform
let usedCodesSet: Set<string> = new Set(); // uppercased codes that are used
let codesLoaded = false;
let usedLoaded = false;

// Load access codes from JSON file
export async function loadAccessCodes(): Promise<boolean> {
  if (codesLoaded) return true;
  
  try {
    const response = await fetch('/data/access-codes.json');
    if (!response.ok) {
      throw new Error('Failed to load access codes');
    }
    
    const codes: AccessCodeData[] = await response.json();
    accessCodesMap = new Map(codes.map(item => [item.code.trim().toUpperCase(), item.platform]));
    codesLoaded = true;
    console.log(`Loaded ${accessCodesMap.size} access codes`);
    return true;
  } catch (error) {
    console.error('Error loading access codes:', error);
    return false;
  }
}

// Load used coupon codes from JSON file
async function loadUsedCodes(): Promise<boolean> {
  if (usedLoaded) return true;
  try {
    const response = await fetch('/data/used-codes.json', { cache: 'no-store' });
    if (!response.ok) {
      // If file doesn't exist yet, treat as empty without failing
      usedCodesSet = new Set();
      usedLoaded = true;
      return true;
    }
    const entries: { code: string }[] = await response.json();
    usedCodesSet = new Set(entries.map(e => (e.code || '').trim().toUpperCase()));
    usedLoaded = true;
    return true;
  } catch (error) {
    console.error('Error loading used codes:', error);
    usedCodesSet = new Set();
    usedLoaded = true;
    return true;
  }
}

// Validate an access code
export async function validateAccessCode(code: string): Promise<{ valid: boolean; message: string; platform?: string }> {
  // Ensure codes are loaded
  if (!codesLoaded) {
    const loaded = await loadAccessCodes();
    if (!loaded) {
      return { valid: false, message: 'Unable to validate access code at this time' };
    }
  }
  // Ensure used codes are loaded
  if (!usedLoaded) {
    await loadUsedCodes();
  }
  
  if (!code || code.trim().length === 0) {
    return { valid: false, message: 'Please enter an access code' };
  }
  
  const normalizedCode = code.trim().toUpperCase();
  
  if (usedCodesSet.has(normalizedCode)) {
    return { valid: false, message: 'This coupon code has already been used.' };
  }
  if (accessCodesMap.has(normalizedCode)) {
    const platform = accessCodesMap.get(normalizedCode);
    return { 
      valid: true, 
      message: `Valid ${platform} access code`,
      platform: platform
    };
  } else {
    return { valid: false, message: 'Invalid access code. Please check your code and try again.' };
  }
}

// Check if a code exists without loading all codes (for large datasets)
export async function checkAccessCodeExists(code: string): Promise<boolean> {
  try {
    const normalizedCode = code.trim().toUpperCase();
    
    // For very large datasets, you might want to use a different approach
    // like checking against a hash or using a bloom filter
    await loadAccessCodes();
    await loadUsedCodes();
    return accessCodesMap.has(normalizedCode) && !usedCodesSet.has(normalizedCode);
  } catch (error) {
    console.error('Error checking access code:', error);
    return false;
  }
}

// Helper to mark a code as used via API (write happens server-side)
export async function markCodeAsUsed(code: string, meta?: { platform?: string; phone?: string; name?: string }) {
  try {
    await fetch('/api/used-codes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, platform: meta?.platform, phone: meta?.phone, name: meta?.name })
    });
    usedCodesSet.add((code || '').trim().toUpperCase());
  } catch (e) {
    console.error('Failed to mark code as used', e);
  }
}
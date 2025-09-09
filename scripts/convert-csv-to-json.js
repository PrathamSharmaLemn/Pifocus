// Script to convert CSV access codes to JSON format
// Run this with: node scripts/convert-csv-to-json.js

const fs = require('fs');
const path = require('path');

// Update these paths to point to your CSV files
const AMAZON_CSV_PATH = '/Users/pratham/Downloads/Amazon Access Code (1).csv';
const FLIPKART_CSV_PATH = '/Users/pratham/Downloads/Flipkart Access Code (1).csv';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'access-codes.json');

function processCsvFile(filePath, platform) {
  console.log(`Reading ${platform} CSV file...`);
  
  const codes = [];
  let lineCount = 0;
  let processedCount = 0;
  
  // Read file line by line to avoid memory issues
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  
  console.log(`Found ${lines.length} lines in ${platform} CSV`);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    lineCount++;
    
    if (!line) continue;
    
    // Skip header row if it exists
    if (i === 0 && line.toLowerCase().includes('code')) {
      console.log(`Skipping ${platform} header row:`, line);
      continue;
    }
    
    // Split by comma and take first column (adjust as needed)
    const columns = line.split(',');
    const code = columns[0]?.trim().replace(/"/g, ''); // Remove quotes
    
    if (code && code.length > 0) {
      codes.push({
        code: code.toUpperCase(), // Normalize to uppercase
        platform: platform
      });
      processedCount++;
    }
    
    // Show progress for large files
    if (processedCount % 50000 === 0) {
      console.log(`  Processed ${processedCount} ${platform} codes...`);
    }
  }
  
  console.log(`✅ Processed ${processedCount} ${platform} codes from ${lineCount} lines`);
  return codes;
}

function convertCsvToJson() {
  try {
    console.log('🚀 Starting conversion process...');
    
    // Use Map for efficient deduplication during processing
    const uniqueCodesMap = new Map();
    let totalProcessed = 0;
    
    // Process Amazon codes
    if (fs.existsSync(AMAZON_CSV_PATH)) {
      console.log('\n📦 Processing Amazon codes...');
      const amazonCodes = processCsvFile(AMAZON_CSV_PATH, 'Amazon');
      
      // Add to map (handles deduplication automatically)
      amazonCodes.forEach(item => {
        if (!uniqueCodesMap.has(item.code)) {
          uniqueCodesMap.set(item.code, item);
        }
      });
      
      totalProcessed += amazonCodes.length;
      console.log(`✅ Added ${amazonCodes.length} Amazon codes to collection`);
    } else {
      console.log('⚠️ Amazon CSV file not found, skipping...');
    }
    
    // Process Flipkart codes
    if (fs.existsSync(FLIPKART_CSV_PATH)) {
      console.log('\n📦 Processing Flipkart codes...');
      const flipkartCodes = processCsvFile(FLIPKART_CSV_PATH, 'Flipkart');
      
      // Add to map (handles deduplication automatically)
      let duplicates = 0;
      flipkartCodes.forEach(item => {
        if (!uniqueCodesMap.has(item.code)) {
          uniqueCodesMap.set(item.code, item);
        } else {
          duplicates++;
        }
      });
      
      totalProcessed += flipkartCodes.length;
      console.log(`✅ Added ${flipkartCodes.length - duplicates} Flipkart codes (${duplicates} duplicates skipped)`);
    } else {
      console.log('⚠️ Flipkart CSV file not found, skipping...');
    }
    
    console.log('\n🔄 Converting to final format...');
    const uniqueCodes = Array.from(uniqueCodesMap.values());
    
    console.log(`\n📊 Summary:`);
    console.log(`Total unique codes: ${uniqueCodes.length}`);
    
    const amazonCount = uniqueCodes.filter(c => c.platform === 'Amazon').length;
    const flipkartCount = uniqueCodes.filter(c => c.platform === 'Flipkart').length;
    
    console.log(`Amazon codes: ${amazonCount}`);
    console.log(`Flipkart codes: ${flipkartCount}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Write to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueCodes, null, 2));
    
    console.log(`\n✅ Successfully converted CSVs to JSON!`);
    console.log(`📁 Output file: ${OUTPUT_FILE}`);
    
    // Show sample codes (first 3 from each platform)
    console.log('\n📝 Sample codes:');
    const amazonSamples = uniqueCodes.filter(c => c.platform === 'Amazon').slice(0, 3);
    const flipkartSamples = uniqueCodes.filter(c => c.platform === 'Flipkart').slice(0, 3);
    
    console.log('Amazon:');
    amazonSamples.forEach(item => console.log(`  - ${item.code}`));
    
    console.log('Flipkart:');
    flipkartSamples.forEach(item => console.log(`  - ${item.code}`));
    
  } catch (error) {
    console.error('❌ Error converting CSV:', error.message);
    process.exit(1);
  }
}

// Run the conversion
convertCsvToJson();

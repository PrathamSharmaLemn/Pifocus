// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const fileId = "1fW8Zs3Sopsq8PjjH2UGVk-f7huBc5XtP";
//     const fileName = "PW-Live-Setup-1.0.0.exe";
    
//     // Use the most reliable Google Drive download URL first
//     const directDownloadUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&authuser=0&confirm=t`;
    
//     console.log(`Starting download from: ${directDownloadUrl}`);
    
//     const response = await fetch(directDownloadUrl, {
//       method: 'GET',
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
//       },
//       redirect: 'follow'
//     });

//     if (!response.ok) {
//       // If direct download fails, try the fallback URL
//       const fallbackUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
//       console.log(`Trying fallback URL: ${fallbackUrl}`);
      
//       const fallbackResponse = await fetch(fallbackUrl, {
//         headers: {
//           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
//         }
//       });
      
//       if (!fallbackResponse.ok) {
//         throw new Error(`Download failed with status: ${fallbackResponse.status}`);
//       }
      
//       // Stream the response directly without buffering
//       return new NextResponse(fallbackResponse.body, {
//         headers: {
//           'Content-Type': 'application/octet-stream',
//           'Content-Disposition': `attachment; filename="${fileName}"`,
//           'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
//           'Transfer-Encoding': 'chunked',
//         },
//       });
//     }

//     // Stream the response directly without buffering the entire file
//     return new NextResponse(response.body, {
//       headers: {
//         'Content-Type': 'application/octet-stream',
//         'Content-Disposition': `attachment; filename="${fileName}"`,
//         'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
//         'Transfer-Encoding': 'chunked',
//       },
//     });

//   } catch (error) {
//     console.error('Download proxy error:', error);
    
//     // If all else fails, redirect directly to Google Drive
//     const fileId = "1fW8Zs3Sopsq8PjjH2UGVk-f7huBc5XtP";
//     const redirectUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
//     return NextResponse.redirect(redirectUrl, 302);
//   }
// }
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const fileId = "1fW8Zs3Sopsq8PjjH2UGVk-f7huBc5XtP";
    const fileName = "PW-Live-Setup-1.0.0.exe";
    
    // Use the most reliable Google Drive download URL first
    const directDownloadUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&authuser=0&confirm=t`;
    
    console.log(`Starting download from: ${directDownloadUrl}`);
    
    const response = await fetch(directDownloadUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      redirect: 'follow'
    });

    if (!response.ok) {
      // If direct download fails, try the fallback URL
      const fallbackUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
      console.log(`Trying fallback URL: ${fallbackUrl}`);
      
      const fallbackResponse = await fetch(fallbackUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      
      if (!fallbackResponse.ok) {
        throw new Error(`Download failed with status: ${fallbackResponse.status}`);
      }
      
      // Stream the response directly without buffering
      return new NextResponse(fallbackResponse.body, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${fileName}"`,
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
          'Transfer-Encoding': 'chunked',
        },
      });
    }

    // Stream the response directly without buffering the entire file
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    console.error('Download proxy error:', error);
    
    // If all else fails, redirect directly to Google Drive
    const fileId = "1fW8Zs3Sopsq8PjjH2UGVk-f7huBc5XtP";
    const redirectUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    return NextResponse.redirect(redirectUrl, 302);
  }
}

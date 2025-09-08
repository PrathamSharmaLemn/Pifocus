import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Initialize the sheet with hardcoded credentials
    const serviceAccountAuth = new JWT({
      email: 'pwdesktopapp@pwapp-471210.iam.gserviceaccount.com',
      key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC37xeAtnBgoyR8
OQk7C47HBUeNPWXtzJoOr+gu0NYx3SxbwAwwU/4ON83WlrzALgqvRvN3zRYBXbUS
JWn5Le7kAMwL5lPk5laC2WoyIyn31gb/GkhbTKNRe0zzLJkV5i8aBDNxMv1L22CP
YebxZ5+5yscptppwSZp0Oz1lnsbGBf13y4NjAr617EKv9G76w1ndulNEZT64p8RA
ZTruKOmuNbDCYcfJuOn2Bj90V7FtkPUdIrljX08wCZ4JpgN38WqjS7XPggmXvMc2
G8ugSs/wunGWREjtdY09SySfgOFdD8FiS27gPYy6OkncFnVa3MKS/oS/RcF/pSLx
IXQLlXA3AgMBAAECggEABasXmqmEqGW+r8QDiySdtM0ZLxAaU7a/dKkVIFmNOvd+
8MuSqevyDgwdis8VvV0YiohG49qXzVj5mzfjSSuSNh0+1zW0636cYedDWjeH3pG4
9iRK4I1pvGQZXfvHh/Y9CLHicqBIpWLQWfrWvCUeYK0QGt1Raxke6mq88fnE/xXj
Sa/dPZkzqo2G5dshBivgDCyNrIEqYNIDHOoY2kipegRjsRvl0ZaKRbuPlQ4bqh/k
Qhlj2GXpBR+wxAK+XOF2etITO7M61nhLaVW4LTkh0/EnRYT3apmvxxDS8VFCFW91
KDNxwLDDTfabk89xi34gYDlp8f6UWq1dHaJU8qmPgQKBgQD/PpRjjA4RybDLER+a
XJ7XuJNHJvX/fhf2faoskmWfaMsZs4vXirTHVuWhhZv1m0ygQ9OxnrpFUFC9mfLB
zH7g+SK1yMnHPSundnlEBe9LWc1H74V9lewZoEBXwJrdpNZihJDxo6UKQFBC+Ktj
uaIOSPtvSaqjpcWPl5Rn+fXPdwKBgQC4enliKFwoSP3O0hQjVf2GaACTZV3P5g1X
K72UE9QNTRSwIl2S76pI3dltDelmh2lr9iBZjRK2QSXbRv1xzJguHNgVDbeOp744
mNTprN3bPMPFjrdokkDGHoITCDHYyfxI5YLO2VMXckcfTH6LPKDtMwMFJBQ/tDiV
NYnYxtEVQQKBgQDgODYceLUHVTk0OdecP07eS+s87vHcvgUI6H1saDJTZbg83Ke0
8ck675ALYxaNHB6lDtBRURFqwFIdLLa/Hgg7Uz/1luwCVS8bDg0a/2eltr6JOdT3
bJMaM9cx/yVMHXii1LeLPelGZxbarh3JHhJJID2YFouK9J3nNQ4OhNs1owKBgBK0
cFxQhU+cXwe6a0pN7L/VCcHoNEPhKpcdG0LJY+XZW/Cj+2LrpBNxUxtonrLDph/J
O+x4jl4mauU55HbGbOO4DvzLgEIZpgLtFCGBYplZJuyAFP6oXaL48u1lFlDJ4ieu
Bb5dcLxe3PFCe0443oROeM7ropX2+wm9/PUa65ZBAoGADoA6El9zJF2T73eefAn0
fLOUIDYEwxs3sGd9YcD7VxZVapRTXu5U2AIWxcCJCcnFnyQf/q8fzWf4I0eR4unV
jRcHdP1Qo9d+yqkP5aZ1NsRcAEADOKDTrW+KSiPNShnP5BE/alMe6aonr4rqLj/q
7oeKXD3+SQSXT+/HqgmLe3E=
-----END PRIVATE KEY-----`,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
      '15-DkwSFWxTaMiloKyyVjN_QvNsn8pmMULeKG1Us_5fE',
      serviceAccountAuth
    );

    await doc.loadInfo();

    // Get the first sheet or create one
    let sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      sheet = await doc.addSheet({ title: 'Form Submissions' });
    }

    // Set up headers if the sheet is empty
    const rows = await sheet.getRows();
    if (rows.length === 0) {
      await sheet.setHeaderRow([
        'Timestamp',
        'Phone Number',
        'Full Name',
        'Class',
        'Board',
        'Track (NEET/JEE)',
        'Submission ID',
      ]);
    }

    // Add the new row
    await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Phone Number': formData.phone,
      'Full Name': formData.name,
      'Class': formData.class,
      'Board': formData.board,
      'Track (NEET/JEE)': formData.track || 'N/A',
      'Submission ID': formData.submissionId,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Data submitted successfully to Google Sheets' 
    });

  } catch (error) {
    console.error('Google Sheets error:', error);
    res.status(500).json({
      success: false, 
      error: 'Failed to submit data to Google Sheets', 
      details: error.message 
    });
  }
}

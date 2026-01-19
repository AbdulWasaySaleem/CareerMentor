export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 15px !important; }
      .code { font-size: 28px !important; letter-spacing: 3px !important; }
      .header h1 { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td class="header" style="background-color: #59A4C0; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 300; letter-spacing: 0.5px;">Tech Path AI</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <h2 style="margin: 0 0 20px; color: #333333; font-size: 20px; font-weight: 400;">Verify Your Email</h2>
              <p style="margin: 0 0 30px; color: #666666; font-size: 15px; line-height: 1.6;">Thank you for signing up. Please use the verification code below to complete your registration:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 30px 0;">
                    <div class="code" style="display: inline-block; background-color: #f8f9fa; border: 2px dashed #59A4C0; border-radius: 8px; padding: 20px 30px;">
                      <span style="font-size: 32px; font-weight: 600; letter-spacing: 5px; color: #59A4C0;">{verificationCode}</span>
                    </div>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 20px 0 0; color: #999999; font-size: 14px; line-height: 1.6;">This code will expire in 15 minutes. If you didn't request this, please ignore this email.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 30px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999999; font-size: 13px;">© ${new Date().getFullYear()} Tech Path AI. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 15px !important; }
      .check-icon { width: 60px !important; height: 60px !important; font-size: 32px !important; }
      .header h1 { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td class="header" style="background-color: #F3B34E; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 300; letter-spacing: 0.5px;">Tech Path AI</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px; text-align: center;">
              <div class="check-icon" style="display: inline-block; width: 70px; height: 70px; background-color: #F3B34E; border-radius: 50%; line-height: 70px; margin-bottom: 30px;">
                <span style="color: #ffffff; font-size: 36px; font-weight: 300;">✓</span>
              </div>
              
              <h2 style="margin: 0 0 20px; color: #333333; font-size: 20px; font-weight: 400;">Password Reset Successful</h2>
              <p style="margin: 0 0 30px; color: #666666; font-size: 15px; line-height: 1.6;">Your password has been successfully updated. You can now log in with your new password.</p>
              
              <div style="background-color: #f8f9fa; border-left: 3px solid #FFD272; padding: 20px; margin: 30px 0; text-align: left;">
                <p style="margin: 0 0 10px; color: #333333; font-size: 14px; font-weight: 500;">Security Tips:</p>
                <ul style="margin: 0; padding-left: 20px; color: #666666; font-size: 14px; line-height: 1.8;">
                  <li>Use a strong, unique password</li>
                  <li>Enable two-factor authentication</li>
                  <li>Never share your password</li>
                </ul>
              </div>
              
              <p style="margin: 20px 0 0; color: #999999; font-size: 14px; line-height: 1.6;">If you didn't make this change, please contact our support team immediately.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 30px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999999; font-size: 13px;">© ${new Date().getFullYear()} Tech Path AI. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 15px !important; }
      .button { padding: 14px 28px !important; font-size: 15px !important; }
      .header h1 { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td class="header" style="background-color: #ED846B; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 300; letter-spacing: 0.5px;">Tech Path AI</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <h2 style="margin: 0 0 20px; color: #333333; font-size: 20px; font-weight: 400;">Password Reset Request</h2>
              <p style="margin: 0 0 30px; color: #666666; font-size: 15px; line-height: 1.6;">We received a request to reset your password. Click the button below to create a new password:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{resetURL}" class="button" style="display: inline-block; background-color: #ED846B; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 500; transition: background-color 0.3s;">Reset Password</a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 20px 0 0; color: #999999; font-size: 14px; line-height: 1.6;">This link will expire in 1 hour. If you didn't request this, please ignore this email and your password will remain unchanged.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 30px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; color: #999999; font-size: 13px;">© ${new Date().getFullYear()} Tech Path AI. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const welcomeEmailTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Tech Path AI</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; padding: 15px !important; }
      .button { padding: 14px 28px !important; font-size: 15px !important; }
      .header h1 { font-size: 28px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td class="header" style="background: linear-gradient(135deg, #59A4C0 0%, #ED846B 50%, #F3B34E 100%); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0 0 10px; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: 1px;">Welcome to Tech Path AI</h1>
              <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 15px; font-weight: 300;">Your journey to career success begins here</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <h2 style="margin: 0 0 15px; color: #333333; font-size: 22px; font-weight: 400;">Hello, {firstName}!</h2>
              <p style="margin: 0 0 25px; color: #666666; font-size: 15px; line-height: 1.7;">We're thrilled to have you on board. Tech Path AI is here to guide you through your career journey with personalized insights and AI-powered recommendations.</p>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0 30px;">
                    <a href="{clientURL}" class="button" style="display: inline-block; background-color: #59A4C0; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 6px; font-size: 16px; font-weight: 500;">Get Started</a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 25px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px; color: #333333; font-size: 16px; font-weight: 500;">What's Next?</h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                      <span style="color: #59A4C0; font-weight: 600; margin-right: 8px;">→</span> Complete your profile
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                      <span style="color: #ED846B; font-weight: 600; margin-right: 8px;">→</span> Explore career paths
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                      <span style="color: #F3B34E; font-weight: 600; margin-right: 8px;">→</span> Get personalized recommendations
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 25px 0 0; color: #999999; font-size: 14px; line-height: 1.6;">Need help? Our support team is here for you. Just reply to this email.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 30px 40px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px; color: #999999; font-size: 13px;">© ${new Date().getFullYear()} Tech Path AI. All rights reserved.</p>
              <p style="margin: 0;">
                <a href="[PRIVACY_POLICY_URL]" style="color: #59A4C0; text-decoration: none; font-size: 13px; margin: 0 10px;">Privacy Policy</a>
                <span style="color: #dddddd;">|</span>
                <a href="[SUPPORT_URL]" style="color: #59A4C0; text-decoration: none; font-size: 13px; margin: 0 10px;">Support</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

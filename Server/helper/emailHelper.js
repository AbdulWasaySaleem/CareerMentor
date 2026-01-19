import { resend, sender } from "../email/emailConfig.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  welcomeEmailTemplate,
} from "../email/emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  await resend.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken,
    ),
  });
};

export const sendWelcomeEmail = async (email, firstName) => {
  const clientURL = process.env.CLIENT_URL;
  await resend.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Tech Path AI!",
    html: welcomeEmailTemplate.replace("{firstName}", firstName).replace("{clientURL}", clientURL),
  });
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  await resend.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Password Reset Request",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  });
};

export const sendResetSuccessEmail = async (email) => {
  await resend.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Password Reset Success",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });
};

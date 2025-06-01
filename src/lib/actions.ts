"use server";

import type { ContactFormValues } from "@/types";
import { contactFormSchema } from "@/types";

interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  }
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<FormSubmissionResult> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validationResult.data;

  // In a real application, you would send an email here.
  // For example, using a service like SendGrid, Nodemailer, or Resend.
  // const myEmail = "your-email@example.com"; // This would be the email to send to.

  console.log("Form submitted successfully!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  // console.log(`Simulating email sent to ${myEmail}`);

  // Simulate a delay for API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error (uncomment to test error handling)
  // if (Math.random() > 0.7) {
  //   return {
  //     success: false,
  //     message: "An unexpected error occurred. Please try again.",
  //     errors: { _form: ["Server error, please try again later."] }
  //   };
  // }

  return {
    success: true,
    message: "Thank you for your message! We'll get back to you soon.",
  };
}

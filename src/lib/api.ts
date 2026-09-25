import {
  getContactFormEmailHtml,
  getModalInquiryEmailHtml,
  getCustomerReplyEmailHtml,
} from './emailTemplates';

export const PHP_MAIL_URL =
  process.env.NEXT_PUBLIC_PHP_MAIL_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  'https://www.fist-o.com/mathuramsemail/';

export interface ContactFormData {
  name: string;
  hospital: string;
  city: string;
  phone: string;
  email: string;
  category: string;
  product: string;
  quantity: string;
  message: string;
}

export interface ModalInquiryData {
  productName: string;
  category: string;
  quantity: string;
  unit: string;
  hospitalName?: string;
  location?: string;
  countryCode: string;
  mobileNumber: string;
  additionalDetails?: string;
}

/**
 * Submit Contact Form data with Custom Branded HTML UI to PHP SMTP Mailer
 */
export async function sendContactForm(data: ContactFormData) {
  const subject = `[Website Inquiry] ${data.name} - ${data.hospital || data.city || 'Lead'}`;
  const htmlContent = getContactFormEmailHtml(data);
  const autoReplyHtml = data.email ? getCustomerReplyEmailHtml(data.name, data.product) : undefined;

  const response = await fetch(PHP_MAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'fistotechintern1@gmail.com',
      subject,
      message: htmlContent,
      isHtml: true,
      customerEmail: data.email || undefined,
      customerName: data.name || undefined,
      product: data.product || undefined,
      replyTo: data.email || undefined,
      autoReplyHtml,
    }),
  });

  const result = await response.json();
  if (!response.ok || result.success === false) {
    throw new Error(result.error || result.message || 'Failed to submit enquiry.');
  }

  return result;
}

/**
 * Submit Quick Product Inquiry data with Custom Branded HTML UI to PHP SMTP Mailer
 */
export async function sendModalInquiry(data: ModalInquiryData) {
  const subject = `[Quick Quote] ${data.productName} (${data.quantity} ${data.unit}) - ${data.mobileNumber}`;
  const htmlContent = getModalInquiryEmailHtml(data);

  const response = await fetch(PHP_MAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'fistotechintern1@gmail.com',
      subject,
      message: htmlContent,
      isHtml: true,
    }),
  });

  const result = await response.json();
  if (!response.ok || result.success === false) {
    throw new Error(result.error || result.message || 'Failed to submit inquiry.');
  }

  return result;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siva Sai Engineering Services. Contact us for inquiries regarding turbine and generator erection, overhauling, and power plant services.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

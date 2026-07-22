import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description: 'Discover why SSES is the preferred partner for power plant operations, ensuring zero safety incidents and rapid deployment across India and the Middle East.',
};

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

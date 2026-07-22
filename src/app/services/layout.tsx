import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'SSES provides comprehensive engineering services including steam turbine overhauling, gas turbine alignment, generator commissioning, and technical staffing solutions.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

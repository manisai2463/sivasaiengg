import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Siva Sai Engineering Services (SSES), a premier industrial turbine overhauling enterprise with over two decades of engineering dedication and a highly experienced advisory team.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

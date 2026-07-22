import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the extensive portfolio of SSES projects. We have successfully executed major turbine and generator erection and overhauling projects globally.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

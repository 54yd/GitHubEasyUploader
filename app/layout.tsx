import { ReactNode } from 'react';
import SessionProviderWrapper from '../components/SessionProviderWrapper'; // Adjust the import path if necessary
import { AntdRegistry } from '@ant-design/nextjs-registry';
export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
        <AntdRegistry>{children}</AntdRegistry>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
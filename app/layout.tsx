import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Abrar Ahemmad | Full Stack Developer',
  description: 'Portfolio of Abrar Ahemmad, a Full Stack Developer specializing in Angular, FastAPI, and Langflow.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-[#00ff00] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

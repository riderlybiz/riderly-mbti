import StyledComponentsRegistry from "../lib/registry";
import { Noto_Sans_KR } from 'next/font/google';
import "./globals.css";

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className} style={{ overflow: "hidden" }}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

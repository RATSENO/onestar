import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이한별 · Java Backend Developer",
  description: "문제를 해결하고, 협업을 즐기며, 운영까지 책임지는 9년 차 Java 백엔드 개발자 이한별의 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

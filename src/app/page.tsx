'use client';

import type { Metadata } from "next";
import { Main } from "../components/Main";

export const metadata: Metadata = {
  title: "나는 어떤 동물 라이더일까?",
  description: "라이더 유형 검사 powered by Riderly",
  openGraph: {
    title: "나는 어떤 동물 라이더일까?",
    description: "라이더 유형 검사 powered by Riderly",
    url: "https://riderlybiz.github.io/riderly-mbti/",
    siteName: "Riderly",
    images: [
      {
        url: "https://riderlybiz.github.io/riderly-mbti/images/open_graph_thumnail.png",
        width: 1200,
        height: 600,
        alt: "Riderly OG Image",
      },
    ],
    type: "website",
  }
};

export default function Home() {
  return (
    <Main />
  );
}

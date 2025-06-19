// app/question/[step]/page.tsx

import { questions } from '@/lib/questions';
import QuestionClient from './QuestionClient';
import { Metadata } from "next";


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

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ step: `${i}` }));
}

export default function QuestionPage({ params }: { params: { step: string } }) {
  const step = parseInt(params.step);
  const question = questions[step];

  return <QuestionClient step={step} question={question} />;
}

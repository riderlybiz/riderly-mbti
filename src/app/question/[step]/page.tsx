// app/question/[step]/page.tsx

import { questions } from '@/lib/questions';
import QuestionClient from './QuestionClient';

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ step: `${i}` }));
}

export default function QuestionPage({ params }: { params: { step: string } }) {
  const step = parseInt(params.step);
  const question = questions[step];

  return <QuestionClient step={step} question={question} />;
}

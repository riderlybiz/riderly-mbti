// app/question/[step]/QuestionClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useAnswerStore } from '@/store/answerStore';
import {
  QuestionWrap,
  Bg,
  Card,
  ProgressBarWrap,
  PrevBtn,
  ProgressBarOuter,
  ProgressBarBg,
  ProgressBarFill,
  ProgressText,
  QuestionNum,
  QuestionText,
  Divider,
  OptionsWrap,
  OptionBtn,
  Logo
} from '@/styles/QuestionStyled';
import Image from 'next/image';

export default function QuestionClient({ step, question }) {
  const total = 12; // 총 질문 수
  const setAnswer = useAnswerStore((state) => state.setAnswer);
  const router = useRouter();

  const handleClick = (option) => {
    setAnswer(step, { axis: option.axis, score: option.score });
    router.push(step === 11 ? '/result' : `/question/${step + 1}`);
  };

  return (
    <QuestionWrap>
      <Bg>
        <Card>
          <ProgressBarWrap>
            <PrevBtn onClick={() => router.back()} aria-label="이전">&lt;</PrevBtn>
            <ProgressBarOuter>
              <ProgressBarBg />
              <ProgressBarFill percent={((step + 1) / total) * 100} />
              <ProgressText>{(step + 1)}/{total}</ProgressText>
            </ProgressBarOuter>
          </ProgressBarWrap>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <QuestionNum>{`Q${(step + 1)}.`}</QuestionNum>
            <QuestionText>{question.question}</QuestionText>
            <Divider />
            <OptionsWrap>
              {question.options.map((opt, i) => (
                <OptionBtn key={i} onClick={() => handleClick(opt)}>
                  {opt.text}
                </OptionBtn>
              ))}
            </OptionsWrap>
          </div>
        </Card>
        <a href="https://www.instagram.com/riderly_official/" target="_blank" rel="noopener noreferrer">
          <Image src="/riderly-mbti/images/instagram.png" alt='Plus' width={26} height={26} />
        </a>
        <Logo>
          <img src="/riderly-mbti/logo.png" alt="Riderly Logo" />
          RIDERLY
        </Logo>
      </Bg>
    </QuestionWrap>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useAnswerStore } from '@/store/answerStore';
import { calculateResult } from '@/lib/utils';
import { resultTypes } from '@/lib/resultTypes';
import {
  ResultWrap,
  Bg,
  Card,
  ImageWrap,
  StyledImg,
  Content,
  Title,
  Subtitle,
  Desc,
  FeatureList,
  Feature,
  MainButton,
  SubButton,
  ShareButton,
  Divider,
  Logo
} from '@/styles/ResultStyled';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'


export default function Result({ type }: { type: string }) {
  const router = useRouter();
  const answers = useAnswerStore((s) => s.answers);
  const resultKey = type ?? calculateResult(answers);
  const result = resultTypes[resultKey];
  const onGoToRiderlyLanding = async () => {
    window.location.href = `https://riderlybiz.github.io/riderly-landing/mbti`
  };
  const onShare = async () => {
    try {
      await navigator.clipboard.writeText(
        '동물로 알아보는 나의 바이크 성향!' + '\n' +
        '나는 ‘' + result.name + '’ 나왔어' + '\n' +
        '너는 어떤 유형일지 궁금해' + '\n' +
        '\n' +
        'https://riderlybiz.github.io/riderly-mbti/result/' + resultKey
      );
      alert('링크가 복사되었습니다!');
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      alert('복사에 실패했어요 😢');
    }
  };

  return (
    <ResultWrap>
      <Bg>
        <Card>
          <ImageWrap>
            <StyledImg src={result.image} alt={result.name} />
          </ImageWrap>
          <Content>
            <Subtitle>헬멧 속에 숨겨진 당신은</Subtitle>
            <Title>{result.name}</Title>
            <Desc>{result.desc}</Desc>
            <FeatureList>
              {result.bullets.map((f, i) => (
                <Feature key={i}>{f}</Feature>
              ))}
            </FeatureList>
            <MainButton onClick={onGoToRiderlyLanding}>나와 잘 맞는 라이더 보러 가기</MainButton>
            <Divider />
            <SubButton onClick={() => router.push('/')}>다시 시작하기</SubButton>
            <ShareButton onClick={onShare}>친구에게 공유하기</ShareButton>
          </Content>
        </Card>
        <Logo>
          <img src="/riderly-mbti/logo.png" alt="Riderly Logo" />
          RIDERLY
        </Logo>
      </Bg>
    </ResultWrap>
  );
}

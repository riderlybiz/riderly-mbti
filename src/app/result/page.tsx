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
import Image from 'next/image';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { v4 as uuidv4 } from 'uuid';

const getUserId = () => {
  const stored = localStorage.getItem('riderlyUserId');
  if (stored) return stored;

  const newId = uuidv4();
  localStorage.setItem('riderlyUserId', newId);
  return newId;
};

const saveResult = async (answers, resultKey) => {
  try {
    await setDoc(doc(db, 'mbtiResults', getUserId()), {
      resultKey: resultKey,
      answers: answers.map(ans => ({
        axis: ans.axis,
        score: ans.score
      })),
      timestamp: new Date()
    });
  } catch (err: unknown) {
    console.error("Error adding document: ", err);
  }
};

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

  const onDownloadImage = () => {
    const imageUrl = result.downloadImage;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${result.name}_Riderly.png`; // 저장될 파일명
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // type이 없으면 결과 저장
  if (!type) {
    saveResult(answers, resultKey);
  }

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
            <ShareButton onClick={onDownloadImage}>내 결과 저장하기</ShareButton>
            <ShareButton onClick={onShare}>친구에게 공유하기</ShareButton>
          </Content>
        </Card>
        <a href="https://www.instagram.com/riderly_official/" target="_blank" rel="noopener noreferrer">
          <Image src="/riderly-mbti/images/instagram.png" alt='Plus' width={26} height={26} />
        </a>
        <Logo>
          <img src="/riderly-mbti/logo.png" alt="Riderly Logo" />
          RIDERLY
        </Logo>
      </Bg>
    </ResultWrap>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { MainWrap } from "../styles/MainStyled";
import { Bg, Card, Title, SubTitle, ImageWrap, StyledImg, StartButton, Logo } from "../styles/MainStyled";
import { Metadata } from "next";
import Image from 'next/image';

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

export const Main = () => {
  const router = useRouter();

  return (
    <MainWrap>
      <Bg>
        <Card>
          <Title>나는 어떤<br />동물 라이더일까?</Title>
          <SubTitle>바이크 라이딩 유형 테스트</SubTitle>
          <ImageWrap>
            <StyledImg src="/riderly-mbti/images/main_thumbnail.png" alt="동물 라이더 일러스트" />
          </ImageWrap>
          <StartButton onClick={() => router.push('/question/0')}>테스트 시작하기</StartButton>
        </Card>
        <Logo>
          <img src="/riderly-mbti/logo.png" alt="Riderly Logo" />
          RIDERLY
        </Logo>
        <a href="https://www.instagram.com/riderly_official/" target="_blank" rel="noopener noreferrer">
          <Image src="/riderly-mbti/images/instagram.png" alt='Plus' width={26} height={26} />
        </a>
      </Bg>
    </MainWrap>
  )
}

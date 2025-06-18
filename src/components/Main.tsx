'use client';

import { useRouter } from 'next/navigation';

import { MainWrap } from "../styles/MainStyled";
import { Bg, Card, Title, SubTitle, ImageWrap, StyledImg, StartButton, Logo } from "../styles/MainStyled";

export const Main = () => {
    const router = useRouter();

    return (
        <MainWrap>
            <Bg>
                <Card>
                    <Title>나는 어떤<br />동물 라이더일까?</Title>
                    <SubTitle>바이크 라이딩 유형 테스트</SubTitle>
                    <ImageWrap>
                        <StyledImg src="/images/main_thumbnail.png" alt="동물 라이더 일러스트" />
                    </ImageWrap>
                    <StartButton onClick={() => router.push('/question/0')}>테스트 시작하기</StartButton>
                    <Logo>
                        <img src="/logo.png" alt="Riderly Logo" />
                        RIDERLY
                    </Logo>
                </Card>
            </Bg>
        </MainWrap>
    )
}

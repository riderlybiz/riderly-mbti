import styled from "styled-components";

export const MainWrap = styled.main`
    width: 100dvw;
    overflow-x: hidden;
`

export const Bg = styled.div`
  min-height: 100vh;
  background: #bcc0c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  height: 850px;
  border-radius: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 16px 120px 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: #FF6F00;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.3;
`;

export const SubTitle = styled.div`
  color: #222;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  max-width: 340px;;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 36px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StartButton = styled.button`
  width: 100%;
  max-width: 260px;
  padding: 16px 0;
  border-radius: 999px;
  background: #FF6F00;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-bottom: 40px;
  transition: background 0.2s;
  &:hover {
    background: #EE8B60;
  }
`;

export const Logo = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 정렬 추가 */
  font-size: 28px;
  font-weight: bold;
  color: #f28c28;
  letter-spacing: 2px;
  gap: 8px; /* 텍스트와 이미지 사이 간격 */
  
  img {
    width: 80px;   /* 필요 시 더 작게 */
    height: 80px;
    object-fit: contain;
  }
`;
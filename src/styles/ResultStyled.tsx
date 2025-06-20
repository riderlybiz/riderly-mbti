import styled from "styled-components";

export const ResultWrap = styled.main`
    width: 100dvw;
    overflow-x: hidden;
`

export const Bg = styled.div`
  min-height: 100vh;
  background: #bcc0c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  border-radius: 32px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  margin-bottom: 40px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 100%;
  padding: 28px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.div`
  color: #7c7f85;
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Title = styled.div`
  color: #FF6F00;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
  text-align: center;
`;

export const Desc = styled.div`
  color: #222;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 18px;
  text-align: center;
  white-space: pre-line
`;

export const FeatureList = styled.ul`
  width: 100%;
  margin-bottom: 28px;
  padding-left: 0;
  text-align: center;
`;

export const Feature = styled.li`
  color: rgb(0,0,0);
  font-size: 15px;
  margin-bottom: 6px;
  list-style: none;
  align-items: flex-start;
  gap: 6px;
  &:before {
    content: "•";
    color: #FF6F00;
    font-size: 18px;
    margin-right: 6px;
    line-height: 1;
  }
`;

export const MainButton = styled.button`
  width: 100%;
  max-width: 260px;
  padding: 14px 0;
  border-radius: 999px;
  background: #FF6F00;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-bottom: 14px;
  transition: background 0.2s;
  &:hover {
    background: #EE8B60;
  }
`;

export const Divider = styled.div`
  width: 64px;
  height: 4px;
  background: #e6b89c;
  border-radius: 2px;
  margin: 18px auto;
`;

export const SubButton = styled.button`
  width: 100%;
  max-width: 260px;
  padding: 14px 0;
  border-radius: 999px;
  background: #fff;
  color: #FF6F00;
  font-size: 17px;
  font-weight: 600;
  border: 2px solid #FF6F00;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background:rgba(255, 77, 0, 0.1);
  }
`;

export const ShareButton = styled.button`
  width: 100%;
  max-width: 260px;
  padding: 10px 0;
  border-radius: 999px;
  background: none;
  color: #FF6F00;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  text-decoration: underline;
`;

export const Logo = styled.div`
  margin-top: 10px;
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
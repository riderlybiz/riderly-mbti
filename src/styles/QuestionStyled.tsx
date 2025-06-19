import styled from "styled-components";

export const QuestionWrap = styled.main`
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
  height: 750px;
  margin-top: 32px;
  border-radius: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 16px 120px 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  position: relative;
`;

export const ProgressBarWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 8px;
`;

export const PrevBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #EE8B60;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  border: none;
  margin-right: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBarOuter = styled.div`
  flex: 1;
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
`;

export const ProgressBarBg = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 24px;
  background: #ededed;
  border-radius: 12px;
`;

export const ProgressBarFill = styled.div<{ percent: number }>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  background: #FF6F00;
  border-radius: 12px;
  width: ${({ percent }) => percent}%;
  min-width: 32px;
  max-width: 100%;
  transition: width 0.3s;
`;

export const ProgressText = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #bcbcbc;
  font-size: 15px;
  font-weight: 600;
`;

export const QuestionNum = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #FF6F00;
  margin-bottom: 8px;
`;

export const QuestionText = styled.div`
  font-size: 20px;
  color: #444;
  margin-bottom: 32px;
  text-align: center;
`;

export const Divider = styled.div`
  width: 64px;
  height: 4px;
  background: #EE8B60;
  border-radius: 2px;
  margin-bottom: 32px;
`;

export const OptionsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const OptionBtn = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 14px 0;
  border-radius: 999px;
  background: #FF6F00;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background 0.2s;
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
  &:hover {
    background: #EE8B60;
  }
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
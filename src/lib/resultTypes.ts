// lib/resultTypes.ts

type ResultInfo = {
  name: string;
  desc: string;
  bullets: string[];
  image: string;
  ogThumbnailImage: string;
  downloadImage: string;
};

// 4자리 이진값: V/T, S/G, P/I, C/L (앞에서부터 차례대로)
export const resultTypes: Record<string, ResultInfo> = {
  '0000': {
    name: '고독한 테크니션',
    desc: '정교한 솔로 라이딩을 계획하고, \n전문 지식을 나누는 전략가',
    bullets: [
      '정밀하고 빠른 주행에 능숙',
      '사전 계획과 장비 준비 철저',
      '혼자서도 전략적으로 움직임',
    ],
    image: '/riderly-mbti/result/1.png',
    ogThumbnailImage: '/riderly-mbti/result/share/1.png',
    downloadImage: '/riderly-mbti/result/download/1.png'
  },
  '0001': {
    name: '침묵의 마스터',
    desc: '완벽하게 계획된 자신만의 길을 \n묵묵히 질주하는 고독한 장인',
    bullets: [
      '말 없이 깔끔한 주행 선호',
      '루트와 시간 관리에 강함',
      '혼라이딩에 완전히 몰입',
    ],
    image: '/riderly-mbti/result/2.png',
    ogThumbnailImage: '/riderly-mbti/result/share/2.png',
    downloadImage: '/riderly-mbti/result/download/2.png'
  },
  '0010': {
    name: '자유로운 스피릿',
    desc: '즉흥적인 솔로 질주를 즐기며,\n경험을 생생하게 공유하는 자유 영혼',
    bullets: [
      '기분 따라 즉흥적으로 출발',
      '속도와 와인딩을 즐김',
      '새로운 사람과 금방 친해짐',
    ],
    image: '/riderly-mbti/result/3.png',
    ogThumbnailImage: '/riderly-mbti/result/share/3.png',
    downloadImage: '/riderly-mbti/result/download/3.png'
  },
  '0011': {
    name: '고독한 방랑자',
    desc: '예측 불가능한 솔로 여정을 \n조용히 만끽하는 미지의 탐험가',
    bullets: [
      '혼자 속도감 있게 질주',
      '예고 없는 출발과 복귀',
      '조용하지만 에너지 있는 스타일',
    ],
    image: '/riderly-mbti/result/4.png',
    ogThumbnailImage: '/riderly-mbti/result/share/4.png',
    downloadImage: '/riderly-mbti/result/download/4.png'
  },
  '0100': {
    name: '정밀 타격 리더',
    desc: '빠르고 조직적인 그룹 라이딩을 \n지휘하는 소통형 전략가',
    bullets: [
      '빠른 단체 주행을 리드',
      '무전기 등 장비 활용 능숙',
      '흐름 유지에 민감한 성향',
    ],
    image: '/riderly-mbti/result/5.png',
    ogThumbnailImage: '/riderly-mbti/result/share/5.png',
    downloadImage: '/riderly-mbti/result/download/5.png'
  },
  '0101': {
    name: '질주의 선봉장',
    desc: '계획된 쾌속 질주를 묵묵히 이끄는 \n그룹의 선두 주자',
    bullets: [
      '말없이 팀을 이끄는 선두 주자',
      '루트, 타임테이블 완벽 준비',
      '고속 그룹 라이딩을 선호',
    ],
    image: '/riderly-mbti/result/6.png',
    ogThumbnailImage: '/riderly-mbti/result/share/6.png',
    downloadImage: '/riderly-mbti/result/download/6.png'
  },
  '0110': {
    name: '스파크 메이커',
    desc: '즉흥적인 스릴을 함께 만들고 \n분위기를 주도하는 그룹의 활력소',
    bullets: [
      '즉흥 벙글을 자주 제안',
      '빠른 주행과 활발한 소통',
      '단체 분위기를 띄우는 에너지 담당',
    ],
    image: '/riderly-mbti/result/7.png',
    ogThumbnailImage: '/riderly-mbti/result/share/7.png',
     downloadImage: '/riderly-mbti/result/download/7.png'
  },
  '0111': {
    name: '바람을 가르는 추격자',
    desc: '예측 불가능한 쾌속 질주를 \n조용히 즐기는 그룹의 그림자',
    bullets: [
      '조용히 그룹을 따라 질주',
      '예측 불가한 출발과 코스',
      '빠르지만 존재감 낮은 스텔스형',
    ],
    image: '/riderly-mbti/result/8.png',
    ogThumbnailImage: '/riderly-mbti/result/share/8.png',
    downloadImage: '/riderly-mbti/result/download/8.png'
  },
  '1000': {
    name: '루트 마스터',
    desc: '아름다운 솔로 여정을 계획하고, \n감상을 나누는 낭만적 설계자',
    bullets: [
      '여유로운 풍경 감상을 중시',
      '투어 루트를 꼼꼼히 설계',
      '단체 주행 시 배려심 깊은 스타일',
    ],
    image: '/riderly-mbti/result/9.png',
    ogThumbnailImage: '/riderly-mbti/result/share/9.png',
    downloadImage: '/riderly-mbti/result/download/9.png'
  },
  '1001': {
    name: '풍경 감상가',
    desc: '계획된 여정 속에서 홀로 \n풍경과 교감하는 사색적 라이더',
    bullets: [
      '정해진 계획대로 움직임',
      '감성적이고 사색적인 주행',
      '조용한 분위기를 선호',
    ],
    image: '/riderly-mbti/result/10.png',
    ogThumbnailImage: '/riderly-mbti/result/share/10.png',
    downloadImage: '/riderly-mbti/result/download/10.png'
  },
  '1010': {
    name: '감성 유랑객',
    desc: '즉흥적인 솔로 투어의 감동을 \n공유하는 자유로운 이야기꾼',
    bullets: [
      '오늘의 기분 따라 코스 결정',
      '함께 타는 사람과 소통 중시',
      '감성을 나누는 따뜻한 스타일',
    ],
    image: '/riderly-mbti/result/11.png',
    ogThumbnailImage: '/riderly-mbti/result/share/11.png',
    downloadImage: '/riderly-mbti/result/download/11.png'
  },
  '1011': {
    name: '길 위의 철학자',
    desc: '정처 없는 여정 속에서 조용히 \n자신만의 의미를 찾는 라이더',
    bullets: [
      '조용히 떠나 혼자만의 시간을 즐김',
      '감성적이고 즉흥적인 여정 선호',
      '말 없이 풍경과 교감',
    ],
    image: '/riderly-mbti/result/12.png',
    ogThumbnailImage: '/riderly-mbti/result/share/12.png',
    downloadImage: '/riderly-mbti/result/download/12.png'
  },
  '1100': {
    name: '다양한 길잡이',
    desc: '편안하고 계획적인 그룹 투어를 이끌며, \n모두를 챙기는 소통가',
    bullets: [
      '계획형 단체 투어에 강함',
      '팀워크와 커뮤니케이션 중시',
      '모두를 잘 챙기는 리더 스타일',
    ],
    image: '/riderly-mbti/result/13.png',
    ogThumbnailImage: '/riderly-mbti/result/share/13.png',
    downloadImage: '/riderly-mbti/result/download/13.png'
  },
  '1101': {
    name: '로드 매니저',
    desc: '잘 짜인 여유로운 여정을 묵묵히 \n지원하는 그룹의 안정적인 동반자',
    bullets: [
      '정리 담당 역할을 자주 맡음',
      '여유로운 주행 스타일',
      '조용히 팀을 지원하는 조율자',
    ],
    image: '/riderly-mbti/result/14.png',
    ogThumbnailImage: '/riderly-mbti/result/share/14.png',
    downloadImage: '/riderly-mbti/result/download/14.png'
  },
  '1110': {
    name: '유쾌한 탐험대장',
    desc: '즉흥적인 그룹 투어에서 즐거움을 \n창조하고 전파하는 분위기 메이커',
    bullets: [
      '벙글을 즉흥적으로 제안',
      '모두와 친해지고 분위기를 띄움',
      '즐거운 라이딩을 함께 만들기',
    ],
    image: '/riderly-mbti/result/15.png',
    ogThumbnailImage: '/riderly-mbti/result/share/15.png',
    downloadImage: '/riderly-mbti/result/download/15.png'
  },
  '1111': {
    name: '평화로운 동행자',
    desc: '여유롭고 즉흥적인 그룹 라이딩을 \n말없이 함께 즐기는 편안한 친구',
    bullets: [
      '즉흥적이지만 여유로운 주행',
      '단체 속에서도 조용한 성향',
      '분위기에 자연스럽게 녹아듦',
    ],
    image: '/riderly-mbti/result/16.png',
    ogThumbnailImage: '/riderly-mbti/result/share/16.png',
    downloadImage: '/riderly-mbti/result/download/16.png'
  },
};

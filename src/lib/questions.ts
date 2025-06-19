// lib/questions.ts

export type Axis = 'V' | 'T' | 'S' | 'G' | 'P' | 'I' | 'C' | 'L';

export interface Option {
  text: string;
  axis: Axis;
  score: number;
}

export interface Question {
  question: string;
  options: [Option, Option];
}

export const questions: Question[] = [
  {
    question: '선호하는 주행 코스는?',
    options: [
      { text: '고속 국도 / 와인딩 위주', axis: 'V', score: +1 },
      { text: '해안도로 / 시골길 / 풍경 위주', axis: 'T', score: +1 },
    ],
  },
  {
    question: '그룹 라이딩은 나에게…',
    options: [
      { text: '피곤하거나 부담스러운 경우가 많다', axis: 'S', score: +1 },
      { text: '새로운 사람과 소통할 좋은 기회다', axis: 'G', score: +1 },
    ],
  },
  {
    question: '라이딩 중 나는 보통…',
    options: [
      { text: '속도감을 즐기며 달린다', axis: 'V', score: +1 },
      { text: '풍경을 즐기며 달린다', axis: 'T', score: +1 },
    ],
  },
  {
    question: '라이딩은 보통…',
    options: [
      { text: '혼자 타는 게 제일 편하다', axis: 'S', score: +1 },
      { text: '누군가와 함께 타는 게 더 좋다', axis: 'G', score: +1 },
    ],
  },
  {
    question: '그룹 라이딩 참여 빈도는?',
    options: [
      {
        text: '거의 참여 하지 않는다 /\n 1년에 3회 이하 수준',
        axis: 'S',
        score: +1,
      },
      {
        text: '대부분 그룹 라이딩 한다 /\n 기회만 있으면 참여하려고 한다',
        axis: 'G',
        score: +1,
      },
    ],
  },
  {
    question: '장거리 라이딩을 할 경우 나는…',
    options: [
      { text: '최대한 빠르게 도착하는 걸 선호한다', axis: 'V', score: +1 },
      { text: '중간에 쉬며 여유롭게 가는 걸 선호한다', axis: 'T', score: +1 },
    ],
  },
  {
    question: '라이딩 투어를 계획할 때 나는…',
    options: [
      { text: '날짜/날씨/경로를 미리 정리하고 계획한다', axis: 'P', score: +1 },
      { text: '즉흥적으로 움직이는 걸 더 선호한다', axis: 'I', score: +1 },
    ],
  },
  {
    question: '라이딩 투어가 끝난 후 나는…',
    options: [
      {
        text: '사람들과 식사, 티타임을 \n가지며 후기를 나눈다',
        axis: 'C',
        score: +1,
      },
      {
        text: '혼자 조용히 정리하고 집에 가는 편이다',
        axis: 'L',
        score: +1,
      },
    ],
  },
  {
    question: '라이딩 투어 준비는?',
    options: [
      { text: '루트, 날씨, 장비까지 꼼꼼히 점검한다', axis: 'P', score: +1 },
      { text: '대충 보고 출발하는 편이다', axis: 'I', score: +1 },
    ],
  },
  {
    question: '라이딩 모임에서의 나는…',
    options: [
      { text: '말이 많은 편이다', axis: 'C', score: +1 },
      { text: '듣는 걸 좋아하고 조용한 편이다', axis: 'L', score: +1 },
    ],
  },
  {
    question: '주말 일정은 보통…',
    options: [
      { text: '이미 계획되어 있다', axis: 'P', score: +1 },
      { text: '그날 기분 따라 결정한다', axis: 'I', score: +1 },
    ],
  },
  {
    question: '라이딩 중 소통 방식은?',
    options: [
      { text: '인터콤이나 음성통화를 사용해 \n실시간으로 소통한다', axis: 'C', score: +1 },
      { text: '굳이 말하지 않아도 맞춰 간다', axis: 'L', score: +1 },
    ],
  },
];

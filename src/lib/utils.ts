// /lib/utils.ts
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export function calculateResult(answers) {
  const axisScore = { V: 0, T: 0, S: 0, G: 0, P: 0, I: 0, C: 0, L: 0 };

  answers.forEach((ans) => {
    if (ans) axisScore[ans.axis] += ans.score;
  });

  // 각 축 양수/음수에 따라 이진 결정
  const resultKey =
    (axisScore.V < axisScore.T ? '1' : '0') +
    (axisScore.S < axisScore.G ? '1' : '0') +
    (axisScore.P < axisScore.I ? '1' : '0') +
    (axisScore.C < axisScore.L ? '1' : '0');

  return resultKey; // 예: "1011"
}

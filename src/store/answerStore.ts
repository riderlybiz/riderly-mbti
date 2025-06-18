// /store/answerStore.ts
import { create } from 'zustand';

type Answer = {
  axis: 'V' | 'T' | 'S' | 'G' | 'P' | 'I' | 'C' | 'L';  // 축 ID
  score: number;               // +1 only (음수는 반대 선택지에서 처리)
};

type AnswerStore = {
  answers: Answer[]; // 길이 12
  setAnswer: (step: number, answer: Answer) => void;
  reset: () => void;
};

export const useAnswerStore = create<AnswerStore>((set) => ({
  answers: Array(12).fill(null),
  setAnswer: (step, answer) =>
    set((state) => {
      const newAnswers = [...state.answers];
      newAnswers[step] = answer;
      return { answers: newAnswers };
    }),
  reset: () => set({ answers: Array(12).fill(null) }),
}));

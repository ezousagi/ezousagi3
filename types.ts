
export type FortuneGrade = '大吉' | '中吉' | '小吉' | '吉' | '末吉' | '労い吉' | '希望吉' | '癒し吉';

export interface FortuneResult {
  fortune: FortuneGrade;
  message: string;
  advice: string;
  lucky: string;
  action: string;
  artKey: string;
  music: 'bright' | 'relax' | 'healing' | 'hope' | 'calm' | 'gentle';
}

export type ChoiceId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6';

export interface OmikujiData {
  [key: string]: FortuneResult[];
}

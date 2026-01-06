
import { OmikujiData } from './types.ts';

export const OMIKUJI_DATA: OmikujiData = {
  "c1": [
    {
      "fortune": "大吉",
      "message": "今年は本当に頑張りました。努力がしっかり実を結んだ一年です。",
      "advice": "今日は自分に最高のご褒美を。",
      "lucky": "橙色",
      "action": "ゆっくり入浴して疲れをリセット",
      "artKey": "happy_rabbit",
      "music": "bright"
    },
    {
      "fortune": "中吉",
      "message": "充実感に満ちた一年。達成したことを誇ってください。",
      "advice": "次は楽しむ目標を立ててみて。",
      "lucky": "青緑",
      "action": "短い散歩で冬の空気を吸う",
      "artKey": "smile_cat",
      "music": "bright"
    },
    {
      "fortune": "吉",
      "message": "堅実に一歩一歩進めた一年でした。あなたの誠実さが輝いています。",
      "advice": "身近な人の優しさに目を向けて。",
      "lucky": "黄金色",
      "action": "温かいお茶を丁寧に淹れる",
      "artKey": "balance_fox",
      "music": "gentle"
    }
  ],
  "c2": [
    {
      "fortune": "労い吉",
      "message": "忙しい中でも、ここまでやり切りました。本当にお疲れさまです。",
      "advice": "まずは心ゆくまで休息を。",
      "lucky": "薄橙",
      "action": "お気に入りの温かい飲み物を飲む",
      "artKey": "tired_bear",
      "music": "relax"
    },
    {
      "fortune": "癒し吉",
      "message": "自分のペースを守り抜いた一年。その優しさは周りにも伝わっています。",
      "advice": "スマホを置いて、静かな時間を。",
      "lucky": "藤色",
      "action": "早めに布団に入る",
      "artKey": "sleep_rabbit",
      "music": "calm"
    }
  ],
  "c3": [
    {
      "fortune": "希望吉",
      "message": "楽しいことも辛いことも、すべてがあなたを強くしました。",
      "advice": "良かったことを一つだけ思い出して。",
      "lucky": "水色",
      "action": "感謝の気持ちをメモに書く",
      "artKey": "seed_bird",
      "music": "hope"
    },
    {
      "fortune": "吉",
      "message": "変化の多い一年でしたが、柔軟に乗り越えたあなたに拍手です。",
      "advice": "新しい風が吹き始めています。",
      "lucky": "若草色",
      "action": "靴を磨いて新年を待つ",
      "artKey": "balance_fox",
      "music": "gentle"
    }
  ],
  "c4": [
    {
      "fortune": "癒し吉",
      "message": "本当によく耐えました。まずは休むことを自分に許してください。",
      "advice": "「何もしない」日を作ってみる。",
      "lucky": "ミルク色",
      "action": "深くゆっくりと深呼吸をする",
      "artKey": "sleep_rabbit",
      "music": "healing"
    },
    {
      "fortune": "末吉",
      "message": "今は冬の眠りの時期。春に向けて根を張っている最中です。",
      "advice": "焦らず、自分を責めないで。",
      "lucky": "鼠色",
      "action": "好きな音楽を聴き流す",
      "artKey": "thinking_cat",
      "music": "calm"
    }
  ],
  "c5": [
    {
      "fortune": "希望吉",
      "message": "思うようにいかなくても、それは次への大切な準備期間です。",
      "advice": "小さな一歩が未来を変えます。",
      "lucky": "薄緑",
      "action": "やりたいことを一つだけ書く",
      "artKey": "seed_bird",
      "music": "hope"
    },
    {
      "fortune": "吉",
      "message": "新しい挑戦をした自分を褒めてあげましょう。種は蒔かれました。",
      "advice": "自分を信じる気持ちを忘れずに。",
      "lucky": "緋色",
      "action": "窓を開けて空気を入れ替える",
      "artKey": "happy_rabbit",
      "music": "bright"
    }
  ],
  "c6": [
    {
      "fortune": "癒し吉",
      "message": "気持ちが整理できなくても大丈夫。時間がゆっくり味方になります。",
      "advice": "今はただ、自分の心を感じるだけでOK。",
      "lucky": "薄水色",
      "action": "一行だけ日記を書いてみる",
      "artKey": "thinking_cat",
      "music": "calm"
    },
    {
      "fortune": "労い吉",
      "message": "誰かのために頑張りすぎたかもしれません。今度は自分のために。",
      "advice": "自分を甘やかす許可証を出そう。",
      "lucky": "桃色",
      "action": "美味しい甘味を食べる",
      "artKey": "smile_cat",
      "music": "relax"
    }
  ]
};

export const CHOICES = [
  { id: 'c1', text: '全力で駆け抜けた！', icon: '🏃' },
  { id: 'c2', text: 'なんとか乗り切った...', icon: '😌' },
  { id: 'c3', text: '変化の多い一年だった', icon: '🌀' },
  { id: 'c4', text: '正直、すごく疲れた', icon: '💤' },
  { id: 'c5', text: '新しいことに挑戦した', icon: '🌱' },
  { id: 'c6', text: 'まだ気持ちの整理中', icon: '💭' },
];

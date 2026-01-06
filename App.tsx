
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, RefreshCcw, Heart, Download, Music, Music2 } from 'lucide-react';
import confetti from 'canvas-confetti';

import { Layout } from './components/Layout.tsx';
import { Button } from './components/Button.tsx';
import { CHOICES, OMIKUJI_DATA } from './constants.ts';
import { ChoiceId, FortuneResult } from './types.ts';

type Step = 'splash' | 'question' | 'loading' | 'result';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('splash');
  const [selectedChoice, setSelectedChoice] = useState<ChoiceId | null>(null);
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [isAudioOn, setIsAudioOn] = useState(false);

  // Initial confetti and splash skip
  useEffect(() => {
    if (step === 'splash') {
      const timer = setTimeout(() => setStep('question'), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleChoice = (id: ChoiceId) => {
    setSelectedChoice(id);
    setStep('loading');
    
    // Simulate selection logic
    setTimeout(() => {
      const candidates = OMIKUJI_DATA[id];
      const selected = candidates[Math.floor(Math.random() * candidates.length)];
      setResult(selected);
      setStep('result');
      
      // Celebrate result
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b4513', '#e6ccb2', '#ddb892', '#ffffff']
      });
    }, 2500);
  };

  const reset = () => {
    setStep('question');
    setSelectedChoice(null);
    setResult(null);
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: '年末おみくじ',
        text: `私の今年のおみくじは【${result?.fortune}】でした！ #年末おみくじ #おつかれさま2024`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('クリップボードにコピーしました！');
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {step === 'splash' && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-8xl"
            >
              🧧
            </motion.div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-[0.2em] text-[#8b4513]">年末おみくじ</h1>
              <p className="text-[#a0785a] tracking-widest text-sm">今年もおつかれさまでした</p>
            </div>
            <div className="w-12 h-[2px] bg-[#8b4513]/20"></div>
          </motion.div>
        )}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col space-y-8 py-4"
          >
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-[#8b4513]">今年はどんな一年でしたか？</h2>
              <p className="text-sm text-[#8b4513]/60">今の気持ちに近いものを選んでください</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CHOICES.map((choice) => (
                <motion.button
                  key={choice.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChoice(choice.id as ChoiceId)}
                  className="bg-white/80 border-2 border-[#e6ccb2] p-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:border-[#8b4513] transition-colors"
                >
                  <span className="text-4xl">{choice.icon}</span>
                  <span className="text-sm font-medium text-[#5d4037] text-center leading-relaxed">
                    {choice.text}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center space-y-12"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border-4 border-dashed border-[#8b4513]/20 rounded-full flex items-center justify-center"
              >
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center text-6xl"
              >
                🔮
              </motion.div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-[#8b4513] font-medium tracking-widest animate-pulse">
                あなたの一年を振り返り中...
              </p>
              <p className="text-xs text-[#8b4513]/50 italic">
                {selectedChoice === 'c4' ? "本当におつかれさまでした。" : "間もなくお告げが届きます。"}
              </p>
            </div>
          </motion.div>
        )}

        {step === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col space-y-6 py-4"
          >
            {/* Fortune Card */}
            <div className="bg-white border-[10px] border-[#8b4513]/5 rounded-sm p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8b4513]"></div>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="text-xs tracking-[0.5em] text-[#8b4513]/40 font-bold uppercase border-b border-[#8b4513]/10 pb-1">
                  2024 年末おみくじ
                </div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold text-[#8b4513] py-4 border-y-2 border-[#8b4513]/10 w-full text-center tracking-widest"
                >
                  {result.fortune}
                </motion.div>

                <div className="space-y-4 w-full text-center">
                  <p className="text-lg leading-relaxed font-medium">
                    {result.message}
                  </p>
                  <div className="bg-[#fdf6f0] p-4 rounded-lg space-y-2">
                    <p className="text-sm font-bold text-[#8b4513]">【助言】</p>
                    <p className="text-sm text-[#5d4037]">{result.advice}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#8b4513]/10">
                  <div className="text-center">
                    <p className="text-[10px] text-[#8b4513]/60 mb-1">ラッキーカラー</p>
                    <p className="text-sm font-bold">{result.lucky}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-[#8b4513]/60 mb-1">おすすめの行動</p>
                    <p className="text-sm font-bold">{result.action}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center opacity-10 grayscale">
                 <Sparkles size={40} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={share}>
                <Share2 size={18} /> 結果を共有する
              </Button>
              <Button variant="secondary" onClick={reset}>
                <RefreshCcw size={18} /> もう一度引く
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-[#8b4513]/40 py-4">
              <Heart size={14} className="fill-current" />
              <span className="text-[10px] tracking-widest">良いお年をお迎えください</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating BGM Toggle (Placeholder) */}
      <motion.button
        onClick={() => setIsAudioOn(!isAudioOn)}
        className="fixed bottom-20 right-6 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#8b4513]/60"
        whileTap={{ scale: 0.9 }}
      >
        {isAudioOn ? <Music size={18} /> : <Music2 size={18} className="opacity-30" />}
      </motion.button>
    </Layout>
  );
};

export default App;

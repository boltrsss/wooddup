/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Dog, 
  Clock, 
  Facebook, 
  Twitter, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  Share2,
  Smartphone,
  Zap,
  XCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/// --- Components ---

const Navbar = () => (
  <nav className="bg-[#2295A2] text-white py-3 px-4 sticky top-0 z-50 shadow-md">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <a href="https://go.wisecombo.com/click" className="flex items-center gap-2 font-bold text-2xl">
        <Dog className="w-8 h-8" />
        <span className="tracking-tight">Dogglie</span>
      </a>
      <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest opacity-90">
        <a href="https://go.wisecombo.com/click" className="cursor-pointer hover:opacity-100 transition-opacity">Special Report</a>
        <a href="https://go.wisecombo.com/click" className="cursor-pointer hover:opacity-100 transition-opacity">Pet Health</a>
        <a href="https://go.wisecombo.com/click" className="cursor-pointer hover:opacity-100 transition-opacity">Training Tips</a>
      </div>
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </div>
  </nav>
);

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-[60] md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
        >
          <a 
            href="https://go.wisecombo.com/click"
            className="flex items-center justify-center gap-2 w-full bg-[#2B9A0A] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
          >
            <CheckCircle2 className="w-5 h-5" />
            Try NoBark for 63% Off Today
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface CommentProps {
  name: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
  key?: number;
}

const Comment = ({ name, avatar, text, time, likes }: CommentProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex gap-3 py-4 border-b border-gray-100 last:border-0"
  >
    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" referrerPolicy="no-referrer" />
    <div className="flex-1">
      <div className="bg-gray-100 rounded-2xl px-4 py-2 inline-block max-w-full">
        <p className="font-bold text-sm text-blue-600 hover:underline cursor-pointer">{name}</p>
        <p className="text-sm text-gray-800 leading-snug">{text}</p>
      </div>
      <div className="flex gap-4 mt-1 ml-2 text-xs font-bold text-gray-500">
        <button className="hover:underline">Like</button>
        <button className="hover:underline">Reply</button>
        <span>{time}</span>
        {likes > 0 && (
          <span className="flex items-center gap-1 text-blue-500">
            <ThumbsUp className="w-3 h-3 fill-current" />
            {likes}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const KeyBenefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#2295A2]" />,
      title: "100% Safe & Humane",
      description: "Uses ultrasonic sound that only dogs can hear. No shocks, no chemicals, no pain."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#2295A2]" />,
      title: "Instant Results",
      description: "Stops barking, jumping, and aggressive behavior in seconds with a single click."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#2295A2]" />,
      title: "Pocket-Sized Training",
      description: "Take it on walks, to the park, or use it anywhere in your home. Fits in your pocket."
    }
  ];

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, i) => (
        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="bg-[#E9F5F6] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
            {benefit.icon}
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{benefit.title}</h4>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

const ComparisonTable = () => {
  return (
    <div className="my-24 bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
      <div className="bg-[#2295A2] p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Why NoBark is the #1 Choice</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-500">Feature</th>
              <th className="p-6 text-sm font-bold uppercase tracking-widest text-[#2295A2] text-center">NoBark</th>
              <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-400 text-center">Shock Collars</th>
              <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-400 text-center">Trainers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { f: "Safe & Humane", n: true, s: false, t: true },
              { f: "Instant Results", n: true, s: true, t: false },
              { f: "One-Time Cost", n: true, s: true, t: false },
              { f: "Easy to Use", n: true, s: false, t: false },
              { f: "Portable", n: true, s: true, t: false },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-bold text-gray-700">{row.f}</td>
                <td className="p-6 text-center">
                  {row.n ? <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-400 mx-auto" />}
                </td>
                <td className="p-6 text-center">
                  {row.s ? <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-400 mx-auto" />}
                </td>
                <td className="p-6 text-center">
                  {row.t ? <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-400 mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const HowToUse = () => {
  const steps = [
    {
      num: "01",
      title: "Point",
      desc: "Point NoBark at your dog when they start barking or misbehaving."
    },
    {
      num: "02",
      title: "Press",
      desc: "Press the button to emit the safe, ultrasonic sound waves."
    },
    {
      num: "03",
      title: "Praise",
      desc: "Your dog stops instantly. Reward them for their good behavior!"
    }
  ];

  return (
    <div className="my-20">
      <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 tracking-tight uppercase tracking-widest text-[#2295A2]">Simple 3-Step Training</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
            <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#2295A2] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
              {step.num}
            </span>
            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-2">{step.title}</h4>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const FAQSection = () => {
  const faqs = [
    {
      q: "Does it hurt the dog?",
      a: "No! The ultrasonic sound is at a frequency that is disruptive but completely harmless to dogs. It's like a 'stop' signal that gets their attention without any pain."
    },
    {
      q: "Will it affect other pets?",
      a: "NoBark is designed to be directional. While other dogs nearby might hear it, it is most effective when pointed directly at the dog you are training."
    },
    {
      q: "How long does the battery last?",
      a: "The military-grade battery is designed for long-term use. With normal daily training, it can last up to 6 months before needing a replacement."
    }
  ];

  return (
    <div className="my-24 bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 tracking-tight">Frequently Asked Questions</h3>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
              <span className="bg-[#2295A2] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
              {faq.q}
            </h4>
            <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [loadCount, setLoadCount] = useState(0);
  const [visibleComments, setVisibleComments] = useState(5);
  const [sortBy, setSortBy] = useState<'recent' | 'liked' | 'oldest'>('recent');

  const allComments = [
    { name: "Sarah Jenkins", avatar: "https://picsum.photos/seed/sarah/100/100", text: "This actually works! My golden retriever used to bark at every squirrel, now he just looks at me when I click the button. Best $40 I ever spent.", time: "2h ago", likes: 42, timestamp: Date.now() - 2 * 60 * 60 * 1000 },
    { name: "Michael Ross", avatar: "https://picsum.photos/seed/michael/100/100", text: "I was skeptical because of the price but the military tech part is real. It gets their attention immediately without hurting them. My neighbors finally stopped complaining!", time: "5h ago", likes: 18, timestamp: Date.now() - 5 * 60 * 60 * 1000 },
    { name: "Linda Thompson", avatar: "https://picsum.photos/seed/linda/100/100", text: "Just ordered mine with the 63% discount. Can't wait to try it on my loud beagles!", time: "8h ago", likes: 3, timestamp: Date.now() - 8 * 60 * 60 * 1000 },
    { name: "David Miller", avatar: "https://picsum.photos/seed/david/100/100", text: "I've tried everything, from shock collars to expensive trainers. This is the only thing that worked without scaring my dog.", time: "10h ago", likes: 25, timestamp: Date.now() - 10 * 60 * 60 * 1000 },
    { name: "Emily Chen", avatar: "https://picsum.photos/seed/emily/100/100", text: "The delivery was super fast. It arrived in 2 days and I started using it immediately. Highly recommend!", time: "12h ago", likes: 7, timestamp: Date.now() - 12 * 60 * 60 * 1000 },
    // Load 1
    { name: "James Wilson", avatar: "https://picsum.photos/seed/james/100/100", text: "My dog used to jump on everyone who walked through the door. Now he sits calmly when I use the NoBark. It's a game changer.", time: "1d ago", likes: 12, timestamp: Date.now() - 1 * 24 * 60 * 60 * 1000 },
    { name: "Jessica Taylor", avatar: "https://picsum.photos/seed/jessica/100/100", text: "I love that it's humane. I would never use a shock collar, so this was the perfect alternative.", time: "1d ago", likes: 9, timestamp: Date.now() - 1.1 * 24 * 60 * 60 * 1000 },
    { name: "Robert Brown", avatar: "https://picsum.photos/seed/robert/100/100", text: "Great product, great price. The 63% discount made it a no-brainer.", time: "1d ago", likes: 4, timestamp: Date.now() - 1.2 * 24 * 60 * 60 * 1000 },
    { name: "Karen White", avatar: "https://picsum.photos/seed/karen/100/100", text: "I was worried it would bother my other pets, but it only seems to affect the dog I'm pointing it at. Very precise!", time: "2d ago", likes: 15, timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000 },
    { name: "Steven Hall", avatar: "https://picsum.photos/seed/steven/100/100", text: "Finally, some peace and quiet in the house. Thank you NoBark!", time: "2d ago", likes: 21, timestamp: Date.now() - 2.1 * 24 * 60 * 60 * 1000 },
    // Load 2
    { name: "Nancy Adams", avatar: "https://picsum.photos/seed/nancy/100/100", text: "I bought three, one for each room. Now I'm always ready when the barking starts.", time: "3d ago", likes: 6, timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000 },
    { name: "Paul Baker", avatar: "https://picsum.photos/seed/paul/100/100", text: "My vet actually recommended this to me. It's a very safe way to train your dog.", time: "3d ago", likes: 33, timestamp: Date.now() - 3.1 * 24 * 60 * 60 * 1000 },
    { name: "Sandra Clark", avatar: "https://picsum.photos/seed/sandra/100/100", text: "The battery lasts a long time too. I've been using it for a month and haven't had to change it yet.", time: "4d ago", likes: 11, timestamp: Date.now() - 4 * 24 * 60 * 60 * 1000 },
    { name: "Thomas Evans", avatar: "https://picsum.photos/seed/thomas/100/100", text: "I use it when we go for walks. It keeps my dog from pulling on the leash and barking at other dogs.", time: "4d ago", likes: 19, timestamp: Date.now() - 4.1 * 24 * 60 * 60 * 1000 },
    { name: "Lisa Foster", avatar: "https://picsum.photos/seed/lisa/100/100", text: "Best customer service ever. I had a question about how to use it and they answered me within an hour.", time: "5d ago", likes: 8, timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000 },
    // Load 3
    { name: "Kevin Garcia", avatar: "https://picsum.photos/seed/kevin/100/100", text: "My dog is a senior and I didn't think he could learn new tricks, but this worked like a charm.", time: "5d ago", likes: 14, timestamp: Date.now() - 5.1 * 24 * 60 * 60 * 1000 },
    { name: "Donna Harris", avatar: "https://picsum.photos/seed/donna/100/100", text: "I'm so glad I found this. It's made my life so much easier.", time: "6d ago", likes: 5, timestamp: Date.now() - 6 * 24 * 60 * 60 * 1000 },
    { name: "Brian Jackson", avatar: "https://picsum.photos/seed/brian/100/100", text: "I've already told all my friends about it. Everyone needs a NoBark!", time: "6d ago", likes: 27, timestamp: Date.now() - 6.1 * 24 * 60 * 60 * 1000 },
    { name: "Carol King", avatar: "https://picsum.photos/seed/carol/100/100", text: "It's small enough to fit in my pocket, so I always have it with me.", time: "1w ago", likes: 10, timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000 },
    { name: "Edward Lewis", avatar: "https://picsum.photos/seed/edward/100/100", text: "Worth every penny. Don't hesitate, just buy it!", time: "1w ago", likes: 16, timestamp: Date.now() - 7.1 * 24 * 60 * 60 * 1000 },
  ];

  const sortedComments = [...allComments].sort((a, b) => {
    if (sortBy === 'recent') return b.timestamp - a.timestamp;
    if (sortBy === 'oldest') return a.timestamp - b.timestamp;
    if (sortBy === 'liked') return b.likes - a.likes;
    return 0;
  });

  const handleLoadMore = () => {
    if (loadCount < 3) {
      setLoadCount(prev => prev + 1);
      setVisibleComments(prev => prev + 5);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-24">
        {/* Header Metadata */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-4 uppercase tracking-widest font-bold">
            <Clock className="w-4 h-4" />
            <span>2 Minute Read</span>
            <span className="mx-2 opacity-30">•</span>
            <span className="text-[#2295A2]">Special Report</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight text-gray-900 mb-6 tracking-tight">
            I Finally Figured Out How To Get My Dogs To Stop Barking After Watching How A Woman On My Flight Kept Her Dogs Quiet The Whole Flight
          </h1>
          
          <div className="w-24 h-1 bg-[#2295A2] mb-8 rounded-full"></div>

          <div className="flex items-center gap-4 w-full sm:w-auto bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/dd/0418502b754ef395afe2ca8eb1a249/shutterstock_383303518.jpg" 
              alt="Dr. Deborah Lichtenburg" 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-sm object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">By Dr. Deborah Lichtenburg, VMD</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Updated: April 20th, 2026</p>
            </div>
            <div className="hidden sm:flex ml-auto gap-2">
              <button className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity shadow-sm">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity shadow-sm">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors shadow-sm">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Update Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-10 rounded-r-xl shadow-sm">
          <p className="text-blue-800 font-bold flex items-center gap-2 text-sm sm:text-base">
            <Star className="w-5 h-5 fill-current" />
            Update: All orders are 63% off for a limited time
          </p>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <p>
                <b>I knew it was going to be a long flight as soon as she walked on with her two Chihuahuas…</b>
              </p>
              <p>
                “Great,” I thought… “It was already a 3 ½ hour flight…. Now I have to listen to yapping dogs the whole way.”
              </p>
              <p>
                Or so I thought… this is typically the case when people get on to flights with dogs, let alone Chihuahuas!
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/e2/45c324aed64cbab351ff9a77d9bb8e/shutterstock_1269948385.jpg" 
                alt="Chihuahua on flight" 
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] md:aspect-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <p>
            <b>But I noticed she was carrying something interesting.</b> It was like a remote of some kind. I wasn’t sure, until a few minutes later when she used it.
          </p>

          <p>
            One of her dogs started yapping. “Here we go,” I thought. <b>But as soon as it started yapping, she pulled out this device,</b> quietly clicked it at the dog, and the dog INSTANTLY stopped barking, looked at her, then layed back down in her lap.
          </p>

          <p>
            I was amazed. <b>What just happened?!</b> This would happen a few more times on the flight, and each time I became more and more curious.
          </p>

          <p>
            So at the end of the flight - with NO barking - I walked up to her and asked her what that was. She told me it’s called a <a href="https://go.wisecombo.com/click">NoBark</a>, a dog training device that uses ultra sonic sound to get a dog’s attention and make him stop barking.
          </p>

          <div className="bg-white border-l-8 border-[#2295A2] p-8 md:p-12 rounded-r-[2.5rem] my-12 relative overflow-hidden shadow-md">
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic leading-relaxed mb-0 text-gray-900 font-medium">
                “Humans can’t hear it, and it doesn’t hurt the dog's delicate ears. They hear the sound and immediately stop what they're doing, whether it’s barking, running away, or chewing on something they shouldn’t be chewing on. It gets them to behave better and better each time. I love it!”
              </p>
            </div>
            <div className="absolute -bottom-12 -right-12 opacity-5 text-[#2295A2]">
              <Dog className="w-64 h-64" />
            </div>
          </div>

          <p>
            When I got home I immediately hopped online to do my research. It turns out <b>this device is used by celebrities who travel with their dogs as well.</b>
          </p>

          <p>
            And because I have 2 loud dogs myself, I decided to order one and give it a try.... <b>Here’s what I found:</b>
          </p>

          <p>
            Within 3 days of ordering it showed up in the mail. It was exactly what the lady on the plane was using. So I waited for my dogs to start barking like they always do, and this didn’t take long. Once they did I pressed the button on the <a href="https://go.wisecombo.com/click">NoBark</a>, and <b>they INSTANTLY stopped barking, and looked at me!</b>
          </p>

          <p>
            I was blown away. <b>It’s like having a remote control to turn off your dog’s barking</b>! I couldn’t wait to show my husband, who was equally as blown away.
          </p>

          <div className="my-12">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/29/ad1231bd7047069965cc2b6c9dcc3e/dog-playing.gif" 
              alt="Dog playing" 
              className="rounded-3xl shadow-lg w-full mb-3"
              referrerPolicy="no-referrer"
            />
            <p className="article-caption">I tried it on my dogs and they immediately stopped barking</p>
          </div>

          <div className="my-12 bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-sm">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/74/0ec7b54b084672acaead4dfd009409/Screen-Shot-2019-10-08-at-9.16.21-AM.png" 
              alt="Social post" 
              className="w-full rounded-2xl shadow-sm mb-3"
              referrerPolicy="no-referrer"
            />
            <p className="article-caption">I was so happy I had to post about it!</p>
          </div>

          <div className="my-12">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/04/40d87065c34487a97fb4d0b8758466/giphy.gif" 
              alt="Viral reaction" 
              className="rounded-3xl shadow-lg w-full mb-3"
              referrerPolicy="no-referrer"
            />
            <p className="article-caption">NoBark is going viral on social media</p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-gray-900 border-b-4 border-[#2295A2] pb-2 inline-block tracking-tight">
            Here's How It Works
          </h2>

          <div className="my-8">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/ef/3518bd62e14f1eaecc5e3080c5538b/beforeafter.jpg" 
              alt="Before and After" 
              className="rounded-3xl shadow-xl w-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xl leading-relaxed">
            <b>NoBark uses a patented military technology called super ultrasonic sound waves that were invented by ex-military dog trainers to train dogs in the military. That's why it's so effective. The sound waves reach a frequency that's disruptive to dogs, but not harmful. It just gets their attention to teach them to stop their bad behaviors.</b>
          </p>

          <div className="flex justify-center my-12">
            <img 
              src="https://ais-dev-z4rzuqwmt43oycqbd23rpt-654737820057.asia-east1.run.app/hosted/images/a1/4c2e5ca3944b418c34ef744176adef/caffein.jpg" 
              alt="Product showcase" 
              className="max-w-md w-full rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-[2.5rem] my-12 text-center shadow-sm">
            <p className="text-2xl font-bold italic text-gray-800 mb-0 tracking-tight">
              "NoBark is being called the must have dog training device of the year"
            </p>
          </div>

          <p>
            To say I'm a fan of the <a href="https://go.wisecombo.com/click"><b>NoBark</b></a> is an understatement. It's one of the few options that not only work faster than traditional trainers, but are much more cost-effective as well!
          </p>

          <p>
            I highly recommend that everyone with a dog or cat that has some bad behaviors to get the NoBark. And if you don't love it then there's always a <b>full 90-day money back guarantee. So if you don't love it for some reason, just return it!</b>
          </p>

          <p>
            Right now, the <a href="https://go.wisecombo.com/click"><b>NoBark</b></a> is offering a <b>63% discount for readers of our site</b>, but we’re not sure how long this discount is going to last. So if you’re interested in getting a NoBark, we recommend checking out their website <a href="https://go.wisecombo.com/click">HERE</a> or clicking the button below before it’s too late.
          </p>

          <HowToUse />
          <KeyBenefits />
          <ComparisonTable />
          <FAQSection />

          {/* Final CTA Card */}
          <div className="mt-16 bg-[#2295A2] p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Limited Time Offer</h3>
              <p className="text-lg md:text-xl opacity-90 mb-8 font-medium">Get your NoBark today and save 63% off your entire order!</p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <motion.a 
                  href="https://go.wisecombo.com/click"
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0px 0px 0px rgba(255, 255, 255, 0)",
                      "0px 0px 20px rgba(255, 255, 255, 0.4)",
                      "0px 0px 0px rgba(255, 255, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="group flex items-center gap-3 bg-white text-[#2295A2] px-8 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Check Availability
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-bold opacity-80">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> 90-Day Guarantee</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Military Grade Tech</span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-current" /> 4.9/5 Rating</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-5 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white opacity-5 rounded-full"></div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-24 border-t border-gray-200 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 tracking-tight">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Comments
            </h3>
            
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
              <button 
                onClick={() => setSortBy('recent')}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                  sortBy === 'recent' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                )}
              >
                Most Recent
              </button>
              <button 
                onClick={() => setSortBy('liked')}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                  sortBy === 'liked' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                )}
              >
                Most Liked
              </button>
              <button 
                onClick={() => setSortBy('oldest')}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                  sortBy === 'oldest' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                )}
              >
                Oldest
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {sortedComments.slice(0, visibleComments).map((comment, index) => (
              <Comment 
                key={index}
                name={comment.name}
                avatar={comment.avatar}
                text={comment.text}
                time={comment.time}
                likes={comment.likes}
              />
            ))}
          </div>
          
          {loadCount < 3 && visibleComments < allComments.length && (
            <button 
              onClick={handleLoadMore}
              className="w-full mt-8 py-4 bg-gray-50 text-blue-600 font-bold hover:bg-blue-50 rounded-2xl transition-all border border-gray-200 shadow-sm active:scale-[0.98]"
            >
              Load More Comments ({3 - loadCount} left)
            </button>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <a href="https://go.wisecombo.com/click" className="flex items-center gap-2 font-bold text-3xl">
              <Dog className="w-10 h-10" />
              <span className="tracking-tight">Dogglie</span>
            </a>
            <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              <a href="https://go.wisecombo.com/click" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://go.wisecombo.com/click" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://go.wisecombo.com/click" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="text-center text-[10px] sm:text-xs text-gray-500 space-y-4 font-medium">
            <p>© 2026 Dogglie.com. All Rights Reserved.</p>
            <p className="max-w-2xl mx-auto leading-relaxed opacity-60">
              THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE. 
              The story depicted on this site and the person depicted in the story are not actual news. Rather, this story is based on the results that some people who have used these products have achieved.
            </p>
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}

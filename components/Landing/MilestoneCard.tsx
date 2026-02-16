"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Flame, Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MilestoneCardProps {
  milestone: {
    id: number;
    user: {
      name: string;
      avatar: string;
      streak: number;
    };
    goal: string;
    category: string;
    image?: string;
    beforeImage?: string;
    afterImage?: string;
    struggles: string;
    learnings: string;
    likes: number;
    comments: number;
    daysCompleted: number;
    totalDays: number;
  };
  index: number;
}

export function MilestoneCard({ milestone, index }: MilestoneCardProps) {
  const completionRate = (milestone.daysCompleted / milestone.totalDays) * 100;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border-[3px] border-black rounded-[2.5rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-black">
            <AvatarImage src={milestone.user.avatar} />
            <AvatarFallback className="bg-yellow-400 font-black">
              {milestone.user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-black italic uppercase text-sm leading-tight">
              {milestone.user.name}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter">
              <span className="text-slate-400">{milestone.category}</span>
              <span className="flex items-center gap-0.5 text-orange-500">
                <Flame className="w-3 h-3 fill-current" />
                {milestone.user.streak} WK STREAK
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 border-2 border-black px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-black uppercase italic">
          <Trophy className="w-3 h-3" />
          Completed
        </div>
      </div>

      {/* Goal Title */}
      <h3 className="text-xl font-black italic uppercase leading-tight mb-4 tracking-tight">
        {milestone.goal}
      </h3>

      {/* Media: Before/After or Single Image */}
      {milestone.beforeImage && milestone.afterImage ? (
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-black">
            <img
              src={milestone.beforeImage}
              alt="Before"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black text-white text-[10px] font-black uppercase">
              Before
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border-2 border-black">
            <img
              src={milestone.afterImage}
              alt="After"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-yellow-400 text-black border border-black text-[10px] font-black uppercase">
              After
            </span>
          </div>
        </div>
      ) : milestone.image ? (
        <div className="rounded-2xl overflow-hidden mb-4 aspect-video border-2 border-black">
          <img
            src={milestone.image}
            alt={milestone.goal}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}

      {/* MeMatch Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-[10px] font-black uppercase mb-1.5 px-1">
          <span className="text-slate-400">Consistency</span>
          <span className="text-black italic">
            {milestone.daysCompleted}/{milestone.totalDays} Days Done
          </span>
        </div>
        <div className="h-3 bg-slate-100 border-2 border-black rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow-400 border-r-2 border-black"
            initial={{ width: 0 }}
            whileInView={{ width: `${completionRate}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Struggles & Learnings Section */}
      <div className="space-y-3 mb-6">
        <div className="p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300">
          <p className="text-[10px] font-black uppercase text-slate-400 mb-1 leading-none">
            The Hard Part
          </p>
          <p className="text-xs font-medium text-slate-600 leading-relaxed italic">
            "{milestone.struggles}"
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-yellow-400/10 border-2 border-yellow-400">
          <p className="text-[10px] font-black uppercase text-yellow-600 mb-1 leading-none">
            Key Takeaway
          </p>
          <p className="text-xs font-bold text-black leading-relaxed italic">
            {milestone.learnings}
          </p>
        </div>
      </div>

      {/* Social Actions */}
      <div className="flex items-center gap-6 pt-4 border-t-2 border-slate-100">
        <button className="flex items-center gap-1.5 font-black text-xs uppercase hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" /> {milestone.likes}
        </button>
        <button className="flex items-center gap-1.5 font-black text-xs uppercase hover:text-yellow-500 transition-colors">
          <MessageCircle className="w-5 h-5" /> {milestone.comments}
        </button>
        <button className="ml-auto p-2 bg-slate-100 rounded-xl hover:bg-black hover:text-white transition-all">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </motion.article>
  );
}

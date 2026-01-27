"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Flame, Trophy, Share2 } from "lucide-react";
import MilestoneFeed from "@/components/home/MilestoneFeed";

export default function HomePage() {
  return <MilestoneFeed />;
}

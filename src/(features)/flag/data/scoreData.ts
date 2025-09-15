const scoreData = (percentage: number) => {
  if (percentage >= 90)
    return {
      message: "Legendary Master",
      emoji: "👑",
      color: "from-yellow-400 to-amber-500",
      bgColor: "from-yellow-500/20 to-amber-500/20",
    };
  if (percentage >= 80)
    return {
      message: "Elite Champion",
      emoji: "🏆",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
    };
  if (percentage >= 70)
    return {
      message: "Distinguished Player",
      emoji: "⭐",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    };
  if (percentage >= 60)
    return {
      message: "Skilled Performer",
      emoji: "💎",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
    };
  return {
    message: "Rising Challenger",
    emoji: "🚀",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/20",
  };
};

export default scoreData;
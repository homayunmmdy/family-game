import React, { useState } from "react";
import { countriesData } from "./countriesData";

// Mock flag data


// Types
interface Flag {
  country: string;
  flagUrl: string;
}

interface Question {
  flag: Flag;
  options: string[];
  correctAnswer: string;
}

type GameState = "setup" | "playing" | "finished";
type AnswerState = "correct" | "incorrect" | null;

// Animated Background Component
const AnimatedBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
    <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>
);

// Floating Particles Component
const FloatingParticles: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

// Modern Header Component
const Header: React.FC = () => (
  <header className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10">
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-2xl">🏳</span>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Flag Quiz
          </h1>
          <p className="text-sm text-white/60 font-medium tracking-wider">
            ELITE EDITION
          </p>
        </div>
      </div>
    </div>
  </header>
);

// Luxury Footer Component
const Footer: React.FC = () => (
  <footer className="relative z-10 bg-black/20 backdrop-blur-xl border-t border-white/10 mt-auto">
    <div className="container mx-auto px-6 py-6">
      <div className="text-center">
        <p className="text-white/60 text-sm font-medium">
          © 2025 Flag Quiz Elite • Crafted with precision
        </p>
        <div className="flex justify-center space-x-2 mt-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>
    </div>
  </footer>
);

// Luxury Setup Screen Component
interface SetupScreenProps {
  onStart: (questionCount: number) => void;
}

const SetupScreen: React.FC<SetupScreenProps> = ({ onStart }) => {
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = () => {
    onStart(questionCount);
  };

  return (
    <div className="flex-1 flex items-center justify-center relative z-10 py-12">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-10 max-w-lg w-full mx-6 shadow-2xl relative overflow-hidden">
        {/* Luxury glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Welcome to Elite Quiz
            </h2>
            <p className="text-white/70 leading-relaxed">
              Challenge your knowledge with our premium flag recognition
              experience
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-4 tracking-wide uppercase">
                Questions Count
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={countriesData.length}
                  value={questionCount}
                  onChange={(e) =>
                    setQuestionCount(parseInt(e.target.value) || 1)
                  }
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 text-lg font-medium"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p className="text-white/50 text-xs mt-3 font-medium">
                Select between 1 and {countriesData.length} questions for your
                challenge
              </p>
            </div>

            <button
              onClick={handleSubmit}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-lg tracking-wide">
                  Begin Elite Challenge
                </span>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                >
                  🚀
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Premium Question Card Component
interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  answerState: AnswerState;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  answerState,
}) => {
  const getButtonClass = (option: string) => {
    let baseClass =
      "group relative w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden border ";

    if (selectedAnswer === option) {
      if (answerState === "correct") {
        baseClass +=
          "bg-gradient-to-r from-emerald-500 to-green-500 text-white border-emerald-400 shadow-2xl shadow-emerald-500/25";
      } else if (answerState === "incorrect") {
        baseClass +=
          "bg-gradient-to-r from-red-500 to-rose-500 text-white border-red-400 shadow-2xl shadow-red-500/25";
      }
    } else if (
      answerState === "incorrect" &&
      option === question.correctAnswer
    ) {
      baseClass +=
        "bg-gradient-to-r from-white to-gray-50 text-gray-800 border-emerald-400 border-2 shadow-2xl shadow-emerald-500/25";
    } else {
      baseClass +=
        "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 hover:border-white/40 hover:shadow-xl";
    }

    return baseClass;
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex-1 flex items-center justify-center relative z-10 py-8">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 max-w-4xl w-full mx-6 shadow-2xl relative overflow-hidden">
        {/* Luxury accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

        {/* Enhanced Progress Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                {questionNumber}
              </div>
              <div>
                <span className="text-white font-semibold text-lg">
                  Question {questionNumber}
                </span>
                <p className="text-white/60 text-sm">
                  of {totalQuestions} total
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {Math.round(progressPercentage)}%
              </div>
              <p className="text-white/60 text-sm">Complete</p>
            </div>
          </div>
          <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${progressPercentage}% ` }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Premium Flag Display */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Identify this magnificent flag
          </h2>
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
              <img
                src={question.flag.flagUrl}
                alt="Flag to identify"
                className="w-80 h-auto rounded-2xl shadow-2xl border-2 border-white/20 transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Luxury Answer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              disabled={selectedAnswer !== null}
              className={getButtonClass(option)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 text-lg">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Elite Score Screen Component
interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreData = () => {
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

  const scoreData = getScoreData();

  return (
    <div className="flex-1 flex items-center justify-center relative z-10 py-8">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-10 max-w-lg w-full mx-6 shadow-2xl relative overflow-hidden">
        {/* Luxury gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${scoreData.bgColor} rounded-3xl`}
        ></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

        <div className="relative z-10 text-center">
          {/* Trophy Section */}
          <div className="mb-8">
            <div
              className={`w-24 h-24 bg-gradient-to-br ${scoreData.color} rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-2xl transform hover:scale-110 transition-transform duration-300`}
            >
              {scoreData.emoji}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Challenge Complete!
            </h2>
            <p
              className={`text-xl font-semibold bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent`}
            >
              {scoreData.message}
            </p>
          </div>

          {/* Score Display */}
          <div className="mb-8">
            <div
              className={`text-7xl font-bold bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent mb-2`}
            >
              {score}/{totalQuestions}
            </div>
            <div
              className={`text-3xl font-bold bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent`}
            >
              {percentage}% Accuracy
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="text-2xl font-bold text-white">{score}</div>
                <div className="text-white/60 text-sm font-medium">Correct</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">✗</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {totalQuestions - score}
                </div>
                <div className="text-white/60 text-sm font-medium">Missed</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onRestart}
            className="group relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <span className="text-lg tracking-wide">Challenge Again</span>
              <span className="text-xl transform group-hover:rotate-12 transition-transform duration-300">
                🔄
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Elite App Component
const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>("setup");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>(null);

  // Generate random questions with luxury randomization
  const generateQuestions = (count: number): Question[] => {
    const shuffled = [...countriesData].sort(() => Math.random() - 0.5);
    const selectedFlags = shuffled.slice(0, count);

    return selectedFlags.map((flag) => {
      const incorrectOptions = countriesData
        .filter((f) => f.country !== flag.country)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((f) => f.country);

      const allOptions = [...incorrectOptions, flag.country].sort(
        () => Math.random() - 0.5
      );

      return {
        flag,
        options: allOptions,
        correctAnswer: flag.country,
      };
    });
  };

  const startQuiz = (questionCount: number) => {
    const newQuestions = generateQuestions(questionCount);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState("playing");
    resetAnswerState();
  };

  const resetAnswerState = () => {
    setSelectedAnswer(null);
    setAnswerState(null);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    setAnswerState(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Elite auto-progression with perfect timing
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        resetAnswerState();
      } else {
        setGameState("finished");
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setGameState("setup");
    setCurrentQuestionIndex(0);
    setScore(0);
    resetAnswerState();
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <Header />

      {gameState === "setup" && <SetupScreen onStart={startQuiz} />}

      {gameState === "playing" && questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
        />
      )}

      {gameState === "finished" && (
        <ScoreScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;

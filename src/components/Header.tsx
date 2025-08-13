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

export default Header;

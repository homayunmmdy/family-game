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
export default Footer
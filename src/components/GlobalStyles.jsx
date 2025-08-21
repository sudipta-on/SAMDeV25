export default function GlobalStyles() {
  return (
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee { animation: marquee 28s linear infinite; }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .float-slow { animation: float 8s ease-in-out infinite; }

      .backdrop-blur-mdx { backdrop-filter: saturate(140%) blur(10px); }
    `}</style>
  );
}

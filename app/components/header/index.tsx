export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-md border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-center py-6 px-4 md:px-8">
        <div className="flex items-center gap-3 animate-fade-in">
          {/* Logo estilizado */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg mr-3">
            {/* Ícone de código de barras estilizado em SVG */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="7" width="2" height="18" rx="1" fill="#fff" />
              <rect x="7" y="5" width="2" height="22" rx="1" fill="#fff" />
              <rect
                x="11"
                y="9"
                width="1.5"
                height="14"
                rx="0.75"
                fill="#fff"
              />
              <rect x="15" y="7" width="2" height="18" rx="1" fill="#fff" />
              <rect
                x="19.5"
                y="10"
                width="1"
                height="12"
                rx="0.5"
                fill="#fff"
              />
              <rect x="22.5" y="5" width="2" height="22" rx="1" fill="#fff" />
              <rect x="27" y="7" width="2" height="18" rx="1" fill="#fff" />
            </svg>
          </div>
          <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm select-none">
            CODEBAR
          </span>
          <span className="ml-2 text-lg md:text-2xl font-medium text-slate-700 tracking-wide select-none animate-fade-in delay-100">
            Extractor
          </span>
        </div>
      </div>
    </header>
  );
}

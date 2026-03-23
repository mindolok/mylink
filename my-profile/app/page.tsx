import React from 'react';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-6 sm:p-8 font-sans">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-200/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-md w-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 text-center space-y-8 hover:shadow-blue-500/10 transition-all duration-500">
        {/* Profile Avatar Placeholder */}
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-indigo-500 rounded-full blur-sm opacity-20 scale-110"></div>
          <div className="relative flex items-center justify-center w-full h-full bg-linear-to-br from-blue-50 to-indigo-100 rounded-full border-2 border-white shadow-inner">
            <span className="text-3xl font-bold text-blue-600 tracking-tighter">JM</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
            서지민
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed px-4">
            안녕하세요, <span className="text-blue-600 font-semibold">바이브 코딩</span>을 배우고 있는 대학생입니다.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 pt-4">
          {/* Subtle Divider */}
          <div className="h-px w-24 bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
          
          <a 
            href="https://blog.naver.com/jmin0624" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:text-blue-600 transition-all duration-300"
          >
            <span>블로그 방문하기</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      <footer className="mt-8 text-slate-400 text-xs font-medium">
        © 2024 Jimin Seo. All rights reserved.
      </footer>
    </main>
  );
}

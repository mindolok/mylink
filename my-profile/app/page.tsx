import React from 'react';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FFF0E5] text-black font-sans selection:bg-black selection:text-[#FFF0E5] flex flex-col">
      
      {/* Navigation Layer */}
      <nav className="border-b-4 border-black bg-[#FFB6C1] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-black uppercase tracking-tighter">JM.SEO</div>
        <a 
          href="https://blog.naver.com/jmin0624" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border-4 border-black bg-[#FFF200] px-6 py-2 font-bold hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_#000] transition-all"
        >
          Blog
        </a>
      </nav>

      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 lg:py-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none uppercase tracking-tighter text-white" style={{ textShadow: '6px 6px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000' }}>
              서지민
            </h1>
            
            <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                안녕하세요, <br className="hidden md:block"/>
                <span className="bg-[#00E5FF] px-2 py-1 border-2 border-black inline-block mt-2 md:mt-2 mb-2 transform -rotate-2">바이브 코딩</span>을<br className="hidden md:block"/>
                배우고 있는 대학생입니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="border-4 border-black bg-[#00E5FF] px-5 py-3 font-bold text-lg shadow-[4px_4px_0_0_#000] transform rotate-2">
                #VibeCoding
              </div>
              <div className="border-4 border-black bg-[#FF90E8] px-5 py-3 font-bold text-lg shadow-[4px_4px_0_0_#000] transform -rotate-2">
                #Student
              </div>
              <div className="border-4 border-black bg-[#FFF200] px-5 py-3 font-bold text-lg shadow-[4px_4px_0_0_#000]">
                #Developer
              </div>
            </div>
          </div>

          {/* Right Side Abstract Element */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end pb-12 lg:pb-0">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
              {/* 메인 둥근 배경 */}
              <div className="absolute inset-0 bg-[#FFB6C1] border-4 border-black rounded-full shadow-[12px_12px_0_0_#000]"></div>
              
              {/* 장식용 네모 박스 1 */}
              <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#00E5FF] border-4 border-black shadow-[8px_8px_0_0_#000]"></div>
              
              {/* 장식용 네모 박스 2 */}
              <div className="absolute bottom-16 sm:bottom-12 left-4 sm:left-8 w-32 sm:w-40 h-16 bg-[#FFF200] border-4 border-black shadow-[8px_8px_0_0_#000] transform -rotate-12 flex items-center justify-center">
                <span className="font-black text-xl tracking-widest uppercase">Hello</span>
              </div>

              {/* 추가 장식 - 별 모양이나 둥근 요소 */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-black rounded-full shadow-[4px_4px_0_0_#000]"></div>
            </div>
          </div>

        </section>

        {/* Action Call Section */}
        <section className="mt-24 lg:mt-32 border-4 border-black bg-[#FF90E8] p-8 md:p-16 text-center shadow-[12px_12px_0_0_#000]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tight">Connect with me</h2>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">
            제가 공부하고 기록하는 공간입니다. 더 많은 이야기는 네이버 블로그에서 확인해주세요.
          </p>
          <a 
            href="https://blog.naver.com/jmin0624" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-4 border-black bg-white text-black px-10 py-5 text-xl md:text-2xl font-black uppercase hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] shadow-[6px_6px_0_0_#000] transition-all"
          >
            Visit My Blog
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </section>
      </div>

      <footer className="border-t-4 border-black bg-white mt-12 py-8 text-center text-lg font-bold">
        <p className="border-black inline-block px-4 py-2 border-2 bg-[#FFF200] shadow-[4px_4px_0_0_#000] mb-2 sm:mb-0">
          © {new Date().getFullYear()} Jimin Seo.
        </p>
        <span className="sm:ml-2 font-black tracking-tight">All rights reserved.</span>
      </footer>
    </main>
  );
}

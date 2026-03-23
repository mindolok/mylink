import React from 'react';

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-700">
          서지민
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          안녕하세요, 바이브 코딩을 배우고 있는 대학생입니다.
        </p>
        <div className="pt-4 flex flex-col items-center space-y-4">
          <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          <a 
            href="https://blog.naver.com/jmin0624" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            블로그 방문하기
          </a>
        </div>
      </div>
    </main>
  );
}

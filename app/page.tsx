import React from 'react';

export default function CurzyCloudLanding() {
  const projects = [
    {
      id: "07",
      title: "4 Mate",
      techStack: ["NEXT.JS", "TYPESCRIPT", "VERCEL", "WEB APP"],
      description: "Multi-platform media downloader bebas iklan dan free bisa download Tiktok, Youtube, Spotify dan Instagram.",
      buttons: [
        { label: "Kunjungi Situs", type: "primary", icon: "globe", url: "https://4mate.curzy.my.id/" }
      ]
    },
    {
      id: "10",
      title: "Float Volume",
      techStack: ["LINUX", "GIT", "ANDROID APP"],
      description: "Aplikasi Volume Control tanpa iklan dengan fitur samar yang cocok untuk menjaga gengsi agar ikon ngambang pengatur volume bisa menyamar, sehingga tidak ketahuan kalau tombol volume fisik perangkat sedang rusak.",
      buttons: [
        { label: "Unduh APK (Github)", type: "primary", icon: "github", url: "https://github.com/Curzyori/Float-Volume-10/tree/main/version" },
        { label: "Unduh APK (G Drive)", type: "secondary", icon: "download", url: "https://drive.google.com/drive/folders/10iv-r-W9YZWcAzwDBTvLrRjX0dMo4pkB?usp=drive_link" }
      ]
    },
    {
      id: "11",
      title: "C Lync",
      techStack: ["REACT", "TYPESCRIPT", "SUPABASE", "SAAS UTAMA"],
      description: "Aplikasi web ringkasan chat WhatsApp yang mampu meringkas seluruh isi pesan WhatsApp hanya dengan satu klik, lengkap dengan fitur pengiriman pesan otomatis secara gratis.",
      buttons: [
        { label: "Kunjungi Situs", type: "primary", icon: "globe", url: "https://c-lync-266408539680.asia-southeast1.run.app/" }
      ]
    },
    {
      id: "12",
      title: "Portfolio",
      techStack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "PORTFOLIO HUB"],
      description: "Template premium mobile-first link hub dan portfolio developer statis alternatif lynk atau linktree yang gratis 100%.",
      buttons: [
        { label: "Kunjungi Situs", type: "primary", icon: "globe", url: "https://curzy.my.id/" },
        { label: "Buka Kode", type: "secondary", icon: "github", url: "https://github.com/Curzyori/Portofolio-12" }
      ]
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return (
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'download':
        return (
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] font-sans text-slate-300">
      <main className="w-full max-w-6xl mx-auto p-6 space-y-12 py-12 md:py-16">
        
        {/* Komponen 1: Hero Close Notice */}
        <section className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <div className="bg-red-500/10 p-4 rounded-full mb-5 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-3 tracking-tight">Curzy Cloud Resmi Ditutup</h1>
          <p className="text-red-300/80 max-w-lg text-sm md:text-base leading-relaxed">
            Layanan dukungan dan chat via WhatsApp sudah dinonaktifkan secara permanen. Terima kasih atas dukungan Anda selama ini.
          </p>
        </section>

        {/* Komponen 2: Curzy Market Card */}
        <section className="bg-[#111116] border border-slate-800/60 rounded-2xl p-6 md:p-8 hover:border-slate-700/80 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-start group relative">
          <div className="absolute top-0 right-0 p-6 hidden md:block opacity-40 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-slate-800/40 rounded-xl flex items-center justify-center text-cyan-400 border border-slate-700/30 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Curzy Market <span className="text-slate-500 font-medium text-lg">(Coming Soon)</span>
              </h2>
              <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-800/80 text-slate-400 border border-slate-700/50 rounded uppercase tracking-wider">
                2026
              </span>
              <span className="px-2.5 py-1 text-[10px] font-bold bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 rounded uppercase tracking-wider">
                COMING SOON
              </span>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed md:pr-12">
              Global digital marketplace and development agency disiapkan eksklusif dengan payment gateway berbasis Web3/Crypto (tanpa fiat/metode lokal). Menjadi pusat distribusi aset digital premium seperti Automation Scripts, CLI tools, Template Website, aplikasi Premium (Free Trial & Premium dari 50 Projects Challenge), hingga layanan komersial komputasi seperti Joki Tugas Engineering dan Jasa Pembuatan Website Kustom (Buy Custom Website).
            </p>
          </div>
        </section>

        {/* Komponen 3: Portfolio Hub Link */}
        <section className="flex justify-center w-full py-4">
          <a 
            href="https://curzy.my.id" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#111116] hover:bg-slate-800/60 border border-slate-800/80 hover:border-slate-700/80 rounded-full transition-all duration-300 shadow-sm"
          >
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Beralih ke Portfolio Utama (curzy.my.id)</span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </section>

        {/* Komponen 4: Featured Repositories Grid */}
        <section className="w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">Featured repositories</h2>
            <span className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-400 rounded-full border border-slate-700/50">
              4 repos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col p-6 bg-[#111116] border border-slate-800/60 rounded-xl hover:border-slate-700/80 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-indigo-400 text-xs font-bold tracking-wider">
                    <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                    FEATURED
                  </div>
                  <span className="text-indigo-500/80 font-mono text-sm font-medium">#{project.id}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-2.5 py-1 text-[10px] font-semibold bg-slate-800/40 border border-slate-700/60 text-slate-300 font-mono rounded uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-col space-y-3 mt-auto">
                  {project.buttons.map((btn, index) => (
                    <a 
                      key={index}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        btn.type === 'primary' 
                          ? 'bg-transparent border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10' 
                          : 'bg-transparent border border-slate-700/50 text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      {renderIcon(btn.icon)}
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}

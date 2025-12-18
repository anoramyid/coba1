<template>
  <div style="min-height: 100vh; background: linear-gradient(135deg, #e8f5e8 0%, #f0f9f0 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <header style="background: linear-gradient(90deg, #4caf50 0%, #66bb6a 100%); color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; height: 5rem; position: relative; z-index: 1;">
        <h1 style="font-size: 1.5rem; font-weight: bold; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🌿 SD Hijau Indah</h1>
        <div>
          <a href="/" style="color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 2rem; transition: all 0.3s ease; display: inline-block; margin-right: 0.5rem; font-weight: 500; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">🏠 Beranda</a>
          <a href="/tentang" style="color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 2rem; transition: all 0.3s ease; display: inline-block; margin-right: 0.5rem; font-weight: 500; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">📚 Tentang</a>
          <a href="/kontak" style="color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 2rem; transition: all 0.3s ease; display: inline-block; font-weight: 500; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">📞 Kontak</a>
        </div>
      </div>
    </header>

    <div style="display: flex; max-width: 1400px; margin: 0 auto;">
      <aside style="width: 18rem; background: linear-gradient(180deg, #388e3c 0%, #4caf50 100%); color: white; padding: 2rem 1rem; min-height: calc(100vh - 5rem); box-shadow: 2px 0 10px rgba(0,0,0,0.1);">
        <nav>
          <h3 style="margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Menu Navigasi</h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 0.5rem;">
              <a href="/" style="display: flex; align-items: center; padding: 0.75rem 1rem; border-radius: 0.75rem; text-decoration: none; color: white; transition: all 0.3s ease; background: rgba(255,255,255,0.1);">
                🏠 <span style="margin-left: 0.75rem; font-weight: 500;">Beranda</span>
              </a>
            </li>
            <li style="margin-bottom: 0.5rem;">
              <a href="/tentang" style="display: flex; align-items: center; padding: 0.75rem 1rem; border-radius: 0.75rem; text-decoration: none; color: white; transition: all 0.3s ease; background: rgba(255,255,255,0.1);">
                📚 <span style="margin-left: 0.75rem; font-weight: 500;">Tentang Sekolah</span>
              </a>
            </li>
            <li>
              <a href="/kontak" style="display: flex; align-items: center; padding: 0.75rem 1rem; border-radius: 0.75rem; text-decoration: none; color: white; transition: all 0.3s ease; background: rgba(255,255,255,0.1);">
                📞 <span style="margin-left: 0.75rem; font-weight: 500;">Kontak</span>
              </a>
            </li>
          </ul>
        </nav>
        <div style="margin-top: 3rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 0.75rem;">
          <p style="margin: 0; font-size: 0.9rem; text-align: center;">"Belajar dengan Senang, Tumbuh dengan Alam 🌱"</p>
        </div>
      </aside>

      <main style="flex: 1; padding: 3rem 2rem; background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border-radius: 1rem 0 0 1rem; margin: 1rem; box-shadow: inset 0 0 20px rgba(76,175,80,0.1);">
        <slot />
      </main>
    </div>
  </div>
</template>
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: '学中文 – Học tiếng Trung',
        short_name: '学中文',
        description: 'Học tiếng Trung theo Giáo trình Hán ngữ: bài học, luyện tập, thi thử, ôn tập ngắt quãng.',
        lang: 'vi',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#e9f0ec',
        theme_color: '#0f7b6c',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Ứng dụng một trang: mọi đường dẫn trả về index.html khi offline
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            // Font Google (Be Vietnam Pro, Noto Serif SC): lưu lại để dùng khi mất mạng
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
          {
            // Dữ liệu nét chữ của hanzi-writer (CDN): lưu lại sau lần xem đầu
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\/hanzi-writer-data.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'hanzi-data', expiration: { maxEntries: 500, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],
})

import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'

export default defineConfig({
  srcDir: 'src',
  root: '.',
  entrypointsDir: '../entry',
  publicDir: '../public',
  vite: () => ({
    plugins: [
      react(),
    ],
  }),
  manifest: {
    name: '__MSG_appName__',
    description: '__MSG_appDesc__',
    default_locale: 'zh_CN',
    action: {
      default_icon: {
        19: 'icons/19.png',
      },
      default_title: '__MSG_appName__',
    },
    host_permissions: ['*://learn.tsinghua.edu.cn/*', '*://id.tsinghua.edu.cn/*'],
    permissions: [
      'storage',
      'downloads',
      'declarativeNetRequest',
    ],
  },
})

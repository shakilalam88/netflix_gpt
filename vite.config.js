// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     // other Vite plugins
//     react({
//       babel: {
//         plugins: [
//           // other Babel plugins
//           [
//             '@locator/babel-jsx/dist',
//             {
//               env: 'development',
//             },
//           ],
//         ],
//       },
//     }),
//     tailwindcss(),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="bg-[#241e1c] antialiased selection:bg-purple-500/90 selection:text-white">
      <Component {...pageProps} />
  </div>
}

export default MyApp

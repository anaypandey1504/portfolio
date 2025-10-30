import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Anay Pandey - GenAI & Full-Stack Developer',
  description: 'Portfolio of Anay Pandey, a Generative AI and Full-Stack Developer specializing in React, Next.js, Python, and AI technologies.',
  keywords: 'Anay Pandey, GenAI Developer, Full-Stack Developer, React, Next.js, Python, AI, Machine Learning, Portfolio',
  authors: [{ name: 'Anay Pandey' }],
  creator: 'Anay Pandey',
  openGraph: {
    title: 'Anay Pandey - GenAI & Full-Stack Developer',
    description: 'Portfolio of Anay Pandey, a Generative AI and Full-Stack Developer specializing in React, Next.js, Python, and AI technologies.',
    url: 'https://anaypandey.vercel.app',
    siteName: 'Anay Pandey Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Anay Pandey - GenAI & Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anay Pandey - GenAI & Full-Stack Developer',
    description: 'Portfolio of Anay Pandey, a Generative AI and Full-Stack Developer specializing in React, Next.js, Python, and AI technologies.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        {children}
      </body>
    </html>
  )
}

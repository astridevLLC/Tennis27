import { type Metadata } from 'next'

import { RootLayout } from 'src/components/RootLayout'

import 'src/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Tennis27',
    default: 'Tennis27 - The #1 Tennis Shop in Chicago',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-grass text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}

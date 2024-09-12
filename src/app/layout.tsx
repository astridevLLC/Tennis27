import { type Metadata } from 'next'
import { RootLayout } from 'src/components/RootLayout'
import tennis27Logo from 'src/images/tennis27-logo-full.png'
import 'src/styles/tailwind.css'

export const metadata: Metadata = {
    title: {
        template: '%s - Tennis27',
        default: 'Tennis27 Schaumburg - The #1 Tennis Store in Chicago',
    },
    description: "Tennis27 Schaumburg is the #1 tennis store in Chicago. We offer a wide selection of tennis racquets, shoes, apparel, and accessories.",
    authors: [{ name: "Tennis27" }],
    keywords: "tennis, tennis racquets, tennis shoes, tennis apparel, tennis accessories, tennis store, tennis shop, tennis27, tennis27 schaumburg, tennis27 " +
        "chicago, tennis27 store, tennis27 shop, tennis27 tennis store, tennis27 tennis shop, tennis store near me, tennis shop near me, tennis store chicago," +
        " tennis shop chicago, tennis store schaumburg, tennis shop schaumburg",
    icons: [{ rel: 'icon', url: tennis27Logo.src }],
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
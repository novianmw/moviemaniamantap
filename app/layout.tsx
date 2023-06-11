import "./globals.css"
import { Oswald } from "next/font/google"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata = {
    title: "Movie Mania Mantap",
    description: "list movie in 2023",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={oswald.className}>{children}</body>
        </html>
    )
}

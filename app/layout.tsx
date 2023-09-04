import Navbar from "@/components/Navbar"
import "./globals.css"
import { Oswald } from "next/font/google"
import Footer from "@/components/Footer"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata = {
    title: "Movie Mania Mantap",
    description: "list movie in 2023",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={oswald.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

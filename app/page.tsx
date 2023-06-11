import Intro from "@/components/Intro"
import Navbar from "@/components/Navbar"
import Trending from "@/components/Trending"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <main>
            <div className="w-full overflow-hidden">
                <div className="flex flex-col items-center justify-center">
                    <Navbar />
                    <Intro />
                    <Trending />
                    <Footer />
                </div>
            </div>
        </main>
    )
}

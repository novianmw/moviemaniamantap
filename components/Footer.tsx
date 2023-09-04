import Link from "next/link"
import { RiMicFill, RiMovie2Fill, RiSearchLine } from "react-icons/ri"

export default function Footer() {
    return (
        <section className="w-full h-full mx-auto bg-[#188C8D]/10">
            <div className="flex flex-col lg:flex-row items-start justify-between p-6 mx-auto max-w-[1280px]">
                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="flex flex-row items-center">
                        <Link href="/" className="flex items-center gap-5">
                            <RiMovie2Fill className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                            <h1 className="flex font-normal text-[16px]">Movie Mania Mantap</h1>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="flex font-semibold text-[22px] lg:text-[24px]">Watch it, Feel it, and Enjoy your cinema</h1>
                    </div>
                    <div className="flex items-center justify-start mb-6">
                        <form method="" action="/search">
                            <label htmlFor="search" className="sr-only">
                                search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 px-3 flex items-center">
                                    <RiSearchLine className="w-5 h-5" />
                                </div>
                                <input
                                    type="search"
                                    name=""
                                    id=""
                                    placeholder="Search for movies, shows, and other. . ."
                                    className="flex border border-black rounded-lg bg-[#188C8D]/10 py-2 pl-10 pr-5 shadow-sm w-[400px]"
                                />
                                <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                                    <RiMicFill className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-start pb-6">
                            <h1 className="flex font-semibold text-[22px] lg:text-[24px]">Movies</h1>
                        </div>
                        <div className="flex flex-col items-start gap-5">
                            <Link href="/" className="flex font-normal text-[16px] ">
                                Trending Movies
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                Popular Movies
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                New Movies
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px] text-cyan-400">
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-start pb-6">
                            <h1 className="flex font-semibold text-[22px] lg:text-[24px]">TV Show</h1>
                        </div>
                        <div className="flex flex-col items-start gap-5">
                            <Link href="/" className="flex font-normal text-[16px]">
                                Trending TV Show
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                Popular TV Show
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                New TV Show
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px] text-cyan-400">
                                See All
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-start pb-6">
                            <h1 className="flex font-semibold text-[22px] lg:text-[24px]">About</h1>
                        </div>
                        <div className="flex flex-col items-start gap-5">
                            <Link href="/" className="flex font-normal text-[16px]">
                                Faq
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                Blog
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                Sitemap
                            </Link>
                            <Link href="/" className="flex font-normal text-[16px]">
                                For Business
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

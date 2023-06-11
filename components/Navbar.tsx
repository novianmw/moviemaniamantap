import Link from "next/link"
import { RiMovie2Fill, RiSearchLine, RiMicFill, RiMenuFill, RiMoonClearFill } from "react-icons/ri"

export default function Navbar() {
    return (
        <section className="w-full flex flex-col items-start border-b-2 border-[#1c2024]">
            <div className="w-full flex flex-row justify-between items-center p-6 ">
                <div className="flex flex-row justify-start items-center">
                    <Link href="/" className="flex items-center gap-5">
                        <RiMovie2Fill className="w-8 h-8 lg:w-12 lg:h-12" />
                        <h1 className="hidden md:flex font-semibold text-[16px] lg:text-[20px]">Movie Mania Mantap</h1>
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <form method="" action="/">
                        <label htmlFor="search" className="sr-only">
                            search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 px-3 flex items-center">
                               <> <RiSearchLine className="w-5 h-5" /> </>
                            </div>
                            <input
                                type="search"
                                name=""
                                id=""
                                placeholder="Search for movies, shows, and other. . ."
                                className="flex border border-black rounded-lg bg-[#188C8D]/10 py-1 md:py-2 pl-10 pr-5 w-full md:w-[300px] lg:w-[300px] shadow-sm"
                            />
                            <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                                <> <RiMicFill className="w-5 h-5" /> </>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:flex flex-row justify-center items-center gap-1">
                    <Link
                        className="text-[14px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/">
                        Home
                    </Link>
                    <Link
                        className="text-[14px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/movies">
                        Movies
                    </Link>
                    <Link
                        className="text-[14px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/tvshows">
                        TV Shows
                    </Link>
                    <Link
                        className="text-[14px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/explore">
                        Explore
                    </Link>
                </div>
                <div className="hidden lg:flex flex-row justify-end items-center gap-3">
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Login
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Sign Up
                    </button>
                </div>
                <div className="lg:hidden flex flex-row justify-end items-center gap-3">
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        <> <RiMoonClearFill /> </>
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        <> <RiMenuFill /> </>
                    </button>
                </div>
            </div>
            <div className="lg:hidden flex flex-row items-center gap-2">
                <Link
                    className="text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/">
                    Home
                </Link>
                <Link
                    className="text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/movies">
                    Movies
                </Link>
                <Link
                    className="text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/tvshows">
                    TV Shows
                </Link>
                <Link
                    className="text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/explore">
                    Explore
                </Link>
            </div>
        </section>
    )
}

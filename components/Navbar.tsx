"use client"
import Link from "next/link"
import { useState } from "react"
import { RiMovie2Fill, RiSearchLine, RiMicFill, RiMenuFill, RiMoonClearFill, RiCloseLine } from "react-icons/ri"

export default function Navbar() {
    const [toggle,setToggle] = useState(true)
    const handleClick = () => {
        setToggle((prev) => !prev)
    }


    return (
        <header className="w-full flex flex-col items-start border-b-2 border-[#1c2024]">
            <div className="w-full flex flex-row justify-between items-center p-6 mx-auto max-w-[1280px]">
                <div className="md:w-1/3 flex flex-row justify-start items-center">
                    <Link href="/" className="flex items-center gap-5">
                        <RiMovie2Fill className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        <h1 className="md:flex font-semibold text-[16px] md:text-[22px] lg:text-[24px]">Movie Mania Mantap</h1>
                    </Link>
                </div>
                <div className="md:w-1/3 hidden lg:flex flex-row justify-center items-center gap-3">
                    <Link
                        className="text-[14px] md:text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/">
                        Home
                    </Link>
                    <Link
                        className="text-[14px] md:text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/movies">
                        Movies
                    </Link>
                    <Link
                        className="text-[14px] md:text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/tvshows">
                        TV Shows
                    </Link>
                    <Link
                        className="text-[14px] md:text-[16px] py-2 px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                        href="/search">
                        Search
                    </Link>
                </div>
                <div className="md:w-1/3 hidden lg:flex flex-row justify-end items-center gap-3">
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Login
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Sign Up
                    </button>
                </div>
                <div className="lg:hidden flex flex-row justify-end items-center gap-1">
                    {/* <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        <> <RiMoonClearFill /> </>
                    </button> */}
                    {/* <button className="border text-[10px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Login
                    </button>
                    <button className="border text-[10px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Sign Up
                    </button> */}
                    <button onClick={handleClick} className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        {toggle ? <RiMenuFill /> : <RiCloseLine/>}
                    </button>
                </div>
            </div>
            <div className={`${toggle ? 'hidden' : 'flex lg:hidden'} w-full flex-row justify-between items-center gap-0 md:gap-2 px-6`}>
                <Link
                    className="text-[12px] p-2 md:py-2 md:px-4 duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/">
                    Home
                </Link>
                <Link
                    className="text-[12px]  duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/movies">
                    Movies
                </Link>
                <Link
                    className="text-[12px]  duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/tvshows">
                    TV Shows
                </Link>
                <Link
                    className="text-[12px]  duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#188C8D] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/search">
                    Search
                </Link>
                <Link
                    className="text-[12px]  duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#E9652A] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/">
                    Login
                </Link>
                <Link
                    className="text-[12px]  duration-300 rounded-lg border-none hover:border-b hover:border-r hover:border-black hover:bg-[#E9652A] hover:text-white hover:rounded-lg hover:shadow-lg"
                    href="/">
                    Sign Up
                </Link>

            </div>
        </header>
    )
}

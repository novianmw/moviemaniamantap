"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import cinema from "../app/assets/images/cinema.jpg"
import axios from "axios"
import { RiMicFill, RiSearchLine } from "react-icons/ri"


export default function Intro() {
    const [trendings, setTrendings] = useState([] as any[])
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trending/all/day`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                },
            })
            .then((response) => {
                setTrendings(response.data.results)
            })
    }, [])

    return (
        <section className="w-full flex flex-col items-start">
            <div id="container" className="w-full flex flex-col justify-center items-center p-6 mx-auto max-w-[1280px]" >
                <div id="intro-image" className="flex flex-col justify-center items-center h-[75vh] p-6 gap-10">
                    <h1 className=" font-semibold text-[32px]">Watch it, Feel it, and Enjoy your cinema</h1>
                    <div className="flex justify-center items-center">
                        <form method="get" action="/search">
                            <label htmlFor="search" className="sr-only">
                                search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 px-3 flex items-center">
                                    <RiSearchLine className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for movies, shows, and other. . ."
                                    className="flex border border-black rounded-lg bg-[#188C8D]/10 py-1 md:py-2 pl-10 pr-5 w-full md:w-[500px] shadow-sm"
                                />
                                <div className="absolute inset-y-0 right-0 px-3 flex items-center">
                                    <RiMicFill className="w-5 h-5" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 p-5">
                    {trendings.map((trending, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${trending.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px] ">
                                {trending.title || trending.name}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                {trending.media_type.toUpperCase()}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                IMDB {trending.vote_average.toFixed(1)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

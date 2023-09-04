/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { getTvsPopular, getTvsTop, getTvsTrending } from "../api/api"

export default function page() {
    const [trendingTvs, setTrendingTvs] = useState([] as any [])
    const [popularTvs, setPopularTvs] = useState([] as any [])
    const [topTvs, setTopTvs] = useState([] as any [])
    
    useEffect(() => {
        getTvsTrending().then((result) => {
            setTrendingTvs(result)
        })
    }, [])

    useEffect(() => {
        getTvsPopular().then((result) => {
            setPopularTvs(result)
        })
    }, [])

    useEffect(() => {
        getTvsTop().then((result) => {
            setTopTvs(result)
        })
    }, [])

    return (
        <section className="w-full flex items-start p-6 mx-auto max-w-[1280px]">
            <div className="flex flex-col items-start gap-6 ">
                <div className="flex flex-row items-start gap-1">
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Trending
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Popular
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Top Rated
                    </button>
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {trendingTvs.map((trend, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${trend.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-name" className="font-normal text-[16px]">
                                {trend.name || trend.title}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {trend.vote_average}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {popularTvs.map((popular, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${popular.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-name" className="font-normal text-[16px]">
                                {popular.name || popular.title}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {popular.vote_average}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {topTvs.map((top, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${top.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-name" className="font-normal text-[16px]">
                                {top.name || top.title}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {top.vote_average}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

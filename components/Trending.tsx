"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"

export default function Trending() {

    const [trending, setTrending] = useState ([] as any [])
        useEffect (() => {
        axios.get (`${process.env.NEXT_PUBLIC_BASE_URL}/trending/movie/week`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        }).then((response) => {
            setTrending(response.data.results)
        })
    }, [])

    const [trendingTv, setTrendingTv] = useState ([] as any [])
        useEffect (() => {
            axios.get (`${process.env.NEXT_PUBLIC_BASE_URL}/discover/tv`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                }
            }).then((res) => {
                setTrendingTv(res.data.results)
            })
        }, [])

    return (
        <section className="w-full flex flex-col items-start">
            <div className="flex justify-start items-start p-5">
                <h3 className="font-semibold text-[24px]">
                    See Trending Movie
                </h3>
            </div>
            <div id="movie-container" className="w-full flex flex-row justify-center items-center gap-5 p-5">
                {trending.slice(0, 5).map((trend, index) => (
                    <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                        <div id="movie-image" className="flex items-center justify-center">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${trend.poster_path}`}
                                width={300}
                                height={300}
                                alt="Poster"
                                priority
                            />
                        </div>     
                        <div id="movie-rating" className="font-normal text-[16px]">
                            IMDB {trend.vote_average}
                        </div>
                        <div id="movie-year" className="font-normal text-[16px]">
                            {trend.release_date.slice(0,4)}
                        </div>
                    </div>
                ))}
            </div>
            <div id="movie-container" className="w-full flex flex-row justify-center items-center gap-5 p-5">
                {trending.slice(5, 10).map((trend, index) => (
                    <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                        <div id="movie-image" className="flex items-center justify-center">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${trend.poster_path}`}
                                width={300}
                                height={300}
                                alt="Poster"
                                priority
                            />
                        </div>
                        <div id="movie-rating" className="font-normal text-[16px]">
                            IMDB {trend.vote_average}
                        </div>
                        <div id="movie-year" className="font-normal text-[16px]">
                            {trend.release_date}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-start items-start p-5">
                <h3 className="font-semibold text-[24px]">
                    See Trending TV
                </h3>
            </div>
            <div id="movie-container" className="w-full flex flex-row justify-center items-center gap-5 p-5">
                {trendingTv.slice(0, 5).map((trendTv, index) => (
                    <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                        <div id="movie-image" className="flex items-center justify-center">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${trendTv.poster_path}`}
                                width={300}
                                height={300}
                                alt="Poster"
                                priority
                            />
                        </div>
                        <div id="movie-rating" className="font-normal text-[16px]">
                            IMDB {trendTv.vote_average}
                        </div>
                        <div id="movie-year" className="font-normal text-[16px]">
                            {trendTv.first_air_date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
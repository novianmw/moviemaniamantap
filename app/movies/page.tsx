/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { getMoviesPlaying, getMoviesPopular, getMoviesTop, getMoviesUpcoming } from "../api/api"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function page() {
    const [playingMovies, setPlayingMovies] = useState([] as any [])
    const [popularMovies, setPopularMovies] = useState([] as any [])
    const [topMovies, setTopMovies] = useState([] as any [])
    const [upcomingMovies, setUpcomingMovies] = useState([] as any [])

    useEffect (() => {
        getMoviesPlaying().then((result) => {
            setPlayingMovies(result)
        })
    }, [])

    useEffect (() => {
        getMoviesPopular().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    useEffect(() => {
        getMoviesTop().then((results) => {
            setTopMovies(results)
        })
    }, [])

    useEffect(() => {
        getMoviesUpcoming().then((result) => {
            setUpcomingMovies(result)
        })
    })

    return (
        <section className="w-full flex items-start p-6 mx-auto max-w-[1280px]">
            <div className="flex flex-col items-start gap-6 ">
                <div className="flex flex-row items-start gap-1">
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Now Playing
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Popular
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Top Rated
                    </button>
                    <button className="border text-[14px] border-black py-2 px-4 rounded-lg shadow-lg duration-300 hover:text-white hover:bg-[#E9652A]">
                        Upcoming
                    </button>
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {playingMovies.map((playing, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${playing.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-name" className="font-normal text-[16px]">
                                {playing.title || playing.name}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {playing.vote_average}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                {playing.release_date.slice(0, 4)}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {popularMovies.map((popular, index) => (
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
                                {popular.title || popular.name}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {popular.vote_average}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                {popular.release_date.slice(0, 4)}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {topMovies.map((top, index) => (
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
                                {top.title || top.name}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {top.vote_average}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                {top.release_date.slice(0, 4)}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="movie-container" className="w-full flex flex-wrap justify-center items-center gap-5 py-6">
                    {upcomingMovies.map((upcoming, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${upcoming.poster_path}`}
                                    width={250}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-name" className="font-normal text-[16px]">
                                {upcoming.title || upcoming.name}
                            </div>
                            <div id="movie-rating" className="font-normal text-[16px]">
                                IMDB {upcoming.vote_average}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                {upcoming.release_date.slice(0, 4)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

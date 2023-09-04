/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { RiMicFill, RiSearchLine } from "react-icons/ri"
import { getMoviesPopular, getSearchThing } from "../api/api"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function page() {
    const [popularMovies, setPopularMovies] = useState([] as any [])

    useEffect(()=> {
        getMoviesPopular().then((result) => {
            setPopularMovies(result)
        })
    },[])

    const search =async (q:any) => {
        if (q.length > 3) {
            const query = await getSearchThing(q)
            setPopularMovies(query.results)
        }
    }

    return (
        <section className="w-full flex flex-col items-start ">
            <div className="w-full flex flex-col justify-center items-center p-6 mx-auto max-w-[1280px]">
                <div className="w-full flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 px-3 flex items-center">
                            <RiSearchLine className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for movies, shows, and other. . ."
                            className="flex border border-black rounded-lg bg-[#188C8D]/10 py-1 md:py-2 pl-10 pr-5 w-full md:w-[500px] shadow-sm"
                            onChange={(e) => search(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 px-3 flex items-center">
                            <RiMicFill className="w-5 h-5" />
                        </div>
                    </div>
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
                            <div id="movie-rating" className="font-normal text-[16px] ">
                                {popular.title || popular.name}
                            </div>
                            <div id="movie-rating" className="font-normal uppercase text-[16px]">
                                {popular.media_type}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                IMDB {popular.vote_average}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
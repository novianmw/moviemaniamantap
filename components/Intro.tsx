"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import cinema from "../public/cinema.jpg"
import axios from "axios"

export default function Intro() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const options = {
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover/movie`,
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` // JIKA SYNTAX API TOKEN INI TIDAK MENGGUNAKAN "NEXT_PUBLIC" MAKA MUNCUL ERROR 401
            }
        }

        axios.request(options)
            .then((response) => {
                setMovies(response.data.results)
        })
    })

    return (
        <section className="w-full flex flex-col items-start">
            <div id="container" className="w-full flex flex-col justify-center items-center">
                <div id="intro-image" className="flex justify-center items-center py-32">
                    <h1 className=" font-semibold text-[32px]">Watch it, Feel it, and Enjoy your cinema</h1>
                </div>
                <div id="movie-container" className="w-full flex flex-row justify-center items-center gap-5 p-5">
                    {movies.slice(0, 5).map((movie, index) => (
                        <div key={index} id="movie-wrapper" className="flex flex-col items-center justify-center border-2 border-[#1c2024] p-2">
                            <div id="movie-image" className="flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${movie.poster_path}`}
                                    width={300}
                                    height={300}
                                    alt="Poster"
                                    priority
                                />
                            </div>
                            <div id="movie-rating" className="font-normal  text-[16px]">
                                IMDB {movie.vote_average}
                            </div>
                            <div id="movie-year" className="font-normal text-[16px]">
                                {movie.release_date.slice(0,4)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

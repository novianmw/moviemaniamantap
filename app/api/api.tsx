import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const imageUrl = process.env.NEXT_PUBLIC_IMG_URL
const apiKey = process.env.API_KEY
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN

export const getSearchThing =async (q:any) => {
    const searchThing = await axios.get (`${baseUrl}/search/multi?query=${q}`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return searchThing.data 
}

export const getMoviesPlaying = async () => {
    const playingMovies = await axios.get (`${baseUrl}/movie/now_playing`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return playingMovies.data.results
}

export const getMoviesPopular = async () => {
    const popularMovies = await axios.get (`${baseUrl}/movie/popular`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return popularMovies.data.results
}

export const getMoviesTop = async () => {
    const topMovies = await axios.get (`${baseUrl}/movie/top_rated`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return topMovies.data.results
}

export const getMoviesUpcoming = async () => {
    const upcomingMovies = await axios.get (`${baseUrl}/movie/upcoming`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return upcomingMovies.data.results
}

export const getTvsTrending = async () => {
    const trendingTvs = await axios.get (`${baseUrl}/trending/tv/day`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return trendingTvs.data.results
}

export const getTvsPopular = async () => {
    const popularTvs = await axios.get (`${baseUrl}/tv/popular`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return popularTvs.data.results
}

export const getTvsTop = async () => {
    const topTvs = await axios.get (`${baseUrl}/tv/top_rated`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`
        }
    })
    return topTvs.data.results
}
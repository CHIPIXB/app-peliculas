export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    original_language: string;
    genres: { id: number, name: string }[];
    runtime: number;
}

export interface Serie {
    id: number;
    name: string;
    backdrop_path: string;
    overview: string;
    first_air_date: string;
    poster_path: string;
    vote_average: number;
    original_language: string;
    genres: { id: number, name: string }[];
    episode_run_time: number[];
}
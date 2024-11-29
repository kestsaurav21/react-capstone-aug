import styles from "../components/movie.module.css"
import { useState } from "react"
import MovieGrid from "../components/MovieGrid"
import MovieChip from "../components/movieChip"
const MOVIES = [{
    value: "action",
    label: "Action",
    image: "",
}, {
    value: "romance",
    label: "Romance",
    image: "",
}, {
    value: "drama",
    label: "Drama",
    image: "",
}, {
    value: "thriller",
    label: "Thriller",
    image: "",
}, {
    value: "western",
    label: "Western",
    image: "",
},
{
    value: "horror",
    label: "Horror",
    image: "",
},
{
    value: "fanstasy",
    label: "Fanstasy",
    image: "",
},
{
    value: "music",
    label: "Music",
    image: "",
},
{
    value: "fiction",
    label: "Fiction",
    image: "",
},
]

export default function Movies() {
    const [selected, setSelected] = useState([])
    console.log(selected)
    return (
        <>
            <h1>Movies</h1>
            <div className={styles.movie_grid}>
                {MOVIES.map(movie => (
                    <MovieGrid key={movie.value} selected={selected} setSelected={setSelected} movie={movie} />
                ))}
            </div>
            <div className={styles.movie_chips}>
                {selected.map(movie => (
                    <MovieChip key={movie} selected={selected} setSelected={setSelected} movie={movie} />
                ))}
            </div>
            {selected.length < 3 ? <p>Minimum 3 categories required</p> : null}

        </>
    )
}
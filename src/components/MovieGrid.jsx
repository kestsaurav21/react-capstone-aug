
/* eslint-disable react/prop-types */
import styles from "./movie.module.css"
export default function MovieGrid({ movie, selected, setSelected }) {
    const handleSelection = () => {
        if (selected.includes(movie.label)) {
            setSelected(selected.filter(item => item !== movie.label))
        } else {
            setSelected([...selected, movie.label])
        }
    }
    const generateBorder = (label) => {
        if (selected.includes(label)) {
            return "2px solid green"
        }
        return "2px solid black"
    }
    return (
        <div style={{
            border: generateBorder(movie.label),
        }} onClick={handleSelection} className={styles.movie_box}>
            <img src={movie.image} alt={movie.label} />
            <h2>{movie.label}</h2>
        </div>
    )
}

// 1. if movie is not in selected array, add it
// 2. if movie is in selected array, remove it
import { useEffect, useState } from "react";

export default function Note() {
    const [notes, setNotes] = useState('');
    useEffect(() => {
        if (localStorage.getItem('notes')) {
            setNotes(localStorage.getItem('notes'));
        }
    }, [])
    return (
        <div>
            <h1>Note</h1>
            <p>This is a note</p>
            <textarea style={{
                minHeight: "200px",
                maxHeight: "400px",
                maxWidth: "500px",
                minWidth: "500px",
                backgroundColor: "yellow",
                text: "black",
            }}
                value={notes}
                onChange={(e) => { setNotes(e.target.value); localStorage.setItem('notes', e.target.value) }}
            >

            </textarea>
        </div>
    );
}
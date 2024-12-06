import { useEffect, useState } from "react";

export default function News() {
    const [news, setNews] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_61548f20c0a8eb88db3cab2b0f86564a2bbf3&q=cricket');
            const data = await response.json();
            setNews(data?.results[3]);
            setLoading(false);
        }
        fetchNews();
    }, [])
    return (
        <div style={{
            height: "100%",
        }}>
            <h1>News</h1>
            <p>This is a news</p>
            {loading ? <p>Loading...</p> : <div style={{
                width: "500px",
                height: "300px",

            }}>
                <img style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                }} srcSet={news.image_url ? news?.image_url.split(',')[0] : null} alt={news.title} />
                <h2>{news.title}</h2><p>{news.description}</p>
            </div>}
        </div>
    );
}
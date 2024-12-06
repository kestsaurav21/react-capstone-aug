import { useEffect, useState } from "react";
export default function Weather() {
    const [weather, setWeather] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=O6hIIKUOhewW3VNl4A3fPj2skP32Ws3c');
            const data = await response.json();
            setWeather(data.timelines.minutely[0]);
            setLoading(false);
        }
        fetchWeather();
    }, [])
    return (
        <div>
            <h1>Weather</h1>
            <p>This is a weather</p>
            {loading ? <p>Loading...</p> : <div style={{
                width: "500px",
                height: "300px",
            }}>
                {weather.values.temperature}°C
                <br />
                {weather.values.windSpeed}m/s
            </div>}
        </div>
    )
}
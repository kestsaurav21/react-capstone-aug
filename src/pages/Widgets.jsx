import UserInfo from "../components/userInfo";
import Note from "../components/note";
import News from "../components/news";
import Weather from "../components/weather";
export default function Widgets() {
    return (
        <div>
            <h1>Widgets</h1>
            <UserInfo />
            <Note />
            <News />
            <Weather />
        </div>
    );
}
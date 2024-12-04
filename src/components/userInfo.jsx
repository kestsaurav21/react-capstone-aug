export default function UserInfo() {
    const user = JSON.parse(localStorage.getItem("user"))
    const movies = JSON.parse(localStorage.getItem("selected"))
    return (
        <div>
            <h1>User Info</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.mobile}</p>
            <p>{user.username}</p>
            <div>
                <h1>Selected Movies</h1>
                {movies.map((movie, idx) => (
                    <p key={idx}>{movie}</p>
                ))}
            </div>
        </div>
    );
}
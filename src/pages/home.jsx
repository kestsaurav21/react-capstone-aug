import SignupForm from "../components/signupForm"
export default function Home() {
    return (
        <div style={{
            display: "flex",
        }}>
            <div style={{
                background: "cyan",
                height: "100vh",
                width: "50vw"
            }}></div>
            <div style={{
                background: "black",
                height: "100vh",
                width: "50vw"
            }}>
                <SignupForm />
            </div>
        </div>
    )
}
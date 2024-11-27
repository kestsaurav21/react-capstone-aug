import SignupForm from "../components/signupForm"
import image from "../assets/image.png"
export default function Home() {
    return (
        <div style={{
            
            display: "flex",
        }}>
            <div style={{
                background: "cyan",
                height: "100vh",
                width: "50vw"
            }}>
                <img style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                }} src={image} alt="image" />
            </div>
            <div style={{
                background: "black",
                height: "100vh",
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
            }}>
                <SignupForm />
            </div>
        </div>
    )
}


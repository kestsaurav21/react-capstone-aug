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
                <p
                    style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "30px",
                        color: "white",
                        fontFamily: "DM Sans",
                        fontSize: "36px",
                        fontWeight: "bold",
                        margin: 0,
                    }}
                >
                    Discover new things on <br /> Superapp
                </p>
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


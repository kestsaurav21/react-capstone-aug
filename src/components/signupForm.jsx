import { useState } from "react"
export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        userName: "",
        termsAndConditions: false,
    })
    const [error, setError] = useState({
        name: false,
        email: false,
        mobile: false,
        userName: false,
        termsAndConditions: false,
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, mobile, userName, termsAndConditions } = formData
        setError({
            name: false,
            email: false,
            mobile: false,
            userName: false,
            termsAndConditions: false,
        })   // reset error state
        if (name.trim().length === 0) {  //        
            setError((prevState) => { return { ...prevState, name: true } })
        }
        if (email.trim().length === 0) {
            setError((prevState) => { return { ...prevState, email: true } })
        }
        if (mobile.trim().length === 0) {
            setError((prevState) => { return { ...prevState, mobile: true } })
        }
        if (userName.trim().length === 0) {
            setError((prevState) => { return { ...prevState, userName: true } })
        }
        if (termsAndConditions === false) {
            setError((prevState) => { return { ...prevState, termsAndConditions: true } })
        }
    }
    return (
        <div>
            <h1 style={{
                color: "white",
            }}>Signup Form</h1>
            <form style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                margin: "0 auto",
                gap: "10px",
            }}
                onSubmit={handleSubmit}
            >
                <input placeholder="Name" type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                {error.name && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Name is required</p>}
                <input placeholder="Email" type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                {error.email && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Email is required</p>}
                <input placeholder="Mobile" type="text" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} value={formData.mobile} />
                {error.mobile && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}
                >Mobile is required</p>}
                <input placeholder="Username" type="text" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} value={formData.userName} />
                {error.userName && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Username is required</p>}
                <div style={{
                    display: "flex",
                    gap: "10px",
                }}>
                    <input id="checkbox" type="checkbox" onChange={(e) => setFormData({ ...formData, termsAndConditions: e.target.checked })} checked={formData.termsAndConditions} />
                    <label style={{
                        color: "white",
                    }} htmlFor="checkbox">Share my registration data with Superapp</label>
                </div>
                {error.termsAndConditions && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>You must agree to the terms and conditions</p>}
                <button style={{
                    width: "120px",
                }} type="submit">Sign Up</button>
            </form>
        </div>
    )
}



// put image on left side of signup form
// on right side, match colors and texts for form
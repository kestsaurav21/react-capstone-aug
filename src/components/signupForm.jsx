import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userName: "",
    termsAndConditions: false,
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    mobile: false,
    userName: false,
    termsAndConditions: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, userName, termsAndConditions } = formData;
    setError({
      name: false,
      email: false,
      mobile: false,
      userName: false,
      termsAndConditions: false,
    }); // reset error state
    if (name.trim().length === 0) {
      //
      setError((prevState) => {
        return { ...prevState, name: true };
      });
    }
    if (email.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    }
    if (mobile.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, mobile: true };
      });
    }
    if (userName.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, userName: true };
      });
    }
    if (termsAndConditions === false) {
      setError((prevState) => {
        return { ...prevState, termsAndConditions: true };
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "518px",
      }}>
      {/* Header */}
      <h1
        style={{
          color: "#72DB73",
          fontFamily: "Single Day",
          fontSize: "47px",
          marginBottom: "10px",
        }}>
        Super App
      </h1>
      <p
        style={{
          color: "white",
          fontFamily: "DM Sans",
          fontSize: "18px",
          marginBottom: "20px",
        }}>
        Create your new account
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          style={{
            background: "#292929",
            padding: "0.8rem",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        />
        {error.name && <ErrorText text="Name is required" />}

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          style={{
            background: "#292929",
            padding: "0.8rem",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        />
        {error.email && <ErrorText text="Email is required" />}

        <input
          placeholder="Mobile"
          type="text"
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          value={formData.mobile}
          style={{
            background: "#292929",
            padding: "0.8rem",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        />
        {error.mobile && <ErrorText text="Mobile is required" />}

        <input
          placeholder="Username"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          value={formData.userName}
          style={{
            background: "#292929",
            padding: "0.8rem",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        />
        {error.userName && <ErrorText text="Username is required" />}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 0",
          }}>
          <input
            id="checkbox"
            type="checkbox"
            onChange={(e) =>
              setFormData({ ...formData, termsAndConditions: e.target.checked })
            }
            checked={formData.termsAndConditions}
            style={{ margin: 0 }}
          />
          <label
            htmlFor="checkbox"
            style={{
              fontFamily: "DM Sans",
              fontSize: "14px",
              color: "#7C7C7C",
            }}>
            Share my registration data with Superapp
          </label>
        </div>
        {error.termsAndConditions && (
          <ErrorText text="You must agree to the terms and conditions" />
        )}

        <button
          type="submit"
          style={{
            background: "#72DB73",
            color: "white",
            width: "100%",
            padding: "0.8rem",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            borderRadius: "30px",
          }}>
          SIGN UP
        </button>
      </form>
      {/* Terms */}
      <div
        style={{
          width: "292px",
        }}>
        <p
          style={{
            marginTop: "15px",
            fontFamily: "DM Sans",
            fontSize: "10px",
            color: "#7C7C7C",
          }}>
          By clicking on Sign up, you agree to Superapp{" "}
          <a href="#" style={{ color: "#72DB73", textDecoration: "none" }}>
            Terms and Conditions of Use
          </a>
          . <br />
          To learn more about how Superapp collects, uses, and protects your
          data, please read the{" "}
          <a href="#" style={{ color: "#72DB73", textDecoration: "none" }}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

const ErrorText = ({ text }) => {
  return (
    <p
      style={{
        color: "red",
        fontSize: "14px",
        margin: "0",
        textAlign: "left",
      }}>
      {text}
    </p>
  );
};

import React, { useEffect, useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../utils/firebaseConfig";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
  }, []);

  const sendOtp = () => {
    if (phone.length !== 10) {
      return alert("Phone number should contain 10 digits!");
    }
    const phoneNumber = "+91" + phone;

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("SMS sent");
        setOtpSent(true);
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      return alert("Enter OTP of length 6");
    }
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Error:", error);
      });
  };

  return (
    <>
      <div>GappaTappa ka Gate</div>
      <div>
        <p>Login</p>
        {otpSent ? (
          <div>
            <input
              placeholder="Enter 6 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify</button>
          </div>
        ) : (
          <div>
            <input
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>
            <div id="recaptcha-container"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;

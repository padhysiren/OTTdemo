import "./LoginScreen.css"
import { useState } from "react"
import SignUpScreen from "./SignUpScreen"

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)
    
    const handleSignInClick = () => {
        setSignIn(true);
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <button onClick={handleSignInClick} className="loginScreen_button">
                    Sign In
                </button>

                <div className="loginSceeen_gradient"></div>

                <div className="loginScreen_body">
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button onClick={handleSignInClick} className="loginScreen_getStarted">
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen

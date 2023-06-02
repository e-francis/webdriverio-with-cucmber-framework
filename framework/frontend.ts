import LandingScreen from "./components/UI/landing-screen/landing-screen";
import SignUpScreen from "./components/UI/sign-up-screen/sign-up-screen";
import LoginScreen from "./components/UI/login-screen/login-screen";

export default class Frontend {
    landingScreen?: LandingScreen;
    signupScreen?: SignUpScreen;
    loginScreen?: LoginScreen;

    constructor(landingScreen?: LandingScreen, signupScreen?: SignUpScreen, loginScreen?: LoginScreen) {
        this.landingScreen = landingScreen;
        this.signupScreen = signupScreen;
        this.loginScreen = loginScreen;
    }
}

import { autoInjectable } from "tsyringe";


@autoInjectable()
export default class LandingScreen {
    private readonly elements = {
        loginButton:() => $("#login-button"),
        signupButton: () => $("#signup-button"),
        headerText: () => $("#header-text")
    }

    async tapLoginButton() {
        await this.elements.loginButton().waitForExist();
        await expect(this.elements.loginButton()).toBeExisting();
        await this.elements.loginButton().click()
    }

    async verifyLoginScreen() {
        await expect(this.elements.headerText()).toHaveText("Welcome back");

    }

    async tapSignUpButton() {
        await this.elements.signupButton().waitForExist();
        await expect(this.elements.signupButton()).toBeExisting();
        await this.elements.signupButton().click()
    }

    async verifySignUpScreen() {
        await expect(this.elements.headerText()).toHaveText("sign up");
    }

}
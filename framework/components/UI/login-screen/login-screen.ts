import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class LoginScreen {
    private readonly elements = {
        loginButton: () => $("#login-button"),
        signupButton: () => $("#sign-button"),
        backButton: () => $("#back-button"),
        headerText: () => $("#header-text"),
        signupLink: () => $("[href=signup]"),
        forgotPasswordLink: () => $("[href=forgot-password]"),
        emailAddress: () => $("#email"),
        password: () => $("#password"),
        eyeIcon: () => $("#icon"),
        serverNotification: () => $("#notification"),
    }

    async tapBackButton() {
        await this.elements.backButton().click();
    }

    async tapLoginButton() {
        await this.elements.loginButton().click();
    }

    async verifyLandingScreen() {
        await expect(this.elements.signupButton()).toBeExisting();
        await expect(this.elements.loginButton()).toBeExisting();
    }

    async verifyDashboardScreen(){
        await expect(this.elements.headerText()).toHaveText("Dashboard");
    }

    async goToSignupScreen() {
        await this.elements.signupLink().click();
    }

    async verifySignupScreen() {
        await expect(this.elements.headerText()).toHaveText("sign up");
    }

    async maskPassword() {
        await this.elements.password().setValue("Test123@");
        await this.elements.eyeIcon().click();
    }

    async verifyMaskedPassword() {
        const regex = /^•{8}$/;
        const passwordValue = await this.elements.password().getValue();
        await expect(passwordValue).toMatch(regex);
    }

    async unMaskPassword() {
        await this.elements.eyeIcon().click();
    }

    async verifyUnMaskedPassword() {
        const passwordValue = await this.elements.password().getValue();
        await expect(passwordValue).toMatch(passwordValue);
    }

    async displayServerNotification() {
        const message = await this.elements.serverNotification().getText();
        await expect(message).toMatch("invalid credentials");
    }

    async verifyLoginScreen(){
        await expect(this.elements.backButton()).toBeExisting();
        await expect(this.elements.headerText()).toHaveText("Welcome back");
        await expect(this.elements.emailAddress()).toBeExisting();
        await expect(this.elements.password()).toBeExisting();
        await expect(this.elements.signupLink()).toBeExisting();
        await expect(this.elements.forgotPasswordLink()).toBeExisting();
    }

    async fillLoginForm(emailAddress: string, password: string) {
        await this.elements.emailAddress().setValue(emailAddress);
        await this.elements.password().setValue(password);
    }

    async fillInvalidCredentials(invalidEmailAddress: string, invalidPassword: string) {
        await this.elements.emailAddress().setValue(invalidEmailAddress);
        await this.elements.password().setValue(invalidPassword);
    }
    async fillInvalidPassword(validEmailAddress: string, invalidPassword: string) {
        await this.elements.emailAddress().setValue(validEmailAddress);
        await this.elements.password().setValue(invalidPassword);
    }
    async multipleLoginAttempts() {
        for (let i = 0; i < 3; i++) {
            await this.elements.loginButton().click();
        }
    }
    async displayServerNotificationMultipleLoginAttempt() {
        const message = await this.elements.serverNotification().getText();
        await expect(message).toMatch(
            /You have been blocked from logging in for (1000|\d{1,3}) seconds/
        );
    }

    async goToForgotPasswordScreen() {
        await expect(this.elements.forgotPasswordLink()).toBeExisting();
        await this.elements.forgotPasswordLink().click();
    }

    async verifyForgotPasswordScreen() {
        await expect(this.elements.headerText()).toHaveText("Reset Password");
        await expect(this.elements.emailAddress()).toBeDisplayed();
    }
}
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class SignUpScreen {
    private readonly elements = {
        signupButton: () => $("#sign-button"),
        loginButton: () => $("#login-button"),
        backButton: () => $("#back-button"),
        headerText: () => $("#header-text"),
        loginLink: () => $("[href=login]"),
        fullName: () => $("#full-name"),
        emailAddress: () => $("#email"),
        telephoneNumber: () => $("#phone-number"),
        password: () => $("#password"),
        bankVerificationNumber: () => $("#bvn"),
        dateOfBirth: () => $("#dob"),
        eyeIcon: () => $("#icon"),
        serverNotification: () => $("#notification"),
        errorMessage: () => $("#err-message"),
        continueButton: () => $("#continue-button"),
    };

    async tapBackButton() {
        await this.elements.backButton().click();
    }

    async tapContinueButton() {
        await this.elements.continueButton().click();
    }

    async verifyLandingScreen() {
        await expect(this.elements.signupButton()).toBeExisting();
        await expect(this.elements.loginButton()).toBeExisting();
    }

    async verifyLoginScreen(){
        await expect(this.elements.headerText()).toMatch("Welcome back");
    }

    async displayErrorMessages() {
        const errorMessage = await expect(this.elements.errorMessage()).toBeDisplayed();
        await expect(errorMessage).toMatch("This field is required");
    }

    async goToLoginScreen() {
        await this.elements.loginLink().click();
    }

    async verifySuccessfulSignup() {
        const message = await this.elements.serverNotification().getText();
        await expect(message).toMatch("signup successful");
        await expect(this.elements.headerText()).toHaveText("Welcome back");
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

    async verifySignupScreen(){
        await expect(this.elements.backButton()).toBeExisting();
        await expect(this.elements.headerText()).toHaveText("sign up");
        await expect(this.elements.fullName()).toBeExisting();
        await expect(this.elements.emailAddress()).toBeExisting();
        await expect(this.elements.telephoneNumber()).toBeExisting();
        await expect(this.elements.password()).toBeExisting();
        await expect(this.elements.bankVerificationNumber()).toBeExisting();
        await expect(this.elements.dateOfBirth()).toBeExisting();
        await expect(this.elements.loginLink()).toBeExisting();
    }

    async fillSignupForm(fullName: string, emailAddress: string, telephoneNumber: string, password: string,
                     bankVerificationNumber: string, dateOfBirth: string) {
        await this.elements.fullName().setValue(fullName);
        await this.elements.emailAddress().setValue(emailAddress);
        await this.elements.telephoneNumber().setValue(telephoneNumber);
        await this.elements.password().setValue(password);
        await this.elements.bankVerificationNumber().setValue(bankVerificationNumber);
        await this.elements.dateOfBirth().setValue(dateOfBirth);
    }

    async fillRegisteredEmail() {
        await this.elements.emailAddress().setValue("qa@blackcopper.io");
    }

    async displayServerNotification() {
        const message = await this.elements.serverNotification().getText();
        await expect(message).toMatch("email already registered");
    }

    async inValidPassword() {
        await this.elements.password().setValue("test12@");
    }

    async verifyInvalidPasswordErrorMessage() {
        const message = await this.elements.errorMessage().getText();
        await expect(message).toMatch("password does not meet the minimum requirement");
    }

    async validPassword() {
        await this.elements.password().setValue("Test123@");
    }

    async passwordErrorMessage() {
        await expect(this.elements.errorMessage()).not.toBeExisting();
    }

}

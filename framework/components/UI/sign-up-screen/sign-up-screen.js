var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoInjectable } from "tsyringe";
let SignUpScreen = class SignUpScreen {
    elements = {
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
    async verifyDashboardScreen() {
        await expect(this.elements.headerText()).toHaveText("Dashboard");
    }
    async displayErrorMessages() {
        await expect(this.elements.errorMessage()).toBeDisplayed();
    }
    async goToLoginScreen() {
        await this.elements.loginLink().click();
    }
    async verifyLoginScreen() {
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
    async verifySignupScreen() {
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
    async fillSignupForm(fullName, emailAddress, telephoneNumber, password, bankVerificationNumber, dateOfBirth) {
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
        await expect(this.elements.serverNotification()).toMatch("email already registered");
    }
    async inValidPassword() {
        await this.elements.password().setValue("test12@");
    }
    async verifyInvalidPasswordErrorMessage() {
        await expect(this.elements.errorMessage()).toMatch("password does not meet the minimum requirement");
    }
    async validPassword() {
        await this.elements.password().setValue("Test123@");
    }
    async passwordErrorMessage() {
        await expect(this.elements.errorMessage()).not.toBeExisting();
    }
};
SignUpScreen = __decorate([
    autoInjectable()
], SignUpScreen);
export default SignUpScreen;

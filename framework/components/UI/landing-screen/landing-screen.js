var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoInjectable } from "tsyringe";
let LandingScreen = class LandingScreen {
    elements = {
        loginButton: () => $("#login-button"),
        signupButton: () => $("#signup-button"),
        headerText: () => $("#header-text")
    };
    async tapLoginButton() {
        await this.elements.loginButton().waitForExist();
        await expect(this.elements.loginButton()).toBeExisting();
        await this.elements.loginButton().click();
    }
    async verifyLoginScreen() {
        await expect(this.elements.headerText()).toHaveText("Welcome back");
    }
    async tapSignUpButton() {
        await this.elements.signupButton().waitForExist();
        await expect(this.elements.signupButton()).toBeExisting();
        await this.elements.signupButton().click();
    }
    async verifySignUpScreen() {
        await expect(this.elements.headerText()).toHaveText("sign up");
    }
};
LandingScreen = __decorate([
    autoInjectable()
], LandingScreen);
export default LandingScreen;

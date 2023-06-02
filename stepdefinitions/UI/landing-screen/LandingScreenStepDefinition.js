import { Given, When, Then } from '@wdio/cucumber-framework';
import Frontend from "../../../framework/frontend";
import { container } from "tsyringe";
Given(/^the user is on the landing screen$/, async () => {
    await browser.url("/");
});
When(/^the user taps on the login button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.tapLoginButton();
});
Then(/^the user should be redirected to the login screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.verifyLoginScreen();
});
When(/^the user taps on the sign up button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.tapSignUpButton();
});
Then(/^the user should be redirected to the sign up screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.verifySignUpScreen();
});

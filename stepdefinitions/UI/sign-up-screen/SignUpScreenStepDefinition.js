import { Before, Given, When, Then } from '@wdio/cucumber-framework';
import Frontend from "../../../framework/frontend";
import { container } from "tsyringe";
Before(async () => {
    await browser.url("/");
});
Given(/^the user is on the sign-up screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.tapSignUpButton();
});
When(/^the user taps the back button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyLandingScreen();
});
Then(/^the user should be redirected to the landing screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.tapBackButton();
});
Given(/^the user is on the sign-up screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifySignupScreen();
});
When(/^the user enters valid details and signs up successfully$/, async (data) => {
    const frontend = container.resolve(Frontend);
    const { "full-name": fullName, "email-address": emailAddress, "telephone-number": telephoneNumber, "password": password, "bank-verification-number": bankVerificationNumber, "date-of-birth": dateOfBirth } = data.rowsHash();
    await frontend.signupScreen.fillSignupForm(fullName, emailAddress, telephoneNumber, password, bankVerificationNumber, dateOfBirth);
});
When(/^the user taps on the continue button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.tapContinueButton();
});
Then(/^the user should be redirected to the dashboard screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyDashboardScreen();
});
When(/^the user sees an error message when no credential is entered$/, async (data) => {
    const frontend = container.resolve(Frontend);
    const { "full-name": fullName, "email-address": emailAddress, "telephone-number": telephoneNumber, "password": password, "bank-verification-number": bankVerificationNumber, "date-of-birth": dateOfBirth } = data.rowsHash();
    await frontend.signupScreen.fillSignupForm("", "", "", "", "", "");
    await frontend.signupScreen.tapContinueButton();
});
Then(/^the user should see specific error messages for each invalid field$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.displayErrorMessages();
});
When(/^the user sees an error message when a credential is not entered$/, async (data) => {
    const frontend = container.resolve(Frontend);
    const { "full-name": fullName, "email-address": emailAddress, "telephone-number": telephoneNumber, "password": password, "bank-verification-number": bankVerificationNumber, "date-of-birth": dateOfBirth } = data.rowsHash();
    await frontend.signupScreen.fillSignupForm(fullName, emailAddress, telephoneNumber, password, "", dateOfBirth);
    await frontend.signupScreen.tapContinueButton();
});
Then(/^the user should see specific error messages for the invalid field$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.displayErrorMessages();
});
Given(/^the user is on the sign-up screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifySignupScreen();
});
When(/^the user taps on the "Login" link$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.goToLoginScreen();
});
Then(/^the user should be redirected to the login screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyLoginScreen();
});
When(/^an already registered is entered$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.fillRegisteredEmail();
    await frontend.signupScreen.tapContinueButton();
});
Then(/^the user should see an error notification$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.displayServerNotification();
});
When(/^the user enters a password that doesn't meet the minimum requirements$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.inValidPassword();
});
Then(/^the user should see an error message$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyInvalidPasswordErrorMessage();
});
When(/^the user enters a password that meets the minimum requirements$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.validPassword();
});
Then(/^the user should no longer see the error message$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.passwordErrorMessage();
});
When(/^the user taps the eye icon to mask the password$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.maskPassword();
});
Then(/^the password should be masked$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyMaskedPassword();
});
When(/^the user taps the eye icon to unmask the password$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.unMaskPassword();
});
Then(/^the password should be unmasked$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.signupScreen.verifyUnMaskedPassword();
});

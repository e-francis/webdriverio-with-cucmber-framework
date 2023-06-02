import {Before, Given, Then, When} from "@wdio/cucumber-framework";
import { TableDefinition } from 'cucumber';
import Frontend from "../../../framework/frontend";
import {container} from "tsyringe";

Before(async () => {
    await browser.url("/");
});

Given(/^the user is on the login screen$/, async  () => {
    const frontend = container.resolve(Frontend);
    await frontend.landingScreen.tapLoginButton();
});

When(/^the user taps the back button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.tapBackButton();

});

Then(/^the user should be redirected to the landing screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyLandingScreen();

});

When(/^the user taps on the Sign Up link$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.goToSignupScreen();
});

Then(/^the user should be redirected to the sign-up screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifySignupScreen();
});

Given(/^the user is on the login screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyLoginScreen();
});

When(/^the user enters a valid "(.*)"$/, async (data: TableDefinition) => {
    const frontend = container.resolve(Frontend);
    const { "email-address": emailAddress, "password": password} = data.rowsHash();
    await frontend.loginScreen.fillLoginForm(emailAddress, password);
});

When(/^the user taps on the login button$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.tapLoginButton();
});

Then(/^the user should be redirected to the dashboard screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyDashboardScreen();
});

When(/^the user taps the eye icon to mask the password$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.maskPassword();
});

Then(/^the password should be masked$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyMaskedPassword();
});

Then(/^the user taps the eye icon to umask the password$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.unMaskPassword();
});

Then(/^the password should be unmasked$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyUnMaskedPassword();
});

When(/^the user enters an invalid "(.*)"$/, async (data: TableDefinition) => {
    const frontend = container.resolve(Frontend);
    const { "invalid-email-address": invalidEmailAddress, "password": invalidPassword} = data.rowsHash();
    await frontend.loginScreen.fillInvalidCredentials(invalidEmailAddress, invalidPassword);
});

Then(/^the user should see an error message indicating invalid credentials$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.displayServerNotification();
});

When(/^the user enters an invalid (.*)$/, async (data: TableDefinition) => {
    const frontend = container.resolve(Frontend);
    const { "valid-email-address": validEmailAddress, "invalid-password": invalidPassword} = data.rowsHash();
    await frontend.loginScreen.fillInvalidPassword(validEmailAddress, invalidPassword);
});

When(/^the user taps on the login button more three times to login$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.multipleLoginAttempts();
});

Then(/^the user should see an error message indicating they have been prevented from logging in for x amount of minutes$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.displayServerNotificationMultipleLoginAttempt();

});

When(/^the user taps on the "Forgot Password\?" link$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.goToForgotPasswordScreen();

});

Then(/^the user should be redirected to the "([^"]*)" screen$/, async () => {
    const frontend = container.resolve(Frontend);
    await frontend.loginScreen.verifyForgotPasswordScreen();
});

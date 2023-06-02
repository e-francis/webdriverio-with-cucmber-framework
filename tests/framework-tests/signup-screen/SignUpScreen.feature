Feature: Framework test for Sign Up Screen
  As a user
  I want to create a new account
  So that I can access the app's features and services

Scenario: User can tap the back button
  Given the user is on the sign-up screen
  And the user taps the back button
  Then the user should be redirected to the landing screen

Scenario Outline: User enters valid details and signs up successfully
  Given the user is on the sign-up screen
  And the user enters a valid "<full-name>"
  And the user enters a valid "<email-address>"
  And the user enters a valid "<telephone-number>"
  And the user enters a valid "<password>"
  And the user enters a valid "<bank-verification-number>"
  And the user enters a valid "<date-of-birth>"
  And the user taps on the continue button
  Then the user should be redirected to the login screen
  Examples:
    | full-name       | email-address     | telephone-number | password | bank-verification-number | date-of-birth |
    | Blackcopper QA" | qa@blackcopper.io | 0912345678       | Test123@ | 2221234566               | 01-01-1990"   |

Scenario: User sees error messages when no credential is provided
  When the user doesn't enter any credentials
  And the user taps on the continue button
  Then the user should see specific error messages for each invalid field

Scenario: User taps on the "Login" link
  When the user is on the sign-up screen
  And the user taps on the "Login" link
  Then the user should be redirected to the login screen

Scenario: User sees error messages when a required credential is not provided
  When the user doesn't enter a required credential
  And the user taps on the continue button
  Then the user should see specific error messages for the invalid field

Scenario: User sees error messages when trying to register with an already registered email-address
  When an already registered is entered
  And the user taps on the continue button
  Then the user should see an error notification

Scenario: User is prompted to set a password that meets the minimum length and complexity requirements (e.g. at least 8 characters, including a number, a special character, and a mix of upper and lowercase letters)
  When the user enters a password that doesn't meet the minimum requirements
  Then the user should see an error message
  When the user enters a password that meets the minimum requirements
  Then the user should no longer see the error message

Scenario:  User can mask/unmask the password entered
  When the user enters a valid password
  And the user taps the eye icon to mask the password
  Then the password should be masked
  And the user taps the eye icon to umask the password
  Then the password should be unmasked
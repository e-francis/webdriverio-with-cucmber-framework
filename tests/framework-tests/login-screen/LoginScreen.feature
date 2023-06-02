Feature: Login Screen
  As a user
  I want to be able to log in to the app
  So that I can access my account and its features

Scenario:  User can tap the back button
  Given the user is on the login screen
  When the user taps the back button
  Then the user should be redirected to the landing screen

Scenario:  User taps on the "Sign Up" link
  Given the user is on the login screen
  When the user taps on the Sign Up link
  Then the user should be redirected to the sign-up screen

Scenario Outline: User enters valid credentials and logs in successfully
  Given the user is on the login screen
  And the user enters a valid "<email-address>"
  And the user enters a valid "<password>"
  And the user taps on the login button
  Then the user should be redirected to the dashboard screen
  Examples:
    | email-address     | password |
    | qa@blackcopper.io | Test123@ |

Scenario: User can mask/unmask the password entered
  When the user taps the eye icon to mask the password
  Then the password should be masked
  And the user taps the eye icon to umask the password
  Then the password should be unmasked

Scenario Outline: User enters invalid credentials and sees an error message
  When the user enters an invalid "<invalid-email-address>"
  And the user enters an invalid "<password>"
  And the user taps on the login button
  Then the user should see an error message indicating invalid credentials
  Examples:
    | invalid-email-address | password |
    | test@blackcopper.io   | test12   |

Scenario Outline: User enters an invalid login credentials is is prevented from logging in for x amount of minutes
  When the user enters an invalid <valid-email-address>
  And the user enters an invalid <invalid-password>
  And the user taps on the login button more three times to login
  Then the user should see an error message indicating they have been prevented from logging in for x amount of minutes
  Examples:
    | valid-email-address | invalid-password |
    | qa@blackcopper.io   | test12           |

Scenario: User taps on the "Forgot Password?" link
  Given the user is on the login screen
  When the user taps on the "Forgot Password?" link
  Then the user should be redirected to the "Forgot Password" screen

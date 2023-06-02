Feature: Framework tests for App Landing Screen
  As a user
  I want to see a landing screen with login and sign up buttons
  So that I can easily navigate and access the sign up and login features

Scenario: User taps on the login button
  Given the user is on the landing screen
  When the user taps on the login button
  Then the user should be redirected to the login screen

Scenario: User taps on the sign up button
  Given the user is on the landing screen
  When the user taps on the sign up button
  Then the user should be redirected to the sign up screen
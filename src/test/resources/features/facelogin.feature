@smoketest
Feature: Facebook login

  Background: user is on the facebook login page
    Given user is on the facebook login page

    Scenario Outline: testing the login functionality
      And user enters email in  the email box "<email>"
      And user enters password in the password box "<password>"
      Then user clicks on the login button
      Then user verifies the login is successful or not

      Examples: test data for the facebook login
        |  email              | password  |
        |bdddemo12345@gmail.com | face12345 |

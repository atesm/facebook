$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/facelogin.feature");
formatter.feature({
  "name": "Facebook login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "testing the login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters email in  the email box \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password in the password box \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies the login is successful or not",
  "keyword": "Then "
});
formatter.examples({
  "name": "test data for the facebook login",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "bdddemo12345@gmail.com",
        "face12345"
      ]
    }
  ]
});
formatter.background({
  "name": "user is on the facebook login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Facebook_Stepdefinitions.user_is_on_the_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "testing the login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user enters email in  the email box \"bdddemo12345@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Facebook_Stepdefinitions.user_enters_email_in_the_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password in the password box \"face12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Facebook_Stepdefinitions.user_enters_password_in_the_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Facebook_Stepdefinitions.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the login is successful or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.Facebook_Stepdefinitions.user_verifies_the_login_is_successful_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
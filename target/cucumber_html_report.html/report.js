$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the Omayo application",
  "description": "",
  "id": "login-to-the-omayo-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \u003cusername\u003e and Password \u003cpassword\u003e into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get logged in based on expected \u003cloginstatus\u003e status",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginstatus"
      ],
      "line": 10,
      "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "arun",
        "pswd1",
        "failure"
      ],
      "line": 11,
      "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "SeleniumByArun",
        "Test143$",
        "success"
      ],
      "line": 12,
      "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "motoori",
        "pswd2",
        "failure"
      ],
      "line": 13,
      "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3112650400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as arun and Password pswd1 into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get logged in based on expected failure status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_visit_the_omayo_website()"
});
formatter.result({
  "duration": 5313248300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arun",
      "offset": 20
    },
    {
      "val": "pswd1",
      "offset": 38
    }
  ],
  "location": "Login.i_enter_username_and_password_into_the_fields(String,String)"
});
formatter.result({
  "duration": 387448800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_login_button()"
});
formatter.result({
  "duration": 131162500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 41
    }
  ],
  "location": "Login.i_should_get_logged_in_based_on_expected_status(String)"
});
formatter.result({
  "duration": 20685700,
  "status": "passed"
});
formatter.after({
  "duration": 1928296100,
  "status": "passed"
});
formatter.before({
  "duration": 2283452300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as SeleniumByArun and Password Test143$ into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get logged in based on expected success status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_visit_the_omayo_website()"
});
formatter.result({
  "duration": 5274605100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumByArun",
      "offset": 20
    },
    {
      "val": "Test143$",
      "offset": 48
    }
  ],
  "location": "Login.i_enter_username_and_password_into_the_fields(String,String)"
});
formatter.result({
  "duration": 372883700,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_login_button()"
});
formatter.result({
  "duration": 175975000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 41
    }
  ],
  "location": "Login.i_should_get_logged_in_based_on_expected_status(String)"
});
formatter.result({
  "duration": 64326300,
  "status": "passed"
});
formatter.after({
  "duration": 1812955900,
  "status": "passed"
});
formatter.before({
  "duration": 2371296600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as motoori and Password pswd2 into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should get logged in based on expected failure status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_visit_the_omayo_website()"
});
formatter.result({
  "duration": 5431528500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "motoori",
      "offset": 20
    },
    {
      "val": "pswd2",
      "offset": 41
    }
  ],
  "location": "Login.i_enter_username_and_password_into_the_fields(String,String)"
});
formatter.result({
  "duration": 370424100,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_login_button()"
});
formatter.result({
  "duration": 97757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 41
    }
  ],
  "location": "Login.i_should_get_logged_in_based_on_expected_status(String)"
});
formatter.result({
  "duration": 10564900,
  "status": "passed"
});
formatter.after({
  "duration": 1251150100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register into the TutorialsNinja application",
  "description": "",
  "id": "register-into-the-tutorialsninja-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2078249400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Register an account with all valid details",
  "description": "",
  "id": "register-into-the-tutorialsninja-application;register-an-account-with-all-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@All"
    },
    {
      "line": 3,
      "name": "@ValidRegisterDetails"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Register Account page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter all the valid details into the Register Account page fields",
  "rows": [
    {
      "cells": [
        "firstname",
        "Arun"
      ],
      "line": 8
    },
    {
      "cells": [
        "lastname",
        "Motoori"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "amotooricapgemini@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "telephone",
        "1234567890"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "12345"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I need to be taken to Account succes page",
  "keyword": "Then "
});
formatter.match({
  "location": "register.i_visit_the_website()"
});
formatter.result({
  "duration": 2933698600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_navigate_to_register_account_page()"
});
formatter.result({
  "duration": 648577900,
  "status": "passed"
});
formatter.match({
  "location": "register.i_enter_all_the_valid_details_into_the_register_account_page_fields(DataTable)"
});
formatter.result({
  "duration": 1165446600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_select_the_privacy_policy_option()"
});
formatter.result({
  "duration": 128521800,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_continue_button()"
});
formatter.result({
  "duration": 443777800,
  "status": "passed"
});
formatter.match({
  "location": "register.i_need_to_be_taken_to_account_succes_page()"
});
formatter.result({
  "duration": 259756100,
  "status": "passed"
});
formatter.after({
  "duration": 1112277700,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Searching of various categories should be possible along with general search",
  "description": "\r\nIt is good to provide an option to our end users where they can search for the products\r\nbased on their category, rather than only searching a product.This will increase our \r\nbusiness and make end users happy.",
  "id": "searching-of-various-categories-should-be-possible-along-with-general-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 163200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for the products under Books category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-general-search;search-for-the-products-under-books-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Search"
    },
    {
      "line": 11,
      "name": "@Books"
    },
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I select Books category from the search dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the Search Results page for Books category is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see the Books hot off the press as page heading",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should not other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.i_select_books_category_from_the_search_dropdown()"
});
formatter.result({
  "duration": 694900,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_icon_button()"
});
formatter.result({
  "duration": 95300,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_search_results_page_for_books_category_is_loaded()"
});
formatter.result({
  "duration": 81600,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_books_hot_off_the_press_as_page_heading()"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_not_other_category_products()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 68200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for the products under Baby category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-general-search;search-for-the-products-under-baby-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Search"
    },
    {
      "line": 20,
      "name": "@Baby"
    },
    {
      "line": 20,
      "name": "@All"
    },
    {
      "line": 20,
      "name": "@Wip"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I select Baby category from the search dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the Search Results page for Baby category is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see the Baby Products as page heading",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should not other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.i_select_baby_category_from_the_search_dropdown()"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_icon_button()"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_search_results_page_for_baby_category_is_loaded()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_baby_products_as_page_heading()"
});
formatter.result({
  "duration": 132100,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_not_other_category_products()"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
});
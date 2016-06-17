Feature: Navigate through the application by the navigation menu
    As an application user
    I want to be able to open various pages
    By click navigation links

    Scenario: Click the main page link in the navigation menu
        Given The "news" page opened
        When I click the "Main page" link
        Then I should see the page with the title "Main"


    Scenario: Click the news page link in the navigation menu
        Given The "main" page opened
        When I click the "News" link
        Then I should see the page with the title "News"



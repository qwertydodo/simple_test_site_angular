Feature: Open application pages
    As an application user
    I want to be able to open various pages
    
    @test
    Scenario: Open the main page
        Given The "main" page opened
        When I am on the opened "main" page
        Then I should see the page with the title "Main"

    Scenario: Open the news page
        Given The "news" page opened
        When I am on the opened "news" page
        Then I should see the page with the title "News"

    Scenario: Open the single news page
        Given The "singleNews" page opened
        When I am on the opened "singleNews" page
        Then I should see the page with the title "Single News"

    Scenario: Open the single news page from the news page
        Given The "news" page opened
        When I click on the news header
        Then I should see the page with the title "Single News"

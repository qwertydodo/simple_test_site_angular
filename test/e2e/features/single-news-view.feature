Feature: View single news
    As an application user
    I want to be able to see the full single news
    And start edit it
    And back to news page

    Background:
        Given The "singleNews" page opened

    Scenario: Open the single news edit form 
        When I am click on the "Edit" button under the single news
        Then I should see the news edit form

    Scenario: Back to the news page 
        When I am click on the "Back" button under the single news
        Then I should see the page with the title "News"


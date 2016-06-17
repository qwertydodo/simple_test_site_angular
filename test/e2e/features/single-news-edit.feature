Feature: View single news
    As an application user
    I want to be able edit the single news
    And back to view the single news page

    Background:
        Given The "singleNews" page opened
        And I am click on the "Edit" button under the single news

    @test
    Scenario: Back to the single news page from the edit single news form
        When I am click on the "Cancel" button under the single news
        Then I should see the page with the title "Single News"

    Scenario: Edit the single news
        When I am fill the news form field with correct data
        And I am click on the "Submit" button under the single news
        Then I should see the page with the title "Single News"
        And news data changed
Feature: View single news
    As an application user
    I want to be able edit the single news
    And back to view the single news page

    Background:
        Given The "singleNews" page opened
        And I click on the "Edit" button under the single news

    Scenario: Back to the single news page from the edit single news form
        When I click on the "Cancel" button under the single news
        Then I should see the page with the title "Single News"

    Scenario: Edit the single news and submit
        When I fill the single news form fields with the correct data
        And I click on the "Submit" button under the single news
        Then I should see the page with the title "Single News"
        And The single news data was changed

    Scenario Outline: Submit news without data in the required input fields
        When I delete data from "<field>"
        Then The single news submit button should be disabled
        And The error message under the "<field>" should be displayed

        Examples: 
            | field    |
            | header   |
            | text     |
            | prevtext |
            | dt       |

    Scenario Outline: Submit news without data in the required select fields
        When I change data in select "<field>" to "Select value..."
        Then The single news submit button should be disabled
        And The error message under the "<field>" should be displayed

        Examples: 
            | field    |
            | category |
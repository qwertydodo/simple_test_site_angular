Feature: Order/filter news on the news page
    As an application user
    I want to be able to filter news by category
    And order by date
    By change values in selects

    Background:
        Given The "news" page opened

    Scenario: Change the filter value in the select filter
        When I change the select filter on news page
        Then I should see the news only with selected category

    Scenario: Change the order value in the select order
        When I change the select order on "Ascending Date" news page
        Then I should see the ordered news by "ascending" date

    Scenario: Change the order value in the select order
        When I change the select order on "Descending Date" news page
        Then I should see the ordered news by "descending" date


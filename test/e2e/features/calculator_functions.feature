Feature: Calculator operations
    In order to perform calculations
    As a user of the calculator
    I want to be able make various calculator operations

    Scenario: Summarize two numbers
        Given the calculator is cleared
        When I add 5 and 6
        Then the result should be 11


 Feature: Exchanges get coins
    
    @focus
    Scenario: Fetch data for exchanges using API and verify it
        Given I want to fetch exchange data for coins
        Then Verify response status code is 200
        And Verify response details for coins 
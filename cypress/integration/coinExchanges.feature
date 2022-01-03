 Feature: Get details of BitTrue, Binance, Whitebit exchanges
    
    @focus
    Scenario: Fetch data for exchanges using API and verify it
        Given I want to fetch exchange data for coins
        When Verifying response status code is 200
        Then Verify the response name, # of markets, volume and rank
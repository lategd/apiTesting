Feature: Get the first seen price for Doge, Solana, Bitcoin Cash
    
    @focus
    Scenario: Output the name,type, rank and first seen price for Doge, Solana, Bitcoin Cash
        Given I want to fetch data for Doge, Solana, Bitcoin Cash
        When I Verify response status code is 200
        Then Verify the coins type, rank and first seen price
Feature: Get 7 day history of Bitcoin, Ethereum and Cardano
    
    @focus
    Scenario: Order coin history from oldest to newest based on 7 day parameter
        Given I want to fetch coin history for Bitcoin, Ethereum and Cardano
        When Verifying response status code is 200
        Then Verify the coins history from 7 days ago to newest 
/// <reference types="cypress" />

context('Network Requests', () => {

    // Manage HTTP requests in your app
    var myCoins = [];

    Given('I want to fetch data for Doge, Solana, Bitcoin Cash', () => {
        cy.request({
          method: 'GET',
          url: '/coins',
          headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '03628d806emsh75f6b51b86a2c52p14f479jsneac339810638'  
          },
          failOnStatusCode:false
        }).as('get_firstSeen')
    
    
      When('Verifying response status code is 200', (statusCode) => {
            cy.get('@get_firstSeen').should((response)=> {
            expect(response.status).to.eq(200);
              
           })
          });
        
        
      Then('Verify the coins type, rank and first seen price', () => {
           cy.get('@get_firstSeen').then((resp) => {

            filterCoins(resp);
            myCoins.sort(compare);
            myCoins.forEach(coin => {
                coin.firstSeen = new Date(coin.firstSeen);
                cy.log("Name: " + coin.name + " - Type: " + coin.type + " - Rank: " + coin.rank + " - 1st Seen Price: " + coin.firstSeen)
            })
        });
    });

    const filterCoins = resp => {
        resp.body.data.coins.forEach(coin => {
            if (coin.name == "Dogecoin" || coin.name == "Solana" || coin.name == "Bitcoin Cash") {
                myCoins.push(coin);
            }
        });
    };


    function compare(a, b) {
        if (a.volume > b.volume) {
            return -1;
        }
        if (a.volume < b.volume) {
            return 1;
        }
        return 0;
    }
})
})
context('Network Requests', () => {

    // Manage HTTP requests in your app
    var myCoins = [];

    Given('I want to fetch coin history for Bitcoin, Ethereum and Cardano', () => {
        cy.request({
          method: 'GET',
          url: '/coins',
          headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '03628d806emsh75f6b51b86a2c52p14f479jsneac339810638'  
          },
          failOnStatusCode:false
        }).as('get_coins')
    
    
      When('Verifying response status code is 200', (statusCode) => {
            cy.get('@get_coins').should((response)=> {
            expect(response.status).to.eq(200);
              
           })
          });

     Then('Verify the coins history from 7 days ago to the newest', () => {
        cy.get('@get_coins').then((resp) => {
           
            filterCoins(resp);
            myCoins.forEach(coin => {
                coin.listedAt = new Date(coin.listedAt);
                coin.history[6] = formatter.format(coin.history[6])
                coin.price = formatter.format(coin.price)

                cy.log("Name: " + coin.name + " - Price 7 days ago: " + coin.history[6])
                cy.log("Name: " + coin.name + " - Current Price: " + coin.price + " - Listed at: " + coin.listedAt)
            })
        });
    });

    const filterCoins = resp => {
        resp.body.data.coins.forEach(coin => {
            if (coin.name == "Bitcoin" || coin.name == "Ethereum" || coin.name == "Cardano") {
                myCoins.push(coin);
            }
        });
    };

    var formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });
})
})
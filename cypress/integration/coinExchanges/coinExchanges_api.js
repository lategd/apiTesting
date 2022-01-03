context('Network Requests', () => {

  // Manage HTTP requests in your app
  var myExchanges = [];

Given('I want to fetch exchange data for coins', () => {
    cy.request({
      method: 'GET',
      url: '/exchanges',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '03628d806emsh75f6b51b86a2c52p14f479jsneac339810638'  
      },
      failOnStatusCode:false
    }).as('get_exchanges')


  When('Verifying response status code is 200', (statusCode) => {
        cy.get('@get_exchanges').should((response)=> {
        expect(response.status).to.eq(200);
          
       })
      });


      Then('Verify the response name, # of markets, volume and rank', () => {
       // cy.get('@get_exchanges').should((response)=> {
        cy.get('@get_exchanges').then((resp => {

          filterExchanges(resp);
          myExchanges.sort(compare);
          myExchanges.forEach(exchange => {
              cy.log("Exchange Name: " + exchange.name + " - # of Markets: " + exchange.numberOfMarkets + " - Volume: " + exchange.volume + " - Rank: " + exchange.rank)
          });

      }));
  });

  const filterExchanges = resp => {
    resp.body.data.exchanges.forEach(exchange => {
        if (exchange.name == "Bitrue" || exchange.name == "Binance" || exchange.name == "WhiteBIT") {
            myExchanges.push(exchange);
        }
    });
};

function compare(a, b) {
    if (a.volume < b.volume) {
        return -1;
    }
    if (a.volume > b.volume) {
        return 1;
    }
    return 0;
}
})
})         
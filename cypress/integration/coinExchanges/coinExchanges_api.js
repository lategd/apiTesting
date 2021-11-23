
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


  Then('Verify response status code is 200', (statusCode) => {
        cy.get('@get_exchanges').should((response)=> {
        expect(response.status).to.eq(200);
          
       })
      });


      And('Verify response details for coins', () => {
       // cy.get('@get_exchanges').should((response)=> {
        cy.get('@get_exchanges').then((response => {
        
         cy.log(response.body)
            
           // expect(response.body).to.have.property('data');
         
         expect(response.body).to.nested.include(
         {'data.exchanges[0].name':"Binance",
         'data.exchanges[8].name': "Bitrue",
        'data.exchanges[21].name':"WhiteBIT"}

         // expect(response.body).to.have.nested.property('data.exchanges[7].name',"BitTrue");
         // expect(response.body).to.have.nested.property('data.exchanges[22].name',"Whitebit");

        
             // var coinExchangeArray = []; 
              //var coinExchangeObject = new Object();
              //coinExchangeArray[0] = coinExchangeObject;

             // for (var index in response.body) {
             // coinExchangeArray.push(response.body);
             // }
    
              //cy.log(coinExchangeArray);
              //expect(coinExchangeArray).to.include("Binance");

              //let data = response;
             // Object.keys(coinExchangeArray).forEach(id => {
             // let Exchanges = coinExchangeArray[0];
             // cy.log(Exchanges.name, Exchanges.volume);
          
            //  })
         )    
         }
        )
        )}
      )}
)
 
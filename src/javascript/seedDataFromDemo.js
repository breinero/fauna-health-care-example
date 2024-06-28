import { Client, fql, FaunaError } from "fauna";


// configure your client
// key name DemoDevDatabase
const demoClient = new Client({
  secret: 'fnAFa6o25iAAQaMslVCLmV_dnqvw8cPH7l5_O75M'
  });

/*
const humanaClient = new Client({
    secret: 'fnAFa6o25iAAQaMslVCLmV_dnqvw8cPH7l5_O75M'
});
*/
  
try {
  // build queries using the `fql` function

  const getCustomer = fql`Customer.all())`;
   
  
  // eget all products
  const iterator = await demoClient.paginate(getCustomer);
  for await (const customers of iterator) {
      for (const customer of customers ) {
        console.log( customer );
        //const patientString = ql`Patient.create( ${customer})`;
        //humanaClient.query( patientString )
     }
  }
  
  //const response = await client.query( quey);
  //console.log( response );

} catch (error) {

  if (error instanceof FaunaError) {
    // handle errors
    console.log( error );
  }
} finally {
  // clean up any remaining resources
  client.close();
}
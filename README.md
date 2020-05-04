# Instructions 

to use snippets from this repo, here we go:

* there is a script.js file located at `checkout-react/public` folder use it in public folder in your react application

Note: in script.js file a method called `Frames.init()` it takes the public key created from checkoutjs developer dashboard
      so do not forget to change it
      

* Use react component in app.js file and feel free to change form styles
* In backend side in `/index.js` file there is a route called `/get-user-data` which submit the data came from the form response and return the user data who made the transaction.
This is like validating with checkoutjs servers to check data submited from the form to checkoutjs servers directly and once reponse come I send as a backend this repsonse paramters 
to checkoutjs servers to find if this transaction was successfully made or not.

* Clarification steps:
  1- data send from checkoutjs form then there will be `formResponse` came in `script.js` file
  2- inside `script.js` file I call my backedn route `/get-user-data` with `formResponse`
  3- backend return response to the react component whatever failed transaction or success one.
  
Note: 
   keep in minde the public and private keys to be used instead of what are here in your backend.
   The frontend only initialize the checkoutjs form with the public key; so never to use the private key there.
  

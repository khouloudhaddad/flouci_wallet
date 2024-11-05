# Flouci Wallet
Setup Payments with FLOUCI wallet, ReactJs And NodeJs

## Instructions

- express --no-view flouci_wallet
- npm i && npm start
- npm i nodemon -D
- npm i dotenv 
- npm i axios

## Run server and test payment
- npm run server
- Test API (http://localhost:5000/api/payment) on Postman or thunderclient vs code extension,...
<br/><br/>
<img src="https://i.ibb.co/zss7bnx/thunderclient-flouci.png" width="100%" alt="Thunder client">
<br/><br/>
- [FLOUCI API Documentation](https://flouci.stoplight.io/docs/flouci-payment-apis/6c9b5ad7358c9-fr-flouci-payment-api)

## Run both client and server simultaneously
- npm i concurrently --save
- [NPM CONCURRENTLY DOC](https://www.npmjs.com/package/concurrently)
- Run 
```
npm run dev
```

## Client changes
- Add bootstrap CSS CDN inside public/index.html
- Add react dom router: 
```
npm i react-router-dom
```
- Install axios on client
```
npm i axios
```



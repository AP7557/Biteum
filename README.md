# [Biteum](https://biteum.herokuapp.com/)
Biteum is an app that allows a user to see the Bid and Ask of Bitcoin and Ethereum for two different exchanges (Gemini and CoinbasePro).

## Requirements and RUN
1. `Run command in terminal (in your project directory): npm i`
2. `Run command in terminal (in your project directory): npm start`
3. `Open another terminal and Run command (in your project directory): npm run server`

## Question and Answer
1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
- No

2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
- I don't really think any part of it is over-designed, expect for it being mobile responsive and that when you click one of the price it will take you to the exchange's website

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
- I would find a proper API key, that I can use to call multiple times to update the orderbook as right now it is only updating every 65 seconds

4. What are some other enhancements you would have made, if you had more time to do this implementation
- I would have added a chart for that ticker after finding a API that can provide the chart or even make one of my own using the market price of the ticker with the API call

## APIs used
- [Shrimpy](https://developers.shrimpy.io/docs/#introduction) - For the orderbook of the crypto

## Framework used
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## Libraries used
- [Axios](https://www.npmjs.com/package/axios) - For calling API between client, server and host
- [Express](https://www.npmjs.com/package/express) - For server

# [Biteum](https://biteum.herokuapp.com/)
Biteum is an app that allows a user to see the Bid and Ask of Bitcoin and Ethereum for two different exchanges (Gemini and CoinbasePro).

## Requirements and RUN
1. `Run command in terminal (in your project directory): npm i`
2. `Run command in terminal (in your project directory): npm run server`
3. `Open another terminal and Run command (in your project directory): npm start`

## Question and Answer
1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
- For the logo of the ticker, I made it so that it is a default size so when someone views it on a smaller screen, the Ethereum logo looks fat, as for the Bitcoin logo, no matter what size of screen you look at, the sides get cut off. At a certain width of the screen, the cards show as columns instead of rows, at that point, they both are touching each other and the screen. Not doing a proper eslinting.

2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
- I think the over-designed aspect is its responsive design, as well as show a loading circle until the data is available, and that you can click the price, it will go to the exchange's website

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
- Theoretically, if the users were on different IP it would be scaleable, but for it to work no matter what the case, I would need to find an API that can handle that amount of requests all at once since as of right now the API has a rate limit of 10/minute. Or even better solution would be to call the third-party API every 65 seconds  on the server-side and store the data in a variable so, every time users join the site, it will request for the data from that variable and re-request every 10 seconds so it's up-to-date with the price from the third-party API

4. What are some other enhancements you would have made, if you had more time to do this implementation
-I would have implemented the second part from number 3, where the server doesn't wait for the client to call the third-party API, it takes care of itself. Also maybe put in the charts of the tickers with the market price so users can see the trend.

## APIs used
- [Shrimpy](https://developers.shrimpy.io/docs/#introduction) - For the orderbook of the crypto

## Framework used
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## Libraries used
- [Axios](https://www.npmjs.com/package/axios) - For calling API between client, server and host
- [Express](https://www.npmjs.com/package/express) - For server

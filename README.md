# Vizh-react assessment task

## Used tech:
- React
- TypeScript
- Vite
- tailwind
- react-router-dom

## About the project:
User is going to see a list of NFTs which he/she can bid on. By clicking on each card item, User will see the details of the selected NFT and can place a new bid.
The ``Submit Purchase`` button is just going to show a loading for two seconds and then show a success message for bid placement and the redirect to home.

## more info:
created Navbar and Footer components and placed them outside of routes to share them through out the project.

I created a mock data file (array of objects) to simulate a json data iterated over it and rendered the nft card in desired format.

used react useState hook to conditionaly render modal and simulate the submitting bid proccess

used useNagivate hook to dynamically redirect to the home page after a successful bid.

## screenshot
![layout](/assessPrj.jpg)
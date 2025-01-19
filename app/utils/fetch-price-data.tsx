const priceFeedID = await agent.getPythPriceFeedID("SOL");

const price = await agent.getPythPrice(priceFeedID);

console.log("Price of SOL/USD:", price);
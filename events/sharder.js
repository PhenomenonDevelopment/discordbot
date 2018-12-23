const Sharder = require('eris-sharder').Master;
const sharder = new Sharder(`${discord_token}`, "./bot.js", {
  stats: false,
  debug: false,
  guildsPerShard: "1500",
  name: "Phenomenon",
  webhooks: {
    shard: {
      id: "526426368834011156",
      token: "Ia3vDF5Mm_ijVhW2Cu4uTPfiaTIaEaegtpDXMANgrk9jx4enipArQvpH0Z8kLgpo30Ky"
    },
     cluster: {
      id: "526426368834011156",
      token: "Ia3vDF5Mm_ijVhW2Cu4uTPfiaTIaEaegtpDXMANgrk9jx4enipArQvpH0Z8kLgpo30Ky"
    }
  },
  clientOptions: {
      messageLimit: 150,
      defaultImageFormat: "png"
  }
});

sharder.on("stats", stats => {
  console.log(stats);
});
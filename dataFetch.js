const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

fetch(
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
)
  .then((res) => res.json())
  .then((pokemon) => {
    const jsonData = JSON.stringify(pokemon);
    const writeStream = fs.createWriteStream(
      path.join(__dirname, "./pokemon.json")
    );
    writeStream.write(jsonData);

    writeStream.on("finish", () => {
      console.log("Pokemon Data was fetched successfully");
    });

    writeStream.end();
  })
  .catch((err) => {
    console.error("Error fetchind data:", err);
  });

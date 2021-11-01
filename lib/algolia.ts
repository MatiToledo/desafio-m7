import "dotenv/config";
import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex("pets");
console.log(process.env.ALGOLIA_APP_ID);
console.log(process.env.ALGOLIA_API_KEY);

export { index, client };

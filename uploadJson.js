import { Submarine } from "pinata-submarine";
import { } from "dotenv/config"
const submarine = new Submarine(`${process.env.SUBMARINE_KEY}`, `${process.env.GATEWAY}`)

const content = {
  "name": "pinnie",
  "description": "This is a pinnie NFT",
  "image": "ipfs://CID"
}
const res = await submarine.uploadJson(content, "testJson.json")
console.log(res)

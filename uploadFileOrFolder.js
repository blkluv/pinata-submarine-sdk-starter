import { Submarine } from "pinata-submarine"
import { } from "dotenv/config"
const submarine = new Submarine(`${process.env.SUBMARINE_KEY}`, `${process.env.GATEWAY}`)

const upload = await submarine.uploadFileOrFolder("./assets/Pinnie.png", "Pinnie", 1)
const content = upload.items[0]
const cid = content.cid
console.log(upload.items)
console.log(cid)

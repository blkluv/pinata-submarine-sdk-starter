import { Submarine } from "pinata-submarine"
import { } from "dotenv/config"
const submarine = new Submarine(`${process.env.SUBMARINE_KEY}`, `${process.env.GATEWAY}`)

const cid = "CID_GOES_HERE"
const foundContent = await submarine.getSubmarinedContentByCid(cid)
const folder = foundContent.items[0]
const folderId = folder.id
const timeInSeconds = 2629746

const link = await submarine.generateAccessLink(timeInSeconds, folderId, cid)
console.log(link)

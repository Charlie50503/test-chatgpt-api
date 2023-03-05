// 需要使用 fetch 
// 所以要求 node v 18 以上
// 或是安裝 node-fetch 套件
import * as dotenv from 'dotenv' 
dotenv.config({ path: './settings.env' })
import fetch from 'node-fetch'
import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({ apiKey: process.env.chatgpt_token,fetch:fetch })

api.sendMessage('What is OpenAI?').then((res)=>{
  console.log(res.text)
})
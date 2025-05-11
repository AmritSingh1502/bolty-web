require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";
import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import  express  from "express";
import { TextBlock } from "@anthropic-ai/sdk/resources/messages";
import fs from "fs";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { basePrompt as reactBasePrompt } from "./defaults/react";


const CLAUDE_API = process.env.CLAUDE_API_KEY;


// by default it use ANTHROPIC_API_KEY
const anthropic = new Anthropic();
const app = express();
app.use(express.json())


app.post("/template", async (req, res) => {
    const prompt = req.body.prompt;

    const response = await anthropic.messages.create({
          messages: [{role: 'user', content: prompt }],
          model: 'claude-3-7-sonnet-20250219',
          max_tokens: 200,
          system: "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra." 
      })

      const answer = (response.content[0] as TextBlock).text; // react or node

      if(answer  == "react"){
        res.json({
            prompts: [BASE_PROMPT, `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n - .gitignore\n - package-lock.json\n`],
            uiPrompts:[reactBasePrompt]
        })
        return;
    }

    if(answer == "node"){
        res.json({
            prompts: [nodeBasePrompt],
            uiPrompts:[nodeBasePrompt]
        })
        return;
    }
        res.status(403).json({message:"you cant access this."})
        return;
    
})

//streaming
// async function main() {
//       anthropic.messages.stream({
//         messages: [{role: 'user', content: "Hello"}],
//         model: 'claude-3-7-sonnet-20250219',
//         max_tokens: 1024,
//         system: getSystemPrompt()
//     }).on('text', (text) => {
//         console.log(text);
//     });

// }   

// main();


app.listen(3000);
 
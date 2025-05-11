require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";

const CLAUDE_API = process.env.CLAUDE_API_KEY;

console.log("amrit hi");

// by default it use ANTHROPIC_API_KEY
const anthropic = new Anthropic();

//streaming
async function main() {
      anthropic.messages.stream({
        messages: [{role: 'user', content: "Hello"}],
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 1024,
    }).on('text', (text) => {
        console.log(text);
    });
}

main();
 
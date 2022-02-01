// import { prototype } from "marked/src/Tokenizer";
import React, {useState} from "react";
import Preview from "../Preview/preview";
import './editor.css'


const initialMarkdown = `
# Greetings Earthlings! 
## Welcome to my markdown previewer

[freeCodeCamp](https://www.freecodecamp.org/)

Front End Libraries Projects
- Random Quote Machine
- Markdown Previewer
- Drum Machine
- Javascript Calculator
- Pomodoro Clock

this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> example of blockquote

Inline \`code\`

\`\`\`
// code block

function sum (x, y) {
  return x + y;
}
\`\`\`

![Random Animals](https://loremflickr.com/320/240)
`;


 export const Editor = () => {
    const [text, setText] = useState(initialMarkdown)

    const handleChange = (event) => {
      const {value} = event.target;
     setText(value)
    }
    return (
        <div className="main">
            <textarea id="editor" onChange={handleChange} value={text}>
        
            </textarea>
        <div>
            <Preview text ={text}
            />
        </div>
        </div>
        )
    }




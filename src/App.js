import React,{useState} from "react";
import Footer from './Components/Footer/footer'


import "./App.css";

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

const App = () => {
  

  const [text, setText] = useState(initialMarkdown)

  const handleChange = (event) => {
    const {value} = event.target;
   setText(value)
  }
  
    return (
      <div className="markdown-app">
        <h1> &mdash;Markdown Previewer&mdash;</h1>
        <main className="main-section">
          <h3>Input text to be parsed to Markdown here</h3>

          <Editor handleChange={handleChange} markdown={markdown} />

          <Preview markdown={markdown} />
        </main>

        <Footer />
      </div>
    );
  }

export default App;

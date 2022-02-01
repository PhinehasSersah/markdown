import React  from "react";
import Footer from './Components/Footer/footer'
import { Editor } from "./Components/Editor/editor";
import "./App.css";


const App = () => {
  
    return (
      <div className="markdown-app">
        <div className="content">
        <h1> &mdash;Markdown Previewer&mdash;</h1>
        <main className="main-section">
          <h3>Input text to be parsed to Markdown here</h3>
          <Editor/>
        </main>
        <Footer />
        </div>
      </div>
    );
  }

export default App;

// import { prototype } from "marked/src/Tokenizer";
import React from "react";



 export const Editor = ({markdown, onChange}) => {
    
    return (
        <div>
            <textarea id="editor" value={markdown}  onChange={onChange}>
        
            </textarea>
        </div>
        )
    }




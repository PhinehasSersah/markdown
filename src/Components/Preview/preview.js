import React from 'react';
import ReactMarkdown from 'react-markdown';
import './preview.css'
export const Preview = ({text}) => {

  return (
    <div id='preview'>
      <div className='info'>
        <ReactMarkdown children={text} />
        </div>
      </div>
    
  );
};

export default Preview;
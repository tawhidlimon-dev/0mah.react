import React from 'react';

const Paragraph = ({ParaStyle,text}) => {
  return (
    <>
    <p className={ParaStyle}>{text}</p>
    </>
      
    
  )
}

export default Paragraph

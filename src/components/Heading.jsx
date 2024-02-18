import React from 'react';

const Heading = ({headingStyle,title}) => {
  
  return (
   <>
   <h1 className={headingStyle}>{title}</h1>
   </>
  )
}

export default Heading

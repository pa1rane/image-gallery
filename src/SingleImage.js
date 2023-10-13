import React from 'react';

const SingleImage = ({image}) => {
    
  return (
    
    <div>
        {image !== "" && 
        <div style={{display:"flex", flexDirection:"column", ustifyContent:"center", alignItems:"center"}}>
      <h3
      style={{textAlign:"center"}}
      >Selected Image</h3>
     <img src={image.img} alt={image.id} height="250px" width="550px"
     style={{display:"flex"}}/>
     </div>
  }</div>
  )
}

export default SingleImage

import React, {useState} from 'react';
import Photos from "./photos.json";
import SingleImage from './SingleImage';
 
const images = Photos.data;

const App = () => {
 
  const [selectImg, setSelectImg] = useState("");
  const [hoveredImgId, setHoveredImgId] = useState(null);

  const handleClick = (id) => {
    const img = images.find((image) => (
      image.id === id
    ))
    setSelectImg(img)
  }
  
  return (
    <div
    style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h2
      style={{textAlign:"center"}}
      >Image Gallery</h2>
      <p
      style={{textAlign:"center", textDecoration: "underline"}}
      >Click On Any Image</p>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
  {images.map((image) => (
    <img
      key={image.id}
      src={image.img}
      alt={image.id}
      height={hoveredImgId === image.id ? '180px' : '150px'} // Increase size on hover
      width={hoveredImgId === image.id ? '180px' : '150px'}
      style={{
        padding: '20px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onClick={() => handleClick(image.id)}
      onMouseEnter={() => setHoveredImgId(image.id)}
      onMouseLeave={() => setHoveredImgId(null)}
    />
  ))}
</div>
      <SingleImage image={selectImg}/>
    </div>
  )
}

export default App

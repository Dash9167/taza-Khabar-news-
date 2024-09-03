import React from "react";

const News = ({title,description,src,imgsrc}) => {
  return (
   
     <>
     {
      imgsrc?<div className="cards">
      <div className="img-div">
          <img src={imgsrc} alt="" />
      </div>
     <div className="card-item">
     <h3>{title.length>50 ? title.slice(0,50)+"...":title}</h3>
      <p>{description.length>100 ? description.slice(0,100)+"...": description}</p>
      <center><a href={src}><button>Read More</button></a></center>
     </div>
    </div> 
    :" "
     }
     </>

  );
};
export default News;
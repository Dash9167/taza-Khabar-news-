import React, { useEffect, useState } from "react";
import News from "./new-item"

const Home = () => {
  const [mynews,setmynews]=useState([]);
  const fetchdata = async () => {
    let url =
      "https://newsapi.org/v2/everything?q=Apple&from=2024-08-21&sortBy=popularitycountry=us&apiKey=2c28e5bebc3f4fd8aefa07ab84c8da5f";
    let response = await fetch(url);
    let data = await response.json();
   setmynews(data.articles);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
<>

    <div className="home">
    <div className="home-title">
      <h2>
        AJJ ki  <span>Taza Khabar</span>
      </h2>
    </div>
    <div className="container">
    {
    mynews.map((ele)=>{
      return <News key={ele} description={ele.description} title={ele.title} src={ele.url} imgsrc={ele.urlToImage}/>
    })
   }
       </div>
  </div>
</>
   
  );
};
export default Home;

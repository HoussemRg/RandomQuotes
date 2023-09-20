import React, {  useState } from 'react';
import Axios from "axios";
import './App.css';

function App() {
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  const generateQuote=():void=>{
    try{
      Axios.get("http://api.quotable.io/random").then((res)=>{
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
    }catch{
      console.log("error of fetching data");
    }
  }
  
  return (
    <div className='quotes container'>
      <div className="box">
      <h1 className="title">Quote of the Day</h1>
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
      
      <div className="quotes-footer">
        <div className="icons">
          <div><span className="material-symbols-outlined icon1">volume_up</span></div>
          <div><span className="material-symbols-outlined icon2">note</span></div>
          <div><i className="fab fa-twitter icon3"></i></div>
        </div>
        <button className="btn btn-primary generate" onClick={generateQuote}>Generate</button>
      </div>
    </div>
    </div>
  );
}

export default App;

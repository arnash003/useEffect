import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial () {
  const [data, setData] = useState("");


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data[0].email)
      console.log("API WAS CALLED")
    });
  }, []);

  return (
    <div>
      <h1> Hello World {data}</h1>
      </div>
  )
}
  export default EffectTutorial;

  // Hello world will be called everytime the state will be changed 
  //Fetch Data from an Api
  //Axios call from An Api
  //Display the data on the screen using the useeffect hook
  //The api will be called everytime the page rerenders. 
  //We changed the value of data and now the oage reredners to change the value of data
  //We want the the API call to only be called once. 
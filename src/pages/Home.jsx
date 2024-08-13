import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  width:"80vw",
  height: '50vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'brown',
};
const Home = () => {
    const [items, setitems] = useState([]);
    const [item, setitem] = useState("cake");
    let searchRef = useRef()
    let getRecipe = async()=>{
        // method 1 using js fetch method
        // let res =await fetch("https://api.edamam.com/search?q=chicken&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b" )
        // let data = await res.json();
        // console.log(data)

        let res = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)

        console.log(res.data.hits)
        setitems(res.data.hits)


    }

    const handleSearch = (e)=>{
      e.preventDefault()
      console.log("hello")
      let value = searchRef.current.value
      console.log(value)
      setitem(value)
      searchRef.current.value=""
    }
    useEffect(()=>{
        getRecipe()
    },[item])
  return (
    <div className='pt-2'>
    
 <form className="d-flex col-6 m-auto my-3" >
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search recipe here.." aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className='row m-0 p-0 gap-2 justify-content-center'>
      {
        items.map((ele,index)=>{
            return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to="/single" state={ele} className="btn btn-primary">View recipe </Link>
  </div>
</div>

        })
      }
      </div>
    </div>
  )
}

export default Home

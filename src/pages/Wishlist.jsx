import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Wishlist = () => {
    // let location = useLocation()
    // console.log(location)

    let arr = JSON.parse(localStorage.getItem('favItem')) || []
    console.log(arr)
  return (
    <div>
      <h1>whishlist page</h1>

      <div className='row m-0 p-0 gap-2 justify-content-center'>
      {
        arr.map((ele,index)=>{
            return <div className="card" style={{width: '18rem'}}>
  <img src={ele.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.label}</h5>
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

export default Wishlist

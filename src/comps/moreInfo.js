import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";
// import reactStars from 'react-rating-stars-component';

export default function Years(props) {
  const [Loading, setLoading] = useState(false);
  const [ar, setAr] = useState([]);

  const params = useParams();
  useEffect(() => {
    doApi()
  }, [params])

  const doApi = async () => {
    let url = `https://www.omdbapi.com/?i=${params.id}&apikey=cbbb225d`
    let resp = await axios.get(url);
    let data = await resp.data;
    console.log(data)
    // let sort = sortBy(data, "Title")
    // console.log(sort)
    let tempAr = [];
    for (const prop in data) {
      tempAr.push({ prop, v: data[prop] })
    }
    setAr(data);
    console.log(tempAr)
    setLoading(true);
  }


  const rating = () => {
    let isInt = Number.isInteger(ar.imdbRating);
    let num = Number(ar.imdbRating);
    if (!isInt && (Math.ceil(num) > num)) {
      return Math.floor(num) + 0.5
    }
    else
      return num;

  };

  const star =
    <ReactStars
      count={10}
      size={30}
      activeColor="#ffd700"
      value={rating()}
      a11y={true}
      isHalf={true}
      edit={false}
    />;

  return (
    <div className='container my-4 text-warning text-center '>
      <Link
        className='fs-1 mt-5 p-0 col-1 d-flex justify-content-center '
        to={"/"}
      >
        <RiArrowGoBackFill title='Back' />
      </Link>
      <div className='d-block  justify-content-center mt-2 '>


        {Loading ? <div
          key={ar.imdbID}
          className=' my-5 col-md-6 mx-auto '>
          {ar.Poster !== "N/A" ?
            <img
              className='shadow '
              src={ar.Poster}
              alt="PosterImg"
            />
            : <h1
              className='text-primery d-flex text-align-center'>soory, there is no pic to show ...😕
            </h1>}
          <div className='d-block justify-content-center mt-3' >
            <h1 className='display-2 text-danger fw-bold my-3'>{ar.Title}</h1>
            <br />
            <h3 className='d-flex justify-content-center'>{star}</h3>
            <h3>Rating: {ar.imdbRating}</h3>
            <br />
            <h3>Year: {ar.Year}</h3>
            <h3>Votes: {ar.imdbVotes}</h3>

            <h3>Brief: {ar.Plot}</h3>

          </div>
        </div>

          : <div className='d-md-flex justify-content-center text-warning mt-5 fs-1'>Loading ...<AiOutlineLoading3Quarters role="status" fontSize={5} className='spinner-border text-warning ms-4 mt-3' /></div>}
      </div>


    </div>
  )
}

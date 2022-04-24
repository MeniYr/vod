import axios from 'axios';
import { sortBy } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FcInfo } from 'react-icons/fc'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RiArrowGoBackFill } from 'react-icons/ri'

export default function Years(props) {
    const [Loading, setLoading] = useState(false);
    const [ar, setAr] = useState([]);

    const params = useParams();
    useEffect(() => {
        doApi()
    }, [params])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=${props.getQ}&y=${params.YYYY}&apikey=cbbb225d`
        let resp = await axios.get(url);
        let data = await resp.data.Search;
        console.log(props.getQ)
        let sort = sortBy(data, "Title")
        setAr(sort);
        setLoading(true);
    }

    return (
        <div className='container my-4 text-danger text-center'>
            <Link title='Back' className='fs-1 ms-2 p-0 col-1 d-flex justify-content-center ' to={"/"}><RiArrowGoBackFill /></Link>
            <h1 className='display-1 fw-bold mb-3 underLine'>Vod</h1>
            <div className='row'>
                {Loading ? ar.map(item => {
                    return (
                        <div key={item.imdbID} className='col-md-4 my-5 '>
                            {item.Poster !== "N/A" ?
                                <img
                                    className='shadow'
                                    src={item.Poster}
                                    width="270"
                                    height="325"
                                    alt='PosterImg'
                                /> : <h1
                                    className='text-primery d-flex text-align-center'>
                                    soory, there is no pic to show
                                </h1>}
                            <div className='d-flex position-realative justify-content-center mt-2' >
                                <h3 className='text-warning col-5  '>{item.Title}</h3>
                                <Link
                                    title='More info'
                                    className='fs-1 ms-2 p-0 col-1 d-flex justify-content-center '
                                    to={"/video/" + item.imdbID}
                                >
                                    <FcInfo />
                                </Link>
                            </div>
                        </div>
                    )
                })

                    : <div className='d-flex justify-content-center text-warning mt-5 fs-1'>Loading ...<AiOutlineLoading3Quarters role="status" fontSize={5} className='spinner-border text-warning ms-4 mt-3' /></div>

                }
            </div>


        </div>
    )
}

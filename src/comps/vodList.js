import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FcInfo } from 'react-icons/fc'

export default function VodList(props) {
    // const [Loading, setLoading] = useState(false);
    const { ar } = props;
    return (
        <div className='container my-4 text-danger text-center'>
            <h1 className='display-1 fw-bold mb-3 underLine'>Vod</h1>
            <div className='row'>
                {ar.map(item => {
                    return (

                        <div key={item.imdbID}  className='col-4 my-5 '>
                            {item.Poster!=="N/A"?<img className='shadow 'src={item.Poster} width="270" height="325" alt='PosterImg'/>:<h1 className='text-primery d-flex text-align-center'>soory, there is no pic to show</h1>}
                            <div className='d-flex position-realative justify-content-center mt-2' >
                                <h3 className='text-warning col-5  '>{item.Title}</h3>
                            <Link title='More info' className='fs-1 ms-2 p-0 col-1 d-flex justify-content-center ' to={"/video/"+item.imdbID}><FcInfo/></Link>
                            </div>
                        </div>
                    )
                })

                }
            </div>


        </div>
    )
}

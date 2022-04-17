import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Strip from './comps/strip'
import Footer from './comps/footer'
import MoreInfo from './comps/moreInfo'
import Input from './comps/input'
import Search from './comps/search'
import Years from './comps/years'
import axios from 'axios'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import VodList from './comps/vodList'
import { sortBy } from 'lodash'

export default function AppVod(props) {

    const [year, setYear] = useState(2021);
    const [searchQ, setSrchQ] = useState("bank");
    const [ar, setAr] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        doApi()
    }, [year])

    const doApi = async () => {
        let url = `https://www.omdbapi.com/?s=${searchQ}&y=${year}&apikey=cbbb225d`
        let resp = await axios.get(url);
        let data = await resp.data.Search;
        // console.log(data)
        let sort = sortBy(data, year)
        // console.log(sort)

        setAr(sort);
        setLoading(true);
    }

    return (


        <BrowserRouter>
            <Strip />
            <Input getQ={searchQ} setQ={setSrchQ} setY={setYear}/>
            {Loading ?
                <Routes>
                    <Route index element={<VodList ar={ar} />} />
                    <Route path='/year/:YYYY' element={<Years setY={setYear} getQ={searchQ} />} />
                    <Route path='/search/:searchQ' element={<Search setQ={setSrchQ} getY={year}/>} />
                    <Route path='/video/:id' element={<MoreInfo />} />
                    <Route path='/*' element={<h1 className='text-warning mt-5 text-center '>Page not found (404) ...</h1>} />
                    
                    </Routes>
                     : <div className='d-flex justify-content-center text-warning mt-5 fs-1'>Loading ...<AiOutlineLoading3Quarters role="status" fontSize={5} className='spinner-border text-warning ms-4 mt-3' /></div>
            }
            <Footer />

        </BrowserRouter>
    )
}

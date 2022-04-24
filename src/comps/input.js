import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { FcSearch } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';


export default function Input(props) {
  const srchRef = useRef();
  const selectRef = useRef();
  const [srchQ, setsrchQ] = useState(props.getQ);

  const nav = useNavigate();

  const onChangeSrch = (e) => {
    setsrchQ(e.target.value)
    props.setQ(e.target.value)
  }

  const onChangeSelect = (e) => {
    props.setY(e.target.value)
    nav("/year/" + e.target.value)
  }
  const keySearch = (e) => {
    if (e.key === "Enter")
      nav("/search/" + srchRef.current.value)
  }

  return (

    <div className='container d-md-flex justify-content-md-between mt-5 '>

      <div className='w-md-25 d-flex'>
        {/* <Form.Label className=' text-warning fs-2'htmlFor="inputPassword5">Search</Form.Label> */}
        <Form.Control
          className='fs-3 h-75 bg-dark text-white border-none '
          type="text"
          height={20}
          placeholder={props.getQ}
          ref={srchRef}
          onKeyDown={(e) => { keySearch(e) }}
          onChange={(e) => { onChangeSrch(e) }}
        />

        <Form.Text
          className='fs-3 ms-3 '
          id="passwordHelpBlock"
          muted
        >
          <Link
            className='d-md-flex text-align-center fs-2'
            to={"/search/" + srchQ}
          >
            <FcSearch className='my-md-3' />
          </Link>

        </Form.Text>

      </div>





      <div className='mt-4'>
        <Form.Select className='fs-md-5  bg-dark text-warning'
          aria-label="Default"
          ref={selectRef}
          onChange={(e) => { onChangeSelect(e) }}
        >

          <option  >Select Year ..</option>
          <option >1989</option>
          <option >1995</option>
          <option >2000</option>
          <option >2021</option>
          <option >2022</option>

        </Form.Select>
      </div>
    </div>



  )


}

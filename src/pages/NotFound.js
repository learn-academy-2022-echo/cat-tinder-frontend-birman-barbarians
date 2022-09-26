import React from 'react'
import {Alert} from "reactstrap"

const NotFound = () => {
    return (
        <>
        <div className='Title'>
      <h1 >Something Happened</h1>
        </div>
  <Alert>
    <h4 className="alert-heading">
      This page does not exist
    </h4>
      <p>
        What a Cat-Astrophe!
      </p>
    <hr />
      <p className="mb-0">
        Please go back to home to continue 
      </p>
    <a href="/">Go Back Home!</a>
</Alert>
        <img src = "https://i.redd.it/lel3o4e2hhp11.jpg" alt="Cat with wrench smoking"/>
        </>
    )
}

export default NotFound
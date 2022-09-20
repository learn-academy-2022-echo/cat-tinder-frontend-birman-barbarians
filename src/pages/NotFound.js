import React from 'react'
import {Alert} from "reactstrap"

const NotFound = () => {
    return (
        <>
        <Alert>
  <h4 className="alert-heading">
    Something went wrong!
  </h4>
  <p>
    Uh Oh! This is our message that means something went wrong!
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
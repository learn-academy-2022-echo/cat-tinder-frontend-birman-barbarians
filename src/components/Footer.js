import React from 'react'
import {Card, CardBody, CardTitle, CardText, CardImg} from "reactstrap"
const Footer = () => {
    return (
        <>
        <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">
            Cat Tinder
          </CardTitle>
          <CardText>
            Cat Tinder Project by Jereme Doan and Sam Scott
          </CardText>
          <CardText>
            <small className="text-muted">
            </small>
          </CardText>
        </CardBody>
        <CardImg
          alt="Card image cap"
          bottom
          src="https://images4.alphacoders.com/105/thumb-1920-1056029.jpg"
          style={{
            height: 300
          }}
          width="100%"
          
        />
      </Card>
    </>
    )
}

export default Footer
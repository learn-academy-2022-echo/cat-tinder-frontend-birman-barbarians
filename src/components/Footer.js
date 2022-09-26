import React from 'react'
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
const Footer = () => {
    return (
        <>
        <Card className="Footer">
        <CardBody className="FooterBody"
                style={{position: "fixed",
                left:0,
                bottom:0,
                right:0,
                height: "6%",
                width: "100%"}}
        >
          <CardTitle tag="h5">
          </CardTitle>
          <CardText>
            Cat Tinder Project by Jereme Doan and Sam Scott
          </CardText>
          <CardText>
            <small className="text-muted">
            </small>
          </CardText>
        </CardBody>
      </Card>
    </>
    )
}

export default Footer
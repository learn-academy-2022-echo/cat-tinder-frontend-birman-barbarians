import React from 'react'
import { useParams} from 'react-router-dom'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const CatShow = ({cats, deleteCat}) => {
    const { id } = useParams()
    let currentCat = cats.find((cat) => cat.id === +id)
    console.log(currentCat)

const handleDelete = () => {
    deleteCat(id)
    console.log(currentCat)
}
    return (
        <>
        <h1>CatShow</h1>
        <Card
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src={currentCat.image}
            />
            <CardBody>
                <CardTitle tag="h5">
                        {currentCat.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {currentCat.age}
                </CardSubtitle>
                <CardText>
                    {currentCat.enjoys}
                </CardText>
                <NavLink to={"/catindex"} className="nav-link">
                        <Button className='Button'>
                        Back To Home
                        </Button>
                    </NavLink>
                    <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
                        <Button className='Button'>
                            Edit Cat Profile
                        </Button>
                    </NavLink>
                    <NavLink to={"/catindex"} className="nav-link">
                        <Button className='Button' onClick={handleDelete}>Delete A Cat Profile</Button>
                    </NavLink>
            </CardBody>
        </Card>
        </>
    )
}

export default CatShow
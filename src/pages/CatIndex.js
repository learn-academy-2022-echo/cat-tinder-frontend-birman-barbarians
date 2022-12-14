import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'


const CatIndex = ({cats}) => {
return (
        <main> 
            <div className='Title'>
            <h1>All The Cats</h1>
            </div>
                <div className='IndexColumns'>
                    {cats.map((cat, index) => {
                        return(
                            <>
                                <Card
                                    style={{
                                        width: '18rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <img className='CatProfile'
                                        alt="Sample"
                                        src={cat.image}
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {cat.name}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {cat.age}
                                        </CardSubtitle>
                                        <CardText>
                                            {cat.enjoys}
                                        </CardText>

                                        <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                                            <Button>
                                            Find Out More
                                            </Button>
                                        </NavLink>

                                    </CardBody>
                                </Card>
                            </>
                        )
                    })}
                </div>
         </main>
    )
}

export default CatIndex
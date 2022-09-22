import React, { useState } from 'react'
import {InputGroup, InputGroupText, Input, Button} from 'reactstrap'
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
    const navigate = useNavigate()
    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })
    const handleCats = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value})
    }
        const backToHome = () => {
            createCat(newCat)
            navigate("/catindex")
        }
    return (
        <>
        <h1>Add A Cat Here</h1>
            <div>
            <InputGroup>
                <InputGroupText for="name">
                    Add A Cat Name
                </InputGroupText>
                <Input 
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={handleCats}
                        value={newCat.name}
                />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText for="age">
                    How old are they?
                </InputGroupText>
                <Input 
                        name="age"
                        placeholder="Age" 
                        type="number"
                        onChange={handleCats}
                        value={newCat.age}
                />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText for="enjoys">
                    What do they like?
                </InputGroupText>
                <Input 
                        name="enjoys"
                        placeholder="Hobbies?" 
                        type="text"
                        onChange={handleCats}
                        value={newCat.enjoys}
                />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText for="image">
                    Add a picture
                </InputGroupText>
                <Input 
                        name="image"
                        placeholder="Picture" 
                        type="url"
                        onChange={handleCats}
                        value={newCat.image}
                />
            </InputGroup>
            <br />
            <Button
                onClick={backToHome}
            >
                Submit
            </Button>
            </div>
        </>
    )
}

export default CatNew
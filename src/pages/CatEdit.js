import React, { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import {Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'

const CatEdit = ({ cats, updateCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find(cat => cat.id === +id)
    console.log(currentCat)
    const navigate = useNavigate()
    const [editCat, setEditCat] = useState({
        name:"",
        age:"",
        enjoys:"",
        image:"",
    })
    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate("/catindex")
    }
    return (
        <>
        <h1>Update A Cat Here</h1>
        <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          id="Name"
          name="name"
          placeholder="Name Here"
          type="text"
          onChange ={handleChange}
          value={editCat.name}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="age">
          Age
        </Label>
        <Input
          id="age"
          name="age"
          placeholder="Age Here"
          type="number"
          onChange ={handleChange}
          value={editCat.age}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="enjoys">
      What do they like?
    </Label>
    <Input
      id="enjoys"
      name="enjoys"
      placeholder="What do they like?"
      type="text"
      onChange ={handleChange}
      value={editCat.enjoys}
    />
  </FormGroup>
  <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      id="image"
      name="image"
      placeholder="Add an Image URL"
      type="url"
      onChange ={handleChange}
      value={editCat.image}
    />
  </FormGroup>
    <Button onClick={handleSubmit} name="submit">
        Submit Updated Cat
    </Button>
        </>
    )
}

export default CatEdit
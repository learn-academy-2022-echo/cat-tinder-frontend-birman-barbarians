import { render, screen } from "@testing-library/react"

import { MemoryRouter, Route, Routes } from "react-router-dom"
import CatShow from "./CatShow"
import mockCatsArray from "../MockCats";


const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path='catshow/:id' element={<CatShow cats={mockCatsArray} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('CatShow', () => { 
    test("render a card with a cat enjoys", ()=>{
      renderComponent()
      expect(screen.getByText(mockCatsArray[0].enjoys)).toBeInTheDocument()
    })
 })
import { screen, render } from "@testing-library/react"
import CatIndex from './CatIndex'
import mockCatsArray from '../MockCats'
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex/>", () => {
    test("render without crashing", () => {
        // Arrange
        render(
            <BrowserRouter>
            <CatIndex cats={mockCatsArray}/>
            </BrowserRouter>


        )
        // const main = document.createElement("main")
        //     render(<CatIndex cats={mockCatsArray} />, main)
                mockCatsArray.forEach((cat) => {
                    const catName = screen.getByText(cat.name)
                    expect(catName).toBeInTheDocument()
                })
    })
})
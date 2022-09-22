import { screen, render } from "@testing-library/react"
import CatIndex from './CatIndex'
import mockCatsArray from '../MockCats'
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex/>", () => {
    test("render without crashing", () => {
        render(
            <BrowserRouter>
                <CatIndex cats={mockCatsArray}/>
            </BrowserRouter>
        )
            mockCatsArray.forEach((cat) => {
                const catName = screen.getByText(cat.name)
                expect(catName).toBeInTheDocument()
        })
    })
})
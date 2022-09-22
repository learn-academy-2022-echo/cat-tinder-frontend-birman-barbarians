import {screen, render} from "@testing-library/react"
import Home from './Home' 

describe("<Home />", () => {
    it("Render without crashing", () => {
        render(<Home/>)
        const showLink = screen.getByText(/Welcome to Cat Tinder/i)
        expect(showLink).toBeInTheDocument()
    })
})
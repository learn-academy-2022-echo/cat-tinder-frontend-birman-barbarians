import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter } from 'react-router-dom'


describe("<CatNew/>", () => {
    test("render CatNew page without crashing", () => {
        render(
            <BrowserRouter>
                <CatNew/>
            </BrowserRouter>
        )
        const heading = screen.getByText(/Add A Cat Here/i)
        expect(heading).toBeInTheDocument()
        
    })
   
    test(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <CatNew/>
            </BrowserRouter>
        )
        const textbox = screen.getAllByRole("textbox")
        screen.debug(textbox)
        expect(textbox[0]).toBeEnabled()
        expect(textbox.length).toBeGreaterThan(0)
    })
    
})
import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../Landing_Page/Home/Hero";

//Test suite
describe('Hero Component', ()=>{
    test('renders hero image', ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText('HeroImage');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', "media/landing.png")
    });

    test('renders signup button', ()=>{
        render(<Hero/>);
        const signupbutton = screen.getByRole('button', {name:"/SignUp now/i"});
        expect(signupbutton).toBeInTheDocument();
        expect(signupbutton).toHaveClass('btn-primary');
    });
}); 






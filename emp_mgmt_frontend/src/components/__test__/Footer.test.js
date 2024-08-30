import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "../Footer";

describe('Test Footer Component', () => { 

    test("render Footer text", () => {
        render(<Footer/>);
        const footerText = screen.getByTestId("footer-text");
        expect(footerText.innerHTML).toBe("All Rights Reserved 2024 @Debayan Basu");
    });

    test("click Footer button", () => {
        render(<Footer/>);
        const footerBtn = screen.getByTestId("footer-btn");
        fireEvent.click(footerBtn);
    });


 });
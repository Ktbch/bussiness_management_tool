import { render, screen } from "@testing-library/react";
import Home from "../../(pages)/(homePage)/page";

describe("homepage", () => {
	it("should render a div with hello", () => {
		render(<Home />);
		expect(screen.getByText("hello")).toBeDefined();
	});
});

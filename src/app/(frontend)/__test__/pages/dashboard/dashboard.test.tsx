import { render, screen } from "@testing-library/react";
import DashBoardPage from "../../../(pages)/dashboard/page";

describe("dashboard page", () => {
	it("should render user name", () => {
		render(<DashBoardPage />);

		const heading = screen.getByRole("heading");

		expect(heading).toBeDefined();
	});
});

import { createElement as h } from "react";
import { render, screen } from "@not-govuk/component-test-helpers";
import DateTime, { DateTimeProps } from "../src/DateTime";

describe("DateTime", () => {
	const minimalProps: DateTimeProps = {
		dateTime: '2022-01-10T19:30:33.233Z'
	};

	describe("when given minimal valid props to display time then date", () => {
    beforeEach(async() => {
		  render(h(DateTime, minimalProps))
    });

		it("renders", async () => {
			expect(screen.getByText("10 January 2022 at 7:30pm")).toBeInTheDocument()
		});
	});

	describe("when given full valid props to display time then date", () => {
    const props: DateTimeProps = {
      ...minimalProps,
      clockType: 24,
      precedence: 'time'
    };

    beforeEach(async() => {
		  render(h(DateTime, props))
    });

		it("renders", () => {
			expect(screen.getByText("19:30 on 10 January 2022")).toBeInTheDocument();
		});
	});
});

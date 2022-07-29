import { createElement as h } from "react";
import { mount } from "@not-govuk/component-test-helpers";
import DateTime, { DateTimeProps } from "../src/DateTime";

describe("DateTime", () => {
	const dateTimeString = "2022-01-10T19:30:33.233Z";

	const minimalProps: DateTimeProps = {
		dateTime: dateTimeString,
	};
	const fullProps: DateTimeProps = {
		dateTime: dateTimeString,
		clockType: 24,
		precedence: 'date'
	};
	
	describe("when given minimal valid props to display time then date", () => {
		const component = mount(h(DateTime, minimalProps));

		it("renders", () => {
			expect(component.text()).toBe("7:30pm on 10 January 2022");
		});
	});
	describe("when given full valid props to display time then date", () => {
		const component = mount(h(DateTime, fullProps));

		it("renders", () => {
			expect(component.text()).toBe("10 January 2022 at 19:30");
		});
	});
});

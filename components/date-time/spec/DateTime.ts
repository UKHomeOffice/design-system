import { createElement as h } from "react";
import { mount } from "@not-govuk/component-test-helpers";
import DateTime, { DateTimeProps } from "../src/DateTime";

describe("DateTime", () => {
	const dateTimeString = "2022-01-10T19:30:33.233Z";

	const minimalDateProps: DateTimeProps = {
		ISOString: dateTimeString,
		displayDate: true,
	};
	const minimalTimeProps: DateTimeProps = {
		ISOString: dateTimeString,
		displayTime: true,
	};
	const minimalDateAndTimeProps: DateTimeProps = {
		ISOString: dateTimeString,
		displayDate: true,
		displayTime: true,
	};

	describe("when given minimal valid props to display a date", () => {
		const component = mount(h(DateTime, minimalDateProps, "Child"));

		it("renders", () => {
			expect(component.text()).toBe("10 January 2022");
		});
	});

	describe("when given minimal valid props to display a 12-hour time", () => {
		const component = mount(h(DateTime, minimalTimeProps, "Child"));

		it("renders", () => {
			expect(component.text()).toBe("7:30pm");
		});
	});

	describe("when given minimal valid props to display a 24-hour time", () => {
		const props: DateTimeProps = {
			...minimalTimeProps,
			clockType: 24,
		};

		const component = mount(h(DateTime, props, "Child"));

		it("renders", () => {
			expect(component.text()).toBe("19:30");
		});
	});

	describe("when given minimal valid props to display time then date", () => {
		const component = mount(h(DateTime, minimalDateAndTimeProps, "Child"));

		it("renders", () => {
			expect(component.text()).toBe("7:30pm on 10 January 2022");
		});
	});

	describe("when given minimal valid props to display date then time", () => {
		const props: DateTimeProps = {
			...minimalDateAndTimeProps,
			precedence: "date",
		};
		const component = mount(h(DateTime, props, "Child"));

		it("renders", () => {
			expect(component.text()).toBe("10 January 2022 at 7:30pm");
		});
	});
});

import { createElement as h } from "react";
import { mount } from "@not-govuk/component-test-helpers";
import Timeline from "../src/Timeline";

describe("Timeline", () => {
	describe("when given all props", () => {
		const items = [
			{
				action: "Response submitted",
				by: "system",
				date: new Date("14 Apr 2021 16:27"),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				action: "Issue under investigation",
				by: "Douglas Pollock",
				date: new Date("15 Mar 2021 10:04"),
				description:
					"This is a description of the event. This field accepts unformatted text only.",
			},
			{
				action: "Issue raised on GitHub",
				by: "Karypun",
				date: new Date("25 Jan 2021 09:35"),
				description: "This is a description of the event.",
			},
		];

		const itemString =
			items[0].action +
			" by " +
			items[0].by +
			"14 April 2021 at 4:27pm" +
			items[0].description +
			items[1].action +
			" by " +
			items[1].by +
			"15 March 2021 at 10:04am" +
			items[1].description +
			items[2].action +
			" by " +
			items[2].by +
			"25 January 2021 at 9:35am" +
			items[2].description;

		const timeline = mount(
			h(Timeline, {
				items: items,
			})
		);

		it("displays all props", () => {
			expect(timeline); // to exist
			expect(timeline.text()).toBe(itemString);
			expect(timeline.find(".hods-timeline__item")).toHaveLength(3);
		});

		it("should show the title", () => {
			expect(timeline.text()).toContain(items[0].action);
		});

		it("should show the user", () => {
			expect(timeline.text()).toContain(items[0].by);
		});

		it("should show the date", () => {
			expect(timeline.text()).toContain("14 April 2021 at 4:27pm");
		});

		it("should show the description", () => {
			expect(timeline.text()).toContain(items[0].description);
		});
	});

	describe("when given mandatory props", () => {
		const items = [
			{
				action: "Response submitted",
				date: new Date("14 Apr 2021 16:27"),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{
				action: "Issue under investigation",
				date: new Date("15 Mar 2021 10:04"),
				description:
					"This is a description of the event. This field accepts unformatted text only.",
			},
			{
				action: "Issue raised on GitHub",
				date: new Date("25 Jan 2021 09:35"),
				description: "This is a description of the event.",
			},
		];

		const itemString =
			items[0].action +
			"14 April 2021 at 4:27pm" +
			items[0].description +
			items[1].action +
			"15 March 2021 at 10:04am" +
			items[1].description +
			items[2].action +
			"25 January 2021 at 9:35am" +
			items[2].description;

		const timeline = mount(
			h(Timeline, {
				items: items,
			})
		);

		it("displays all props", () => {
			expect(timeline); // to exist
			expect(timeline.text()).toBe(itemString);
			expect(timeline.find(".hods-timeline__item")).toHaveLength(3);
		});

		it("should show the title", () => {
			expect(timeline.text()).toContain(items[0].action);
		});

		it("should not show the user", () => {
			expect(timeline.text()).not.toContain(items[0].by);
		});

		it("should show the date", () => {
			expect(timeline.text()).toContain("14 April 2021 at 4:27pm");
		});

		it("should show the description", () => {
			expect(timeline.text()).toContain(items[0].description);
		});
	});
});

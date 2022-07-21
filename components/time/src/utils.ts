export const formatDateTimeFromISOString = (
	ISOString: string,
	clockType?: 12 | 24
) => {
	let formattedTime = null;
	const date = new Date(ISOString);
		const hours = date.getHours();
		const minutes = date.getMinutes();

		const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes

		formattedTime =
			clockType === 24
				? hours < 10
					? `0${hours}:${paddedMinutes}`
					: `${hours}:${paddedMinutes}`
				: `${hours > 12 ? hours - 12 : hours == 0 ? 12 : hours}:${paddedMinutes}${
						hours > 11 ? "pm" : "am"
				  }`;

	return {
		formattedTime,
	};
};

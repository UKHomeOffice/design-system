export const formatTime = (
	time: string,
	clockType?: 12 | 24
) => {
	const date = new Date(time.includes('T') ? time : `1970-01-01T${time}`);
	return (
		date
		  .toLocaleTimeString([],{
		    hourCycle: clockType === 24 ? 'h23' : 'h12',
		    hour: clockType === 24 ? '2-digit' : 'numeric',
		    minute: '2-digit'
		  })
		  .replace(' ','')
      .toLowerCase()
	);
};

export const convertHourMinutesToTimestamps = (hour: number, minute: number) => {
	return (hour || 1) * 60 * 60000 + (minute || 1) * 60000;
};

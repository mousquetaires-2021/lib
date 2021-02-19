import { RangeOpeningDay, RestaurantInferface } from 'lib/interfaces/restaurant-interface';

export const convertDateOpeningHourToInterface = (restaurant: RestaurantInferface, key: string) => {
	let opening: RangeOpeningDay[] = [];

	if (restaurant['opening_' + key]) {
		restaurant['opening_' + key].split(';').map((parse) => {
			const split = parse.split(',');
			if (split && split.length === 2) {
				const splitStart = split[0].split(':');
				const splitEnd = split[1].split(':');

				if (splitStart && splitStart.length === 2 && splitEnd && splitEnd.length === 2) {
					opening.push({
						startHour: +splitStart[0],
						startMinute: +splitStart[1],
						endHour: +splitEnd[0],
						endMinute: +splitEnd[1]
					});
				}
			}
		});
	}

	return opening;
};

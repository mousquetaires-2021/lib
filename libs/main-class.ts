import { ORDER_STATUS } from 'lib/constants/orders';
import { Subscription } from 'rxjs';
import { sumBy } from 'lodash';
import { RESTAURANT_STATUS } from 'lib/constants/restaurants';

export class MainClass {
	watcherList: Subscription[] = [];
	public ORDER_STATUS = ORDER_STATUS;
	public RESTAURANT_STATUS = RESTAURANT_STATUS;

	watch(sub) {
		this.watcherList.push(sub);
	}

	watcherDestroy() {
		this.watcherList.map((w) => {
			try {
				w.unsubscribe();
			} catch (err) {}
		});
	}

	trackBy(key) {
		return function(index, value) {
			return value[key];
		};
	}

	public convertPriceToDollars(price) {
		if (price > 30) {
			return '€€€';
		}

		if (price > 10) {
			return '€€';
		}

		return '€';
	}

	public convertNoteToText(note) {
		if (note >= 4.5) {
			return 'Excellent';
		}

		if (note >= 3.5) {
			return 'Bon';
		}

		return '';
	}
	public orderGetQuantity = (order) => {
		if (order) {
			return sumBy(order.products || [], 'quantity');
		}

		return 0;
	};

	public orderGetSumTTC = (order) => {
		let total = 0;

		if (order) {
			(order.products || []).map((p) => {
				total += p['food.price'] * p.quantity;
			});
		}

		return total;
	};

	public orderGetTVA = (order) => {
		let total = 0;

		if (order) {
			(order.products || []).map((p) => {
				const price = p['food.price'] * p.quantity;
				total += price * (p['food.tva'] / 100);
			});
		}

		return total;
	};

	public orderGetHT = (order) => {
		let total = 0;

		if (order) {
			(order.products || []).map((p) => {
				const price = p['food.price'] * p.quantity;
				total += price * ((100 - p['food.tva']) / 100);
			});
		}

		return total;
	};
}

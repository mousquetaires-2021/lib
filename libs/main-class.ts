import { ORDER_STATUS } from 'lib/constants/orders';
import { Subscription } from 'rxjs';

export class MainClass {
	watcherList: Subscription[] = [];
	public ORDER_STATUS = ORDER_STATUS;

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
}

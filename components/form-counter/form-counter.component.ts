import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'form-counter',
	templateUrl: './form-counter.component.html',
	styleUrls: [ './form-counter.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormCounterComponent),
			multi: true
		}
	]
})
export class FormCounterComponent implements OnInit, ControlValueAccessor {
	@Input() value: number = 0;
	@Output() onChangeValue = new EventEmitter();
	disabled = false;

	onChange: any = () => {};
	onTouched: any = () => {};
	constructor() {}

	ngOnInit() {}

	setDelta(delta) {
		if (this.value + delta >= 0) {
			this.value += delta;
			this.onChange(this.value);
			this.onChangeValue.emit(this.value);
		}
	}

	writeValue(value: number): void {
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
}

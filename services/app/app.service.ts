import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AppService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  needAccountToView: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  );
  constructor(private authService: AuthService) {}

  needAccount(message, cleanUrl = false) {
    if (message) {
      this.authService.redirectUrl =
        window.location.pathname + window.location.search;
    }

	if(!message && cleanUrl) {
		this.authService.redirectUrl = null
	}

    this.needAccountToView.next(message);
  }
}

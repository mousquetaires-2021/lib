import { Injectable } from "@angular/core";
import { ServerService } from "../http-server/server.service";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private serverService: ServerService) {}

  getMainCategories({ latitude, longitude }) {
    return this.serverService
      .post("categories/get-main-categories", { latitude, longitude })
      .then((data) => data.data || []);
  }

  getAllMainCategories() {
    return this.serverService
      .get("categories/get-all-main-categories")
      .then((data) => data.data || []);
  }
}

import { UserService } from '@/services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	templateUrl: './list-users.component.html',
	styleUrls: [ './list-users.component.scss' ]
})
export class ListUsersComponent implements OnInit {
	displayedColumns: string[] = [ 'id', 'firstName', 'lastName', 'email', 'role', 'status', 'actions' ];
	dataSource = new MatTableDataSource();

	@ViewChild(MatSort) sort: MatSort;
	constructor(private userService: UserService) {
		this.onLoad();
	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}

	onLoad() {
		this.userService.getUsers().then((l) => (this.dataSource.data = l));
	}
}

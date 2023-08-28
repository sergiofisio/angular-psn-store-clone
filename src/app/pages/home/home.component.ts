import axios from 'axios';
import { RawgApiService } from './../../rawg-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	public games!: Array<any>;
	constructor(private RawgApiService: RawgApiService) {}

	ngOnInit(): void {
		this.RawgApiService.getAllGames()
			.then((response) => {
				console.log(response.data.results);

				this.games = response.data.results;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

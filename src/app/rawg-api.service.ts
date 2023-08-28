import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
	providedIn: 'root',
})
export class RawgApiService {
	constructor() {}
	getAllGames() {
		return axios.get(
			'https://api.rawg.io/api/games?key=e639359c9e9341c9bd05d9f756bcb5c8'
		);
	}
}

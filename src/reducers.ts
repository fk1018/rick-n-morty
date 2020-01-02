import { IState, IAction } from './interfaces';

export function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case 'FETCH_DATA':
			return { ...state, episodes: action.payload };
		case 'ADD_FAV':
			return { ...state, favorites: [ ...state.favorites, action.payload ] };
		case 'REMOVE_FAV':
			return { ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload.id) };
		default:
			return state;
	}
}

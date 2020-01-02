import React from 'react';
import { IState } from './interfaces';
import { reducer } from './reducers';
const initialState: IState = {
	episodes: [],
	favorites: []
};

export const Store = React.createContext<IState | any>(initialState); //the any here is fix for return of store provider

export function StoreProvider(props: any): JSX.Element {
	const [ state, dispatch ] = React.useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}

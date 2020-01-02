export interface IState {
	episodes: Array<IEpisode>;
	favorites: Array<IEpisode>;
}

export interface IAction {
	type: string;
	payload: any;
}

export interface IEpisode {
	id: number;
	image: { medium: string; original: string };
	name: string;
	season: number;
	number: number;
}

export interface IAppProps {
	episodes: Array<IEpisode>;
	favorites: Array<IEpisode>;
	toggleFavAction: (e: IEpisode) => IAction;
}

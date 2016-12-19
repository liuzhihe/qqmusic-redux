/**
 * Created by jiawei6 on 2016/12/13.
 */
import {Record, List} from 'immutable';

import {toplistActions} from './actions';

export const ToplistState = new Record({
	all: null,
	lists: new List()
});

export function toplistReducer(state = new ToplistState(), action) {

	const {payload, type: actionType} = action;

	switch (actionType) {
		case toplistActions.FETCH_TOPLIST_PENDING:
		case toplistActions.FETCH_TOPLIST_FAILED:
			return state;
		case toplistActions.FETCH_TOPLIST_FULFILLED:
			const {result, param, type} = payload;
			if (type === 'all') {
				return state.set('all', [
					{
						...result[0],
						List: new List(result[0].List)
					},
					{
						...result[1],
						List: new List(result[1].List)
					}
				]);
			} else if (type === 'one') {
				if (!state.lists.find((list) => (param.topid === list.topid && param.date === list.date))) {
					return state.set('lists', state.lists.push({
						...result,
						topid: param.topid
					}));
				}
			}
			return state;
		default:
			return state;
	}
}
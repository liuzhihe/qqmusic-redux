/**
 * Created by jiawei6 on 2016/12/9.
 */
export function getPlayer(state) {
	return state.player;
}

export function getPlayerIsShow(state) {
	return getPlayer(state).get('playerIsShow');
}
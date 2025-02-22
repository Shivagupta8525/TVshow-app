import { createSelector } from "reselect";
import { State } from "../store";


export const showsStateSelector = (state: State) => state.shows;


export const showQuerySelector = createSelector(
    showsStateSelector,
    (showState) => showState.query
);


export const showsSelector = createSelector(
    showsStateSelector,
    (showState) => showState.shows
);


export const queryShowMapSelector = createSelector(
    showsStateSelector,
    (showsState) => showsState.queryShows
);


export const showsLoadingSelector = createSelector(
    showsStateSelector,
    (showState) => showState.loading
);


export const showMapCast = createSelector(
    showsStateSelector,
    (showState) => showState.castShow
);

export const ShowSelector = createSelector(
    showsSelector,
    showQuerySelector,
    queryShowMapSelector,
    (showsMap, query, queryShowsMap) => {

        return queryShowsMap[query]
            ? queryShowsMap[query].map((item) => showsMap[+item])
            : [];
    }
);

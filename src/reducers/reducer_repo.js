import { FETCH_REPO, FILTER_REPO, CLEAR_REPO } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REPO:
            return [action.payload.data];
        
        case FILTER_REPO:
            return [action.payload];

        case CLEAR_REPO:
            return [];
        
        default:
            return state;
    }
}

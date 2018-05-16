import axios from 'axios';

export const FETCH_REPO = 'FETCH_REPO';

export function fetchRepo(term) {
    const URL = `https://api.github.com/users/${term}/repos`;
    const response = axios.get(URL);
    return {
        type: FETCH_REPO,
        payload: response
    };
}

export const FILTER_REPO = 'FILTER_REPO';

export function filterRepo(term, arr) { //arr has global state object than repolist
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~ Entering filter repo ~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    console.log('parent props: ', arr);
    console.log('search term =', term);

    if (term === '') {
        console.log('no filter term');
        return {
            type: FILTER_REPO,
            payload: arr
        };
    }

    const newarr = [];
    
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name);
        // console.log('match : ', arr[i].name.search(term));
        if (arr[i].name.search(term) !== -1) {
            newarr.push(arr[i]);
        }       
    }

    console.log('new repo list = ', newarr);

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~ Exiting filter repo ~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    return {
        type: FILTER_REPO,
        payload: newarr
    };
}


export const CLEAR_REPO = 'CLEAR_REPO';

export function clearRepo() {
    return {
        type: CLEAR_REPO,
        payload: []
    };
}

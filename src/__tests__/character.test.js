import character, { Actions, Types } from '../store/ducks/character.js';


/**
 * Reducer Test
 *  */
describe('character Reducer', () => {
    const initialState = {
        data: {},
        loading: false,
        error: null,
        searchTerm: null,
        searchResults: []
    };

    it('should returns the initial state when an action type is not passed', () => {
        const reducer = character(undefined, {});

        expect(reducer).toEqual(initialState);
    });
});

/**
 * Action Test
 *  */
describe('actions', () => {
    it('should create an action to list characters by page', () => {
        const page = 0;
        const expectedAction = {
            type: Types.REQUEST_LIST,
            payload: {
                page
            }
        }
        expect(Actions.requestListCharacter(page)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action search characters by name', () => {
        const name = 'Elvis';
        const expectedAction = {
            type: Types.REQUEST_SEARCH,
            payload: {
                name
            }
        }
        expect(Actions.requestSearch(name)).toEqual(expectedAction)
    })
})

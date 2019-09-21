/**
 * Types
 * **/
export const Types = {
  REQUEST_SEARCH: "character/REQUEST_SEARCH",
  SUCCESS: "character/SUCCESS_REQUEST",
  FAILURE: "character/FAILURE_REQUEST",
  RESET_SEARCH_LIST: "character/RESET_SEARCH_LIST",

  REQUEST_LIST: "character/REQUEST_LIST",
  ADD_SEARCH_LIST: "character/ADD_SEARCH_LIST",
};

/**
 * Handlers
 * **/
const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
  searchTerm: null,
  searchResults: []
};

/**
 * Reducer
 */
export default function character(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_LIST:
      return { ...state, loading: true };
    case Types.REQUEST_SEARCH:
      return { ...state, loading: true, searchTerm: action.payload.name };
    case Types.SUCCESS:
      return { data: action.payload, loading: false, error: false };
    case Types.FAILURE:
      return { data: [], loading: false, error: true };
    case Types.RESET_SEARCH_LIST:
      return { ...state, searchResults: [] };
    case Types.ADD_SEARCH_LIST:
      return { ...state, searchResults: [...state.searchResults, ...action.payload] };
    default:
      return state;
  }
}

/**
 *  Actions
 */
export const Actions = {
  requestSearch: name => {
    return {
      type: Types.REQUEST_SEARCH,
      payload: {
        name
      }
    };
  },
  requestListCharacter: page => {
    return {
      type: Types.REQUEST_LIST,
      payload: {
        page
      }
    };
  }
};

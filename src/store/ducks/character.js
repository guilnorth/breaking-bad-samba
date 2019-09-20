/**
 * Types
 * **/
export const Types = {
  REQUEST: "character/REQUEST_BY_NAME",
  SUCCESS: "character/SUCCESS_REQUEST",
  FAILURE: "character/FAILURE_REQUEST",

  REQUEST_LIST: "character/REQUEST_LIST",
};

/**
 * Handlers
 * **/
const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
  searchTerm: null
};

/**
 * Reducer
 */
export default function character(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { data: action.payload, loading: false, error: false };
    case Types.FAILURE:
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}

/**
 *  Actions
 */
export const Actions = {
  requestCharacter: name => {
    return {
      type: Types.REQUEST,
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

import { createStore } from 'redux';

export const INITIAL_STATE = {
  data: ['React Native', 'NodeJs']
};

export function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}
const store = createStore(courses);

export default store;

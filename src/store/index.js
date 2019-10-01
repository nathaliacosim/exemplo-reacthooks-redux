import { createStore } from 'redux';

const initial_state = {
  data: [
    'ReactJS',
    'Angular',
    'VueJS'
  ],
}

function courses(state = initial_state, action) {
  switch (action.type){
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(courses);
export default store;
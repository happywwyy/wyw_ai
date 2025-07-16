function todoReducer(state, action) {
  switch(action.type) {
      case 'ADD_TODO':
          return [...state, {
              id: Date.now(), 
              text: action.text,
              done: false
          }];
      case 'TOGGLE_TODO':
          return state.map(todo => 
              todo.id === action.id? {...todo, done: !todo.done}: todo
          );
      case 'REMOVE_TODO':
          return state.filter(todo => todo.id !== todo.id);
      default:
          return state;
  }
}
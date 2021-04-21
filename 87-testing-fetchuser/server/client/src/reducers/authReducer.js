export default function(state = {}, action) {
  console.log('authReducer received actions:')
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}

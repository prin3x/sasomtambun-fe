export default function UserReducer(state, action) {
  switch (action.type) {
    case 'RETRIEVE_USER_STATUS':
      return action.payload;

    default:
      return state;
  }
}

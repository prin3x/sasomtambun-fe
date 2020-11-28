export default function UserReducer(state, action) {
  switch (action.type) {
    case 'RETRIEVE_USER_STATUS':
      return action.payload;

    case 'USER_LOGIN':
      return 'authenticated';

    case 'USER_LOGOUT':
      return 'public';

    default:
      return state;
  }
}

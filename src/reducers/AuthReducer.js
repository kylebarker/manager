import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 }

export default(state = INITIAL_STATE, action) => {
  console.log(action)

  switch(action.type) {
    case EMAIL_CHANGED:
      //make a new object and take all the properties already existing in my state object and put them in my new object. Now define the property email as action.payload and put it on top of what was already defined. If there is already an email property, it will be overwritten by the new value.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload};
    case LOGIN_USER:
      return { ...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.paylod };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false}
    default:
      return state;
  }
}

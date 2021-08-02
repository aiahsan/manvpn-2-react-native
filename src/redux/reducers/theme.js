import types from '../actions/types';

export const themeReducer = (state = 1, action) => {
  if (action.type == types.changeThemeDark) {
    return action.payload;
  } else if (action.type == types.changeThemeLight) {
    return action.payload;
  }

  return state;
};

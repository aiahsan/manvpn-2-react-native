import Types from './types';
export const changeThemeLight = () => {
  return { type: Types.changeThemeLight, payload: 0 };
};
export const changeThemeDark = (payload) => {
  return { type: Types.changeThemeDark, payload: 1 };
};

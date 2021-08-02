import { createStore } from 'redux';
import { themeReducer } from '../redux/reducers/theme';

export const store = createStore(themeReducer);

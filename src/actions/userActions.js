import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';

export const login = createThunk('LOGIN', async token => userService.login({ token }).data);

export const logout = createThunk('LOGOUT', async () => userService.logout());

export const updateSession = createAction('UPDATE_SESSION');

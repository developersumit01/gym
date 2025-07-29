import * as routes from './routes';
export const LOGIN=`/${routes.AUTH}/${routes.LOGIN}`;
export const SIGN_UP=`/${routes.AUTH}/${routes.SIGN_UP}`;
export const FORGET_PASSWORD=`/${routes.AUTH}/${routes.FORGOT_PASSWORD}`;
export const HOME = `/${routes.HOME}`;
export const ABOUT = `/${routes.ABOUT}`;
export const WORKOUT_PROGRAMS = `/${routes.WORKOUT_PROGRAMS}`;
export const STORE = `/${routes.STORE}`;
export const WORKOUT_PROGRAMS_DAY = `/${routes.WORKOUT_PROGRAMS}/:workoutName/${routes.DAY}/:day`;

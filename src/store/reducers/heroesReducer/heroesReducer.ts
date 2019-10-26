import { IHeroesReducer, IAction } from './interface';
import { SET_HEROES } from './actionTypes';

const initialState: IHeroesReducer = {
  heroes: []
};

const heroesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_HEROES: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default heroesReducer;

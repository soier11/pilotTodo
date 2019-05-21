import {Map, List} from 'immutable';
import {WHOAMI} from '../actions/def/SessionType';

const init = new Map({
  username: '',
  name: '',
  phone: '',
  pic_url: '',
  email: '',
  intro: '',
})

const MenuReducer = (state = init, actions) => {
  switch (actions.type){
    case WHOAMI:
      return state.set('username', actions.username)
        .set('name', actions.name)
        .set('phone', actions.phone)
        .set('pic_url', actions.pic_url)
        .set('email', actions.email)
        .set('intro', actions.intro);
    default : return state;
  }
};

export default MenuReducer;
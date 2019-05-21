import {List, Map} from 'immutable';
import sendSaga from '../utils/sendsSaga';

export const getMyMenu = ({...state}) => sendSaga(`/api/ws/${state.cmpy_id}/menu`, 'get', state, {}, {timeout: 30 * 1000});

export const parseMenu = menu => {
  var list = new List([]);
  var tmpList = new List([]);
  var tmp = new Map({});
  var chk = "";

  menu.map((r, i) => {
    if (i === 0) chk = r.up_menu;
    if (r.up_menu !== chk || menu.length - 1 === i) {
      tmp = tmp.set("up_menu", chk);
      tmp = tmp.set("subMenus", tmpList);
      list = list.push(tmp);
      chk = r.up_menu;
      tmp = new Map({});
      tmpList = new List([]);
      tmpList = tmpList.push(new Map(r));
    } else {
      tmpList = tmpList.push(new Map(r));
    }
  });
  return list;
}
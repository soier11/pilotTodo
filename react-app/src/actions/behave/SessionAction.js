import {WHOAMI} from '../def/SessionType';

export const whoAmI = (username, name, email, pic_url, intro, phone) => ({
  type: WHOAMI,
  username, name, email, pic_url, intro, phone
})
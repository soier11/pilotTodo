import {fetchList} from "../apis";

export default {
  FETCH_NEWS(context) {
    fetchList('https://api.hnpwa.com/v0/news/1.json')
      .then(res => {
        context.commit('SET_NEWS', res.data);
      })
      .catch()
  },
  FETCH_ASKS(context){
    fetchList('https://api.hnpwa.com/v0/ask/1.json')
      .then(res => {
        context.commit('SET_ASKS', res.data);
      })
      .catch()
  },
  FETCH_JOBS(context){
    fetchList('https://api.hnpwa.com/v0/jobs/1.json')
      .then(res => {
        context.commit('SET_JOBS', res.data)
      })
      .catch()
  },
  FETCH_USERINFO(context, user){
    fetchList(`https://api.hnpwa.com/v0/user/${user}.json`)
      .then(res => {
        context.commit('SET_USERINFO', res.data)
      })
  }
}
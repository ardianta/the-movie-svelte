const API_KEY = "698189af89bacf00c81e3e33de1b20af";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY_PARAMS = `?api_key=${API_KEY}`


export const themoviedbService = {
  getNowPlayingMovies: async (page = 1) => {
    const req = await fetch(BASE_URL + '/movie/now_playing' + API_KEY_PARAMS + '&page=' + page);
    const data = await req.json();
    return data;
  },
  getUpcomingMovies: async (page = 1) => {
    const req = await fetch(BASE_URL + '/movie/upcoming' + API_KEY_PARAMS + '&page=' + page);
    const data = await req.json();
    return data;
  },
  requestToken: async () => {
    const req = await fetch(BASE_URL + '/authentication/token/new' + API_KEY_PARAMS);
    const data = await req.json();
    return data;
  },
  createSession: async (request_token) => {
    const requestTokenParam = "&request_token=" + request_token;
    const req = await fetch(BASE_URL + '/authentication/session/new' + API_KEY_PARAMS + requestTokenParam, {
      method: 'POST',
    })
    const data = await req.json();
    return data;
  },
  deleteSession: async () => {
    const session_id = localStorage.getItem("session_id");
    const req = await fetch(BASE_URL + '/authentication/session' + API_KEY_PARAMS + '&session_id=' + session_id, {
      method: 'DELETE',
    })
    const data = await req.json();
    return data;
  },
  getCurrentUser:  async () => {
    const session_id = localStorage.getItem("session_id");
    const req = await fetch(BASE_URL + '/account' + API_KEY_PARAMS + '&session_id=' + session_id);
    const data = await req.json();
    return data;
  }
}
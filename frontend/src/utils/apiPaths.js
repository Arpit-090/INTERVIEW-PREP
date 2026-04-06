const BASE_URL =
   "https://interview-prep-cegl.onrender.com/api";

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    SIGNUP: `${BASE_URL}/auth/signup`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    GET_PROFILE:`${BASE_URL}/auth/profile`
  },
  SESSION: {
    CREATE: `${BASE_URL}/sessions/create`,
    GET_ALL: `${BASE_URL}/sessions/my-sessions`,
    GET_ONE: `${BASE_URL}/sessions`, // usage: GET_ONE/:id
  },
  AI: {
    GENERATE_QUESTIONS: `${BASE_URL}/ai/generate-questions`,
    EXPLAIN: `${BASE_URL}/ai/generate-explanation`,
  },
};

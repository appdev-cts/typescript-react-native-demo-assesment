import { API_REQUEST, FETCH_DATA } from "./Constants";

export const fetchUserApi = (dispatch: any) => {
    dispatch({type: API_REQUEST})
  fetch('https://gorest.co.in/public/v2/users', {
    method: 'GET',
    headers: {Accept: 'application/json'},
  })
    .then(res => res.json())
    .then(res => {
      // console.log(res)
        dispatch({type: FETCH_DATA, payload: res })
    }) 
    .catch(err => console.log(err));
};

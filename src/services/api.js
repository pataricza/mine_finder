import axios from 'axios';

const api = axios.create({
  headers: {
    // create api headers tof authentication etc.
    // 'Content-Type': 'application/json; charset=UTF-8',
    // Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const getData = (url) => api.get(url).then((response) => response.data);
export const getWithParams = (url, params) => api.get(url, { params }).then((response) => response.data)

// export const getData = (url) => {
//   return new Promise((resolve, reject) => {
//       api.get(url).then(res => {
//           resolve(res.data);
//       }).catch(err => reject(err));
//   });
// };

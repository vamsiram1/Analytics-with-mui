import axios from "axios";

export const cardsData = [
  { id: 1, value: 1012987, state: "sold", percentage: -16 },
  { id: 2, value: 1012987, state: "sold", percentage: 36 },
  { id: 3, value: 1012987, state: "sold", percentage: -66 },
  { id: 4, value: 1012987, state: "sold", percentage: 36 },
  { id: 5, value: 1012987, state: "sold", percentage: 36 },
  { id: 6, value: 1012987, state: "sold", percentage: -36 },
  { id: 7, value: 1012987, state: "sold", percentage: 36 },
];

// export const cardsData = () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// };

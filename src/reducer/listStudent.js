import {
  ADD_STUDENT,
  DELETE_TUDENT,
  UPDATE_STUDENT,
} from "../constants/actionTypes";

const initState = [
  {
    id: "SV001",
    name: "Tô Trần Hiếu",
    age: 15,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },
  {
    id: "SV002",
    name: "Thái Phương Nam",
    age: 14,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },
  {
    id: "SV003",
    name: "Đinh Thanh Khiết",
    age: 19,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },
  {
    id: "SV004",
    name: "Kiều Tùng Lâm",
    age: 16,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },
  {
    id: "SV005",
    name: "Hồ Xuân Hùng",
    age: 1,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },
];

export const listStudent = (state = initState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_TUDENT:
      let newArr = state.filter((student) => student.id !== action.payload);
      return newArr;
    case UPDATE_STUDENT:
      let id;
      state.forEach((student, index) => {
        if (student.id === action.payload.id) {
          id = index;
        }
      });
      state[id] = action.payload;
      return [...state];
    default:
      return state;
  }
};

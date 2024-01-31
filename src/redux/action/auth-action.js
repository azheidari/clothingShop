import url from "../../service/axios-config";

export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SIGNUP = "SIGNUP";

// export const signIn = (model) => {

export const signIn = () => {
  const model = {
    username: "mor_2314",
    password: "83r5^_",
  };
  const formData = new FormData();

  for (let item in model) {
    formData.append(item, model[item]);
  }

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .post("auth/login", formData)
        .then((response) => {
          const token = response.data;

          localStorage.setItem("token", token);

          dispatch({ type: SIGNIN, payload: token });
          resolve();
        })
        .catch((error) => {
          console.log("in the SIGNIN error ......");
        });
    });
  };
};

export const signUp = () => {
  const model = {
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "John",
      lastname: "Doe",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  };
  // const formData = new FormData();

  // for (let item in model) {
  //   formData.append(item, model[item]);
  // }

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .post("users", model)
        .then((response) => {
          dispatch({ type: SIGNUP, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log("in the signUp error ......");
        });
    });
  };
};

export function action() {
  localStorage.removeItem("token");
  return { type: SIGNOUT, payload: action.payload };
  // return "/";
}

// export const signUp = (model) => {
//     return dispatch => {

//         return new Promise((resolve, reject) => {
//             movieHttp.post(Endpoints.SIGNUP, model)
//                 .then(result => result['data'])
//                 .then(response => {

//                     dispatch({ type: ActionTypes.SIGNUP, payload: response })
//                     resolve()
//                 })
//                 .catch(error => {
//                     console.log(error)
//                 })
//         })
//     }
// }

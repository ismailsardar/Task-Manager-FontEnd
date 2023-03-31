import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import {
  CanceledTask,
  CompletedTask,
  ProgressTask,
  SetNewTask,
} from "../redux/slice/taskSlice";
import store from "../redux/store/store";

const BaseURL = "https://task-manager-ismile.cyclic.app/api/v1";
const AxiosHeader = { headers: { token: getToken() } };

//Register
export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/registration`;
  let reqBody = {
    email,
    firstName,
    lastName,
    mobile,
    password,
    photo,
  };
  return axios
    .post(URL, reqBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast("Email Already Exist");
            return false;
          } else {
            ErrorToast("Something Went Wrong");
            return false;
          }
        } else {
          SuccessToast("Registration Success");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    });
}

//Login
export function LoginRequest(email, password) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/login`;
  let reqBody = { email, password };
  return axios
    .post(URL, reqBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      } else {
        ErrorToast("Invalid Email or Password");
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

// New task
export function NewTaskRequest(title, description) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/createTask`;
  let reqBody = { title: title, description: description, status: "New" };
  return axios
    .post(URL, reqBody, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("New Task Created");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
      return false;
    });
}
// Task List By Status
export function TaskListByStatus(status) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/listTaskByStatus/${status}`;
  axios
    .get(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (status === "New") {
          store.dispatch(SetNewTask(res.data["data"]));
        } else if (status === "Completed") {
          store.dispatch(CompletedTask(res.data["data"]));
        } else if (status === "Canceled") {
          store.dispatch(CanceledTask(res.data["data"]));
        } else if (status === "Progress") {
          store.dispatch(ProgressTask(res.data["data"]));
        }
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((error) => {
      console.log(error.massage)
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
      return false;
    });
}

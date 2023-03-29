import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";

const BaseURL = "https://task-manager-ismile.cyclic.app/api/v1";
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

import OverviewImg from "../assets/img/pages/overview.png";
import HistoryImg from "../assets/img/pages/history.png";
import SettingsImg from "../assets/img/pages/settings.png";
import SignInImg from "../assets/img/pages/sign-in.png";
import SignUpImg from "../assets/img/pages/sign-up.png";
import DetImg from "../assets/img/pages/detection.png";
import ForgotPasswordImg from "../assets/img/pages/forgot-password.png";
import ResetPasswordImg from "../assets/img/pages/reset-password.png";
import NotFoundImg from "../assets/img/pages/404.png";
import ServerErrorImg from "../assets/img/pages/500.png";

import { Routes } from "../routes";

export default [
  {
    id: 1,
    name: "Overview",
    image: OverviewImg,
    link: Routes.DashboardOverview.path,
  },

  {
    id: 2,
    name: "History",
    image: HistoryImg,
    link: Routes.History.path,
  },
  {
    id: 3,
    name: "Settings",
    image: SettingsImg,
    link: Routes.Settings.path,
  },
  {
    id: 4,
    name: "Sign In",
    image: SignInImg,
    link: Routes.Signin.path,
  },
  {
    id: 5,
    name: "Sign Up",
    image: SignUpImg,
    link: Routes.Signup.path,
  },
  {
    id: 6,
    name: "Detect",
    image: DetImg,
    link: Routes.Detection.path,
  },
  {
    id: 7,
    name: "Forgot password",
    image: ForgotPasswordImg,
    link: Routes.ForgotPassword.path,
  },
  {
    id: 8,
    name: "Reset password",
    image: ResetPasswordImg,
    link: Routes.ResetPassword.path,
  },
  {
    id: 9,
    name: "404",
    image: NotFoundImg,
    link: Routes.NotFound.path,
  },
  {
    id: 10,
    name: "500",
    image: ServerErrorImg,
    link: Routes.ServerError.path,
  },
];

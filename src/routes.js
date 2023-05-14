export const Routes = {
  // pages
  Presentation: { path: "/" },
  DashboardOverview: { path: "/dashboard/overview" },
  Detection: { path: "/page" },
  History: { path: "/History" },
  Settings: { path: "/setting" },
  TrendsTables: { path: "/tables/TrendsTables" },
  Billing: { path: "/examples/billing" },
  Invoice: { path: "/examples/invoice" },
  Signin: { path: "/examples/sign-in" },
  Signup: { path: "/examples/sign-up" },
  AboutUs: { path: "/examples/AboutUs" },
  ForgotPassword: { path: "/examples/forgot-password" },
  VerifyAccount: { path: "/activate/:uid/:token/" },
  ChangePassword: { path: "/examples/change-password" },
  ResetPassword: { path: "/password/reset/confirm/:uid/:token/" },
  NotFound: { path: "/examples/404" },
  ServerError: { path: "/examples/500" },

  // docs
  DocsOverview: { path: "/documentation/overview" },
  DocsDownload: { path: "/documentation/download" },
  DocsQuickStart: { path: "/documentation/quick-start" },
  DocsLicense: { path: "/documentation/license" },
  DocsFolderStructure: { path: "/documentation/folder-structure" },
  DocsBuild: { path: "/documentation/build-tools" },
  DocsChangelog: { path: "/documentation/changelog" },
};

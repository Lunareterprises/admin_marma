import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import TherapistsPage from "./pages/TherapistsPage";
import BookingsPage from "./pages/BookingsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import OTPLogsPage from "./pages/OTPLogsPage";
import LearnerPage from "./pages/LearnerPage";
import ForgotPasswordPage from "./pages/Login/ForgotPasswordPage";
import OTPVerificationPage from "./pages/Login/OTPVerificationPage";
import ResetPasswordPage from "./pages/Login/ResetPasswordPage";
import SuccessPage from "./pages/Login/SuccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-success" element={<SuccessPage />} />

    
          <Route path="/admin" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="therapists" element={<TherapistsPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="otp-logs" element={<OTPLogsPage />} />
            <Route path="learner" element={<LearnerPage />} />
          </Route>
        

       
        <Route
          path="*"
          element={<LoginPage/>}
        />
      </Routes>
    </Router>
  );
};

export default App;

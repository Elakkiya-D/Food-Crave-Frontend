import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import PrivacyPolicy from "./pages/PrivacyPolicies";
import AboutUs from "./pages/AboutUs";
import HelpAndSupport from "./pages/HelpAndSupport";
import FAQPage from "./pages/FAQPage";
import TermsAndService from "./pages/TermsAndService";
import OrderStatusPage from "./pages/OrderStatusPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Layout showHero={false}>
            <PrivacyPolicy />
          </Layout>
        }
      />
       <Route
        path="/terms-of-service"
        element={
          <Layout showHero={false}>
            <TermsAndService />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout showHero={false}>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/help-support"
        element={
          <Layout showHero={false}>
            <HelpAndSupport />
          </Layout>
        }
      />
       <Route
        path="/faqs"
        element={
          <Layout showHero={false}>
            <FAQPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

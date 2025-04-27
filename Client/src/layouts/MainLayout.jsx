import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-1 w-full mt-20 px-4 pb-12">{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;

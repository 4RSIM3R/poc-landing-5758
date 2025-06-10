import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

export const Layout = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const navItems = [
    {
      title: "Home",
      href: "/",
      active: currentRoute == "/",
    },
    {
      title: "Article",
      href: "/article",
      active: currentRoute == "/article",
    },
    {
      title: "Careers",
      href: "/career",
      active: currentRoute == "/career",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar navItems={navItems} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

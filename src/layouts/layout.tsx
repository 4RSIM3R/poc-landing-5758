import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
      active: true,
    },
    {
      title: "Article",
      href: "/article",
    },
    {
      title: "Careers",
      href: "/careers",
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

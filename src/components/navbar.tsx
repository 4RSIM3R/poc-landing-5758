import React from "react";

import { ArrowRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href: string;
  active?: boolean;
}

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[];
  logoText?: string;
  logoNumber?: string;
  ctaHref?: string;
}

export function Navbar({
  navItems,
  ctaHref = "#contact",
  className,
  ...props
}: NavbarProps) {
  const isMobile = useMobile();
  const [open, setOpen] = React.useState(false);

  if (isMobile) {
    return (
      <div className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-sm px-4">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full bg-black px-4 backdrop-blur-sm",
            className
          )}
          {...props}
        >
          {/* Mobile logo */}
          <div className="flex items-center">
            <img src="/assets/logo.svg" className="h-8 w-auto" alt="" />
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-emerald-400 text-black hover:bg-emerald-300"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/95 text-white border-gray-800"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {/* Logo in mobile menu */}
                <div className="flex items-center justify-center pb-4 border-b border-gray-800">
                  <img src="/assets/logo.svg" className="h-8 w-auto" alt="" />
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-white/80 py-2",
                        item.active ? "text-white" : "text-white/60"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                {/* CTA button in mobile menu */}
                <Button
                  asChild
                  className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300 mt-8"
                  onClick={() => setOpen(false)}
                >
                  <Link to={ctaHref}>
                    Let's Talk <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-6xl px-4">
      <div
        className={cn(
          "flex h-14 items-center justify-between rounded-full bg-black px-4 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {/* Left navigation links */}
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80",
                item.active ? "text-white" : "text-white/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
          <img src="/assets/logo.svg" className="h-9 w-auto" alt="" />
        </div>

        {/* Right CTA button */}
        <Button
          asChild
          className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300"
        >
          <Link to={ctaHref}>
            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

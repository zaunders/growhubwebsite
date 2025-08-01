import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-foreground hover:text-primary transition-smooth">
            Hub Haven
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Coworking
            </Link>
            <Link
              to="/aktivitetslokalen"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                isActive("/aktivitetslokalen") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Aktivitetslokalen
            </Link>
            <Link
              to="/tjanster"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                isActive("/tjanster") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Tjänster
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
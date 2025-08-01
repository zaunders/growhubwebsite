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
            Growhub
          </Link>
          
          <div className="flex space-x-8">
            <div className="relative group">
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  (isActive("/") || isActive("/hyr-plats")) ? "text-primary" : "text-muted-foreground"
                )}
              >
                Coworking
              </Link>
              <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border rounded-md shadow-lg py-2 min-w-[140px] z-50">
                <Link
                  to="/hyr-plats"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
                >
                  Hyr plats
                </Link>
              </div>
            </div>
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
            <Link
              to="/kontakt"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                isActive("/kontakt") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
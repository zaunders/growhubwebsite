import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Clock, Wifi, Coffee, Users, ArrowRight } from "lucide-react";

const HyrPlats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Hyr plats på Growhub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Få din egen plats i våra delade kontorsrum med 24/7 tillgång till 
              alla faciliteter och en inspirerande arbetsmiljö.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                2 lediga platser
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                Från 1000kr/mån
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-16">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Lediga kontorsplatser</CardTitle>
                  <CardDescription className="text-base">
                    Vi har just nu ett par lediga platser i våra delade kontorsrum.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Tillgänglighet</h3>
                      <p className="text-muted-foreground">
                        <strong>7 platser totalt</strong> i delade kontorsrum<br />
                        <strong>2 lediga platser</strong> för nya hyresgäster
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Priser</h3>
                      <p className="text-muted-foreground">
                        <strong>1000-1300kr + moms per månad</strong><br />
                        Priset beror på hur många som delar rummet
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Vad ingår i hyran</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Tillgång</h3>
                    <p className="text-muted-foreground">
                      Jobba när det passar dig bäst med fullständig tillgång dygnet runt
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Wifi className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Internet</h3>
                    <p className="text-muted-foreground">
                      Internet ingår i hyran
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Coffee className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Kök & Lunch</h3>
                    <p className="text-muted-foreground">
                      Fullt utrustat kök och lunch/mötesrum för dina behov
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Fräscha lokaler</h3>
                    <p className="text-muted-foreground">
                      Moderna och välskött arbetsmiljö med alla faciliteter
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Lounge</h3>
                    <p className="text-muted-foreground">
                      Avkopplande lounge-område för pausen eller informella möten
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Toaletter</h3>
                    <p className="text-muted-foreground">
                      Rena och moderna toalettfaciliteter finns alltid tillgängliga
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="shadow-medium bg-section-gradient">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Intresserad av att hyra en plats?</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Kontakta oss så berättar vi mer om våra lediga platser och 
                    hjälper dig att komma igång.
                  </p>
                  <Link to="/kontakt">
                    <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-smooth gap-2">
                      Kontakta oss
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HyrPlats;
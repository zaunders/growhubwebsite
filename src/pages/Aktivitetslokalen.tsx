import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Clock, Users } from "lucide-react";

const Aktivitetslokalen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Aktivitetslokalen
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              En dedikerad träningslokal för martial arts och mental fitness, 
              som för närvarande hyrs ut till Söderåsen BJJ och Mental Fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Current Tenant Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Nuvarande hyresgäst</CardTitle>
                <CardDescription className="text-lg">
                  Söderåsen BJJ och Mental Fitness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    En professionell träningsanläggning som erbjuder Brazilian Jiu-Jitsu 
                    och mental träning för alla nivåer.
                  </p>
                  <Button asChild variant="outline" className="gap-2">
                    <a 
                      href="https://soderasenbjj.se/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Besök deras hemsida
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Space Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Lokalens egenskaper</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Strategisk placering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Centralt belägen med god tillgänglighet för alla deltagare.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Rymlig yta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Designad för gruppträning och individuell utveckling.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Flexibla tider</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Möjlighet till träning på olika tider för att passa alla scheman.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Intresserad av lokalen?</h2>
            <p className="text-muted-foreground mb-8">
              Kontakta oss för information om framtida tillgänglighet 
              eller andra träningsrelaterade aktiviteter.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-smooth">
              Kontakta oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aktivitetslokalen;
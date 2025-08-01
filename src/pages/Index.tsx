import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Coffee, Calendar, Zap, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Coffee,
      title: "Kontor, mötesrum och kök",
      description: "Fullt utrustade arbetsmiljöer och gemensamma utrymmen"
    },
    {
      icon: Calendar,
      title: "24/7 Tillgång",
      description: "Jobba när det passar dig bäst, alla dagar"
    },
    {
      icon: Users,
      title: "Community",
      description: "Träffa likasinnade entreprenörer och kreatörer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Välkommen till Growhub
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Ett modernt coworking-space och kooperativ där kreativitet, 
              samarbete och innovation blomstrar tillsammans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="transition-smooth"
              >
                Hyr plats hos oss
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-smooth"
              >
                Läs mer om Growhub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vad vi erbjuder</h2>
              <p className="text-muted-foreground text-lg">
                Allt du behöver för att vara produktiv och inspirerad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth group">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ett kooperativ för kreativa själar</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Growhub är mer än bara en arbetslokale - vi är en gemenskap av 
                  entreprenörer, freelancers och kreatörer som tror på kraften i samarbete.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Som kooperativ ägs och drivs vi av våra medlemmar, vilket skapar en 
                  unik miljö där alla har en röst och bidrar till vår gemensamma framgång.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Kooperativ</Badge>
                  <Badge variant="secondary">Hållbart</Badge>
                  <Badge variant="secondary">Inkluderande</Badge>
                  <Badge variant="secondary">Innovativt</Badge>
                </div>
                <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                  Bli medlem idag
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Våra värderingar</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-accent">Samarbete</h4>
                    <p className="text-sm text-muted-foreground">Tillsammans når vi längre</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">Hållbarhet</h4>
                    <p className="text-sm text-muted-foreground">Ansvar för framtiden</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Nytänkande som driver utveckling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Redo att bli en del av gemenskapen?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Gå med i Growhub idag och upptäck hur produktivt och inspirerande 
              det kan vara att arbeta i en stödjande kooperativ miljö.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-smooth">
              Kontakta oss för mer information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

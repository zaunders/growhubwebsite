import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Coffee, Calendar, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import coworkingHall from "@/assets/coworking-hall.jpg.asset.json";
import gemenskapLounge from "@/assets/gemenskap-lounge.jpg.asset.json";
import kontorsrum1 from "@/assets/kontorsrum-1.jpg.asset.json";
import motesrum from "@/assets/motesrum.jpg.asset.json";
import kok from "@/assets/kok.jpg.asset.json";
import kontorsrum2 from "@/assets/kontorsrum-2.jpg.asset.json";
import kontorsrum3 from "@/assets/kontorsrum-3.jpg.asset.json";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: gemenskapLounge.url,
    alt: "Gemenskap på Growhub – medlemmar tar en fika i loungen",
  },
  {
    src: coworkingHall.url,
    alt: "Ljus och mysig lounge i Growhubs gemensamma lokal",
  },
  {
    src: kontorsrum1.url,
    alt: "Kontorsrum på Growhub med konst på väggen",
  },
  {
    src: motesrum.url,
    alt: "Ljust mötesrum med bord och stolar",
  },
  {
    src: kok.url,
    alt: "Gemensamt kök med mikro och diskbänk",
  },
  {
    src: kontorsrum2.url,
    alt: "Kontorsplats vid fönstret med krukväxter",
  },
  {
    src: kontorsrum3.url,
    alt: "Sit-stand-bord vid fönstret i ett kontorsrum",
  },
  // Fler bilder läggs enkelt till här när de kommer
];

const ImageSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-soft">
      <div className="relative max-h-[480px] aspect-[16/9]">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              index === current ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 py-4 bg-background">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Visa bild ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-smooth",
              index === current ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const features = [
    {
      icon: Coffee,
      title: "Kontor, mötesrum och kök",
      description: "Fullt utrustade arbetsmiljöer och gemensamma utrymmen",
    },
    {
      icon: Calendar,
      title: "24/7 Tillgång",
      description: "Jobba när det passar dig bäst, alla dagar",
    },
    {
      icon: Users,
      title: "Community",
      description: "Umgås med fina medmänniskor och hitta lokala vänner",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/lovable-uploads/0bf160b1-b47c-4019-b203-f9a6a70957be.png"
                alt="Growhub"
                className="h-40 md:h-48 w-auto bg-transparent border-none outline-none"
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Ett coworking-space och kooperativ mitt i Röstånga som är en plats för kreativitet, samarbete och
              innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="transition-smooth" asChild>
                <Link to="/hyr-plats">Hyr plats hos oss</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="transition-smooth" asChild>
                <Link to="/growhubs-historia">Läs mer om Growhub</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bildspel */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ImageSlideshow />
          </div>
        </div>
      </section>

      {/* Ledig plats-banner */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/hyr-plats"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-section-gradient border border-primary/20 rounded-lg shadow-soft hover:shadow-medium transition-smooth px-6 py-5"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground text-center sm:text-left">
                Nu kommer strax en plats bli ledig hos oss!
              </p>
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium whitespace-nowrap group">
                Läs mer om platsen
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vad vi erbjuder</h2>
              <p className="text-muted-foreground text-lg">Allt du behöver för att vara produktiv och inspirerad</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth group">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
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
                <h2 className="text-3xl font-bold mb-6">Ett kooperativt mötesplats i Röstånga</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Growhub är mer än bara ett kontor. Vi huserar en inköpsförening för fantastisk mat, många lokala möten
                  och lokalen är öppen för socialt häng på kvällar och helger.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Growhub är ett kooperativ som finns till för att skapa förutsättningar oss i byn Röstånga att arbeta i
                  en fin och produktiv miljö tillsammans. Föreningen drivs av hyresgästerna. Välkommen!
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Kooperativ</Badge>
                  <Badge variant="secondary">Hållbart</Badge>
                  <Badge variant="secondary">Inkluderande</Badge>
                  <Badge variant="secondary">Innovativt</Badge>
                </div>
                <Button className="bg-primary hover:bg-primary/90 transition-smooth" asChild>
                  <a href="/kontakt">Kontakta oss om du vill skapa tillsammans med oss</a>
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Vilka är vi?</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Vi som sitter på Growhub representerar en bred mix av kompetenser och passioner som sträcker sig
                    över många olika områden:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Lokal utveckling</Badge>
                    <Badge variant="outline">Energi</Badge>
                    <Badge variant="outline">Ekonomi</Badge>
                    <Badge variant="outline">Arkitektur</Badge>
                    <Badge variant="outline">Mjukvaruutveckling</Badge>
                    <Badge variant="outline">Terapi</Badge>
                    <Badge variant="outline">Mat</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    Vi är en spännande och varm grupp av människor med massor av kunskaper vi tycker om att dela med oss
                    av!
                  </p>
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
              Gå med i Growhub idag och upptäck hur produktivt och inspirerande det kan vara att arbeta i en stödjande
              kooperativ miljö.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-smooth" asChild>
              <a href="/kontakt">Kontakta oss för mer information</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

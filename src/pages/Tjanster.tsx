import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Target, BookOpen, Puzzle, MessageCircle } from "lucide-react";

const Tjanster = () => {
  const services = [
    {
      icon: Users,
      title: "Facilitering av workshops",
      description: "Professionell facilitering av kreativa workshops och brainstormingsessioner för team och organisationer.",
      features: ["Gruppfacilitering", "Kreativa metoder", "Strukturerad process", "Actionable resultat"],
      color: "bg-primary"
    },
    {
      icon: Lightbulb,
      title: "Lärupplevelser",
      description: "Skräddarsydda lärupplevelser som inspirerar och utvecklar både individer och team.",
      features: ["Interaktiv design", "Personlig utveckling", "Teambuilding", "Kompetenshöjning"],
      color: "bg-accent"
    },
    {
      icon: Target,
      title: "Strategisk planering",
      description: "Guidning genom strategiska planeringsprocesser för hållbar utveckling och tillväxt.",
      features: ["Visionsskapande", "Målsättning", "Roadmap-utveckling", "Uppföljning"],
      color: "bg-hero-gradient"
    },
    {
      icon: BookOpen,
      title: "Utbildningsprogram",
      description: "Omfattande utbildningsprogram inom ledarskap, kommunikation och samarbete.",
      features: ["Ledarskapsträning", "Kommunikation", "Konflikthantering", "Teamdynamik"],
      color: "bg-accent-gradient"
    },
    {
      icon: Puzzle,
      title: "Problemlösning",
      description: "Innovativa metoder för att lösa komplexa utmaningar och hitta kreativa lösningar.",
      features: ["Design thinking", "Systemtänk", "Innovationsprocesser", "Collaborative lösningar"],
      color: "bg-primary"
    },
    {
      icon: MessageCircle,
      title: "Processkonsultation",
      description: "Experthjälp för att förbättra organisatoriska processer och samarbetsmönster.",
      features: ["Processanalys", "Förbättringsförslag", "Implementeringsstöd", "Kontinuerlig utveckling"],
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Våra Tjänster
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Vi erbjuder professionella tjänster inom facilitering och lärupplevelser 
              som hjälper organisationer och individer att växa och utvecklas tillsammans.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="shadow-medium hover:shadow-soft transition-smooth"
              asChild
            >
              <Link to="/kontakt">Boka ett möte</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vad vi erbjuder</h2>
              <p className="text-muted-foreground text-lg">
                Vårt utbud av tjänster är designat för att möta dina specifika behov
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth group">
                  <CardHeader>
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vår process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Upptäckt</h3>
                <p className="text-muted-foreground">
                  Vi börjar med att förstå dina behov, mål och utmaningar genom djupgående samtal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Vi skapar skräddarsydda lösningar och lärupplevelser som passar din kontext.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Leverans</h3>
                <p className="text-muted-foreground">
                  Vi genomför tjänsten med fokus på engagemang, lärande och konkreta resultat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Redo att komma igång?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Låt oss hjälpa dig att skapa meningsfulla lärupplevelser och 
              facilitera framgångsrika förändringsprocesser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-smooth" asChild>
                <Link to="/kontakt">Kontakta oss idag</Link>
              </Button>
              <Button variant="outline" size="lg">
                Läs mer om oss
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tjanster;
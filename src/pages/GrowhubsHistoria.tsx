import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GrowhubsHistoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Growhubs Historia
            </h1>
            <p className="text-xl text-muted-foreground">
              En resa från vision till verklighet
            </p>
          </div>

          <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Vi startade Growhub precis innan covid med ambitionen att bli en livlig 
                  mötesplats för byn och hela regionen.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  När möten blev online, började vi göra mat. Under flera år så har vi på 
                  Growhub odlat microgreens och svamp som vi sålt till lokala kunder och 
                  restauranger. Vi har också erbjudit många lärandetillfällen för folk som 
                  vill lära sig mer om lokal odling.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  För ca 3 år sedan började vi renovera upp lokalerna och bjuda in fler för 
                  att skapa ett kontor tillsammans. Och ungefär samtidigt började vi ett 
                  samarbete med Söderåsens BJJ och Mental Fitness som hyrde in sig vår stora 
                  aktivitetslokal som vi renoverat med hjälpa av ett projekt från länsstyrelsen.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  En fantastisk Dojo för träning är nu en stor del av platsen. Vi ser fram emot 
                  många år med fortsatta samarbeten och massor av nya äventyr.
                </p>
                
                <p className="text-lg leading-relaxed mb-8">
                  Kanske du kommer med nästa spännande utvecklingsmöjlighet för Growhub?
                </p>
                
                <div className="text-center">
                  <p className="text-xl font-semibold mb-6 text-primary">
                    Hör av dig!
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-hero-gradient hover:opacity-90 transition-smooth"
                    asChild
                  >
                    <Link to="/kontakt">Kontakta oss</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrowhubsHistoria;
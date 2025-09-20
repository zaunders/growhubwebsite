import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Users, Lightbulb, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
const Makerspace = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Makerspace</h1>
          <p className="text-xl text-muted-foreground mb-8">
            En plats för att bygga, hacka och leka med teknologi tillsammans
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-semibold">En ny teknisk rörelse i Röstånga!</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                I Oktober 2025 så bildas ett makerspace på Growhub i Röstånga.
              </p>
              <p className="text-lg leading-relaxed">
                Makerspacet drivs av en grupp människor som vill bygga, hacka och leka med teknologi tillsammans. Det är en plats för både individuella och kollektiva projekt som sträcker sig från att skapa lokala meshnätverk i byn, sätta upp lokal AI infrastruktur till att bygga egna spelupplevelser.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Gemenskap</h3>
                </div>
                <p className="text-muted-foreground">
                  Makerspacet har ett antal grundande medlemmar och kommer också att ha ett antal öppna träffar och workshops under hösten och kommande året.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">För alla åldrar</h3>
                </div>
                <p className="text-muted-foreground">
                  Det är ett utrymme för både unga och vuxna, den enda gemensamma nämnaren är intresse och nyfikenhet kring att skapa med hjälp av olika sorters teknologi.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Vill du vara med och skapa?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Om du är intresserad av att samskapa makerspacet så skicka ett meddelande i kontaktformuläret.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Hör gärna av dig om detta kittlar ditt intresse!
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Makerspace;
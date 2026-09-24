import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Wifi, Coffee, Users, Send, Leaf, Home, Phone, Calendar } from "lucide-react";
import annonsBild from "@/assets/hyr-plats-annons.jpg.asset.json";


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
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Annons */}
            <Card className="shadow-medium overflow-hidden mb-16">
              <div className="grid md:grid-cols-2">
                <img 
                  src={annonsBild.url} 
                  alt="Ledig arbetsplats vid fönstret på Growhub i Röstånga"
                  className="h-full w-full object-cover"
                />
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent-gradient px-4 py-1.5 text-sm font-semibold text-white mb-4">
                    <Leaf className="h-4 w-4" />
                    En plats blir ledig 1/12 2026
                  </span>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Coworkingplats i hjärtat av Röstånga
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vi är just nu 7 personer som delar på en ljus och trivsam lokal 
                    på cirka 150 kvm i centrala Röstånga. Nu har du möjlighet att 
                    ta en av platserna i våra delade kontorsrum.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-5 w-5 text-primary" />
                      Tillträde från 1 december 2026
                    </p>
                    <p className="flex items-center gap-2 text-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      Per Gummessons väg 5, Röstånga
                    </p>
                    <p className="flex items-center gap-2 text-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      Tillgång till lokalen dygnet runt, alla dagar
                    </p>
                    <p className="flex items-center gap-2 text-foreground font-semibold">
                      <Home className="h-5 w-5 text-primary" />
                      1 300 kr per månad
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Hör gärna av dig om du är nyfiken eller vill komma förbi och tittal!
                  </p>
                </CardContent>
              </div>
            </Card>


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
                    <h3 className="font-semibold text-lg mb-2">Fiberinternet</h3>
                    <p className="text-muted-foreground">
                      Fiberinternet ingår i hyran
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

            {/* Ansökningsformulär */}
            <Card className="shadow-medium bg-section-gradient">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  Ansök om en plats
                </h2>
                <p className="text-muted-foreground mb-8 text-lg text-center max-w-2xl mx-auto">
                  Intresserad av att hyra platsen? Fyll i formuläret nedan så hör vi av oss 
                  så kan du komma förbi och titta på platsen.
                </p>
                <form 
                  action="https://formspree.io/f/meozlqwg" 
                  method="POST" 
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <input type="hidden" name="_subject" value="Ansökan om kontorsplats på Growhub" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="applicantName">Namn</Label>
                      <Input id="applicantName" name="name" placeholder="Ditt namn" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applicantEmail">E-post</Label>
                      <Input id="applicantEmail" name="email" type="email" placeholder="din@email.se" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applicantPhone">Telefon (valfritt)</Label>
                    <Input id="applicantPhone" name="phone" type="tel" placeholder="070-123 45 67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applicantMessage">Meddelande</Label>
                    <Textarea 
                      id="applicantMessage" 
                      name="message"
                      placeholder="Berätta kort om dig själv, vad du arbetar med och vad du är nyfiken på..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 transition-smooth gap-2">
                    <Send className="h-4 w-4" />
                    Skicka ansökan
                  </Button>
                </form>
                <p className="text-muted-foreground text-sm text-center mt-6">
                  Du kan också ringa oss: Viktor 0733-90 70 11
                </p>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>
    </div>
  );
};


export default HyrPlats;

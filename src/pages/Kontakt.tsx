import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Kontakt = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Kontakta Growhub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Vi skulle älska att höra från dig! Hör av dig så kan vi prata om 
              hur vi kan skapa något fantastiskt tillsammans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Skicka ett meddelande</CardTitle>
                  <CardDescription className="text-base">
                    Fyll i formuläret så återkommer vi till dig så snart som möjligt.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/meozlqwg" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Förnamn</Label>
                        <Input id="firstName" name="firstName" placeholder="Ditt förnamn" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Efternamn</Label>
                        <Input id="lastName" name="lastName" placeholder="Ditt efternamn" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-post</Label>
                      <Input id="email" name="email" type="email" placeholder="din@email.se" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (valfritt)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="070-123 45 67" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Ämne</Label>
                      <Input id="subject" name="subject" placeholder="Vad handlar ditt meddelande om?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Berätta mer om ditt intresse eller dina frågor..."
                        className="min-h-[120px]"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-hero-gradient hover:opacity-90 transition-smooth gap-2">
                      <Send className="h-4 w-4" />
                      Skicka meddelande
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Kom och hälsa på!</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Vi älskar att träffa nya människor och diskutera spännande projekt. 
                    Våra dörrar är alltid öppna för kreativa samarbeten.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Besöksadress</h3>
                          <p className="text-muted-foreground">
                            Per Gummessonsväg 5<br />
                            268 68 Röstånga
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">E-post</h3>
                          <p className="text-muted-foreground">
                            kontakt@growhub.se
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
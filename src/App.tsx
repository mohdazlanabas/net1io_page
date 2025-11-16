import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Phone, Mail, MapPin, Users, Target, Briefcase, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function App() {
  const coreServices = [
    {
      category: "Engineering Excellence",
      services: ["Civil, Mechanical & Electrical Engineering", "Energy Efficiency & Auditing", "LEED Certification", "Lean Six Sigma Performance Management"]
    },
    {
      category: "Technology Integration",
      services: ["IT Systems & Networking", "Cloud Infrastructure", "Digital Transformation", "System Integration"]
    },
    {
      category: "Strategic Advisory",
      services: ["Mergers & Acquisitions", "Post-Merger Integration", "Strategic Planning", "Performance Optimization"]
    },
    {
      category: "Leadership Development",
      services: ["Executive Coaching", "Leadership Training", "Neuro Linguistic Programming", "Human Design", "Project & Contract Management"]
    }
  ];

  const sectors = [
    "Oil & Gas", "Waste To Energy", "Banking & Financial Services", 
    "Automotive", "Construction", "Facilities Management"
  ];

  const credentials = [
    "Cambridge University Engineering & Business Graduates",
    "Western Michigan University Alumni",
    "Macquarie University Distinguished Alumni",
    "25+ Years Average Team Experience",
    "Global Fortune 500 Company Experience",
    "South East Asia Market Expertise"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763008918/net1io_logo_f245yi.png"
            alt="Net1io team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Net<span className="text-accent">1</span>io
            </h1>
            <div className="text-lg md:text-2xl mb-6 md:mb-8 opacity-90">
              Boutique Consultancy Excellence
            </div>
          </div>

          <div className="text-sm md:text-xl mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4 md:mb-6">
              Transforming organizations through comprehensive integration of technical expertise,
              business strategy, technology innovation, and human capital optimization.
              Delivering International caliber insights with boutique agility across South East Asia.
            </p>
            <p>
              From Fortune 500, emerging enterprises to Small Medium Enterprise, we architect sustainable growth
              through engineering excellence, strategic leadership, and operational transformation, that is bold yet achievable for our clients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg w-full sm:w-auto">
              <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              <span className="truncate">azlan@net1io.com</span>
            </Button>
            <Button size="lg" className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg w-full sm:w-auto">
              <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              +62 817 691 7122
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-6 md:mb-8">
              <Badge variant="secondary" className="px-6 py-3 text-sm md:text-lg">
                Boutique Excellence
              </Badge>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Integrated Organizational Transformation</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Net1io specializes in the seamless integration of organizational components across technical,
              business, technology, and human capital dimensions. Our boutique approach ensures personalized
              attention while delivering enterprise-grade solutions that drive measurable transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl">Strategic Integration</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Holistic approach combining engineering excellence, business strategy,
                  and human capital optimization for sustainable organizational growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl">Executive Caliber</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Consulting and coaching services spanning from Senior Executive levels
                  to Board-level engagements with proven track record across industries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl">Global Expertise</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Deep South East Asia market knowledge with global Fortune 500 experience,
                  ensuring world-class solutions tailored to regional dynamics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Comprehensive Service Portfolio</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated approach spans four core competency areas, delivering end-to-end
              solutions that address every aspect of organizational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
            {coreServices.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-3">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758448182583-8871f8eb43c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGluZHVzdHJpYWwlMjBwcm9qZWN0fGVufDF8fHx8MTc1ODY0NTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering industrial project"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4 md:px-6">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Engineering Excellence Meets Strategic Vision</h3>
                <p className="text-sm md:text-lg opacity-90">
                  From LEED certification and energy efficiency auditing to M&A integration and
                  leadership development, we deliver measurable results across every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Credentials & Sectors */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Team Credentials */}
            <div>
              <div className="mb-6 md:mb-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <Badge variant="secondary" className="px-6 py-3 text-sm md:text-base">
                    World-Class Team
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Distinguished Academic & Professional Pedigree</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Our team comprises elite Engineering and Business graduates from globally renowned
                  institutions, each bringing over 25 years of hands-on experience across Fortune 500
                  enterprises and specialized consulting engagements throughout South East Asia.
                </p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg border">
                    <Award className="h-5 md:h-6 w-5 md:w-6 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div>
              <div className="mb-6 md:mb-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <Badge variant="secondary" className="px-6 py-3 text-sm md:text-base">
                    Industry Focus
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Sector Expertise & Market Leadership</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Deep domain expertise across critical industry verticals, with proven success
                  in complex transformational projects spanning traditional industries and
                  emerging sustainable energy sectors.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {sectors.map((sector, index) => (
                  <Card key={index} className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                    <Briefcase className="h-6 md:h-8 w-6 md:w-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="font-medium text-xs md:text-sm">{sector}</div>
                  </Card>
                ))}
              </div>

              <Card className="p-5 md:p-6 bg-primary text-white">
                <div className="text-center">
                  <MapPin className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold mb-2 text-base md:text-lg">South East Asia Focus</h4>
                  <p className="text-xs md:text-sm opacity-90">
                    Primary markets: Indonesia & Malaysia with extensive
                    regional network and global best practices implementation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-6 md:mb-8">
              <Badge variant="secondary" className="px-6 py-3 text-sm md:text-lg">
                Trusted Partnerships
              </Badge>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Our Valued Clients</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proud to serve industry leaders across South East Asia, delivering excellence
              through every engagement from Fortune 500 enterprises to dynamic SMEs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Petronas', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/petronas_paundo.jpg' },
              { name: 'Gas Malaysia', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/gasm_qapzj0.png' },
              { name: 'Bechtel', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/bechtel_kiwav3.png' },
              { name: 'GE', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/ge_reh0iw.png' },
              { name: 'Eaton', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/eaton_rhykj9.png' },
              { name: 'Proton', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/proton_wrahdf.png' },
              { name: '3M', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276077/threem_iw1pce.png' },
              { name: 'AmBank', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/ambank_mp6dpf.png' },
              { name: 'Telkomsel', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/telkomsel_opry4g.jpg' },
              { name: 'UEM Group', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/uemg_ofsoe4.png' },
              { name: 'Transwater', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276077/transwater_wjaqtf.png' },
              { name: 'KOC', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/koc_ytghs4.jpg' },
              { name: 'Operon', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/operon_lxj6cv.jpg' },
              { name: 'Iskandar', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/iskandar_a8vk5t.jpg' },
              { name: 'MPC', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/mpc_ok6gfa.png' },
              { name: 'LSI', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/lsi_pdttka.png' },
              { name: 'Greenviro', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276076/green_gi6whw.png' },
              { name: 'Shell', url: 'https://res.cloudinary.com/dpp2n0jkk/image/upload/v1763276075/shell_jjtkcv.jpg' },
            ].map((client, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-3 md:p-5 bg-white rounded-lg border hover:border-primary transition-all duration-300 hover:shadow-md h-20 md:h-28 lg:h-32"
              >
                <ImageWithFallback
                  src={client.url}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-base md:text-lg text-muted-foreground">
              <br />
              Building lasting relationships through exceptional delivery and measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1682873308463-cb09e2224be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHNreWxpbmV8ZW58MXx8fHwxNzU4NjQ1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Global business skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Global Standards, Regional Excellence</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">25+</div>
              <div className="text-sm md:text-lg">Years Average Experience</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">100%</div>
              <div className="text-sm md:text-lg">Financial and Project Closure Project Consultation</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">100%</div>
              <div className="text-sm md:text-lg">Client Success Rate</div>
            </div>
          </div>
          <p className="text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
            From start-up acceleration to enterprise transformation, from SME growth strategies
            to Fortune 500 optimization programs, Net1io delivers consistent, measurable results
            that exceed expectations and drive sustainable competitive advantage.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Transform Your Organization Today</h2>
          <p className="text-base md:text-xl mb-8 md:mb-12 opacity-90 leading-relaxed">
            Partner with Net1io for comprehensive organizational transformation.
            Contact our Principal Consultant to discuss your specific requirements
            and discover how our integrated approach can accelerate your success.
          </p>

          <Card className="bg-white text-primary p-6 md:p-8 max-w-2xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Azlan Abas</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">Principal Consultant</p>
              </div>

              <Separator />

              <div className="space-y-3 md:space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white text-sm md:text-base py-3 md:py-4"
                  onClick={() => window.location.href = 'mailto:azlan@net1io.com'}
                >
                  <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  <span className="truncate">azlan@net1io.com</span>
                  <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base py-3 md:py-4"
                  onClick={() => window.location.href = 'tel:+628176917122'}
                >
                  <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  +62 817 691 7122
                  <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Button>
              </div>

              <div className="text-center text-xs md:text-sm text-muted-foreground pt-2 md:pt-4">
                Serving Fortune 500 companies and SMEs across South East Asia
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-2xl font-bold mb-2">
            Net<span className="text-accent">1</span>io
          </div>
          <p className="text-sm opacity-75">
            Boutique Consultancy Excellence • South East Asia • Global Standards
          </p>
        </div>
      </footer>
    </div>
  );
}
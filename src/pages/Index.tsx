import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X, Scale, Wrench, Package, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ImageGallery } from "@/components/ImageGallery";

import heroImage from "@/assets/hero-truck-scale.jpg";
import partsImage from "@/assets/scale-parts.jpg";
import calibrationImage from "@/assets/calibration-service.jpg";
import scalesImage from "@/assets/scales-variety.jpg";
import galleryMaintenance from "@/assets/gallery-maintenance.jpg";
import galleryWeights from "@/assets/gallery-weights.jpg";
import galleryWarehouse from "@/assets/gallery-warehouse.jpg";
import galleryDisplay from "@/assets/gallery-display.jpg";
import galleryPlatform from "@/assets/gallery-platform.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const galleryImages = [
    { src: heroImage, alt: "Balança rodoviária com caminhão", title: "Balanças Rodoviárias" },
    { src: scalesImage, alt: "Variedade de balanças industriais", title: "Diversos Tipos de Balanças" },
    { src: galleryMaintenance, alt: "Manutenção de balança industrial", title: "Serviço de Manutenção" },
    { src: galleryWeights, alt: "Peso de calibração em balança digital", title: "Calibração de Precisão" },
    { src: galleryWarehouse, alt: "Balanças de piso em galpão industrial", title: "Balanças para Galpões" },
    { src: partsImage, alt: "Peças e componentes para balanças", title: "Peças e Componentes" },
    { src: galleryDisplay, alt: "Display digital de balança", title: "Displays Digitais" },
    { src: galleryPlatform, alt: "Plataforma de balança com células de carga", title: "Células de Carga" },
    { src: calibrationImage, alt: "Técnico calibrando balança", title: "Calibração Certificada" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">BalançasPro</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors">
                Produtos
              </button>
              <button onClick={() => scrollToSection("precos")} className="text-foreground hover:text-primary transition-colors">
                Preços
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors">
                Contato
              </button>
              <Button onClick={() => scrollToSection("contato")}>Solicitar Orçamento</Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection("servicos")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection("produtos")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
                Produtos
              </button>
              <button onClick={() => scrollToSection("precos")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
                Preços
              </button>
              <button onClick={() => scrollToSection("contato")} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">
                Contato
              </button>
              <Button onClick={() => scrollToSection("contato")} className="w-full">Solicitar Orçamento</Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Caminhão em balança rodoviária" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-background">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Manutenção e Calibração de Balanças Industriais
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-background/90">
              Serviços especializados para balanças de todos os tamanhos. Precisão e confiabilidade garantidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("servicos")} className="bg-background/20 backdrop-blur-sm border-background text-background hover:bg-background/30">
                Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para manutenção, calibração e fornecimento de peças
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Manutenção Preventiva</CardTitle>
                <CardDescription>
                  Manutenção regular para garantir o funcionamento perfeito de suas balanças
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Inspeção completa dos equipamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Limpeza e ajustes técnicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Relatório detalhado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Calibração Certificada</CardTitle>
                <CardDescription>
                  Calibração com certificado rastreável ao INMETRO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Calibração com padrões certificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Certificado de calibração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Atendimento em todo Brasil</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Venda de Peças</CardTitle>
                <CardDescription>
                  Peças originais e compatíveis para todas as marcas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Células de carga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Indicadores digitais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Plataformas e acessórios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Galeria de Equipamentos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira nossos equipamentos, serviços e peças em detalhes. Clique nas imagens para ampliar.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Preços Competitivos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Valores justos e transparentes para cada tipo de serviço
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Calibração Básica</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">A partir de R$ 350</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Balanças até 500kg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Certificado de calibração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Validade de 12 meses</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection("contato")}>
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Manutenção Completa</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">A partir de R$ 650</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Manutenção preventiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Calibração certificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Relatório técnico completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Garantia de 6 meses</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection("contato")}>
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Balanças Rodoviárias</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">Sob Consulta</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Calibração in loco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Certificado INMETRO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Manutenção especializada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Atendimento emergencial</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection("contato")}>
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender sua empresa com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <img src={calibrationImage} alt="Serviço de calibração" className="rounded-lg shadow-xl mb-8" />
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 98765-4321</p>
                    <p className="text-muted-foreground">(11) 3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@balancaspro.com.br</p>
                    <p className="text-muted-foreground">vendas@balancaspro.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Rua Industrial, 1234</p>
                    <p className="text-muted-foreground">São Paulo - SP, 01234-567</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Descreva suas necessidades..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">BalançasPro</span>
              </div>
              <p className="text-background/80">
                Especialistas em manutenção, calibração e venda de peças para balanças industriais.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2 text-background/80">
                <li>Manutenção Preventiva</li>
                <li>Calibração Certificada</li>
                <li>Venda de Peças</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Produtos</h3>
              <ul className="space-y-2 text-background/80">
                <li>Balanças Industriais</li>
                <li>Balanças Rodoviárias</li>
                <li>Células de Carga</li>
                <li>Indicadores Digitais</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-background/80">
                <li>(11) 98765-4321</li>
                <li>contato@balancaspro.com.br</li>
                <li>Seg - Sex: 8h às 18h</li>
                <li>Sáb: 8h às 12h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 BalançasPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

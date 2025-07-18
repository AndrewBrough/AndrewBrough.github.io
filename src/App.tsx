import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { ArrowDown, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Sample project data - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack web application for small businesses",
      image: "https://placehold.co/400x250/374151/FFFFFF?text=E-commerce",
      link: "#"
    },
    {
      id: 2,
      title: "Inventory Management",
      description: "Real-time inventory tracking system",
      image: "https://placehold.co/400x250/374151/FFFFFF?text=Inventory",
      link: "#"
    },
    {
      id: 3,
      title: "Customer Portal",
      description: "Client-facing dashboard and services",
      image: "https://placehold.co/400x250/374151/FFFFFF?text=Portal",
      link: "#"
    }
  ];

  const services = [
    "Scalable web applications for small businesses at affordable prices",
    "Custom e-commerce solutions with modern UI/UX",
    "Database design and optimization",
    "API development and integration",
    "Mobile-responsive design and development",
    "Performance optimization and SEO",
    "AI-powered features and automation"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://placehold.co/200x200/374151/FFFFFF?text=AB" 
              alt="Andrew Brough" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Andrew Brough
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Web Developer & Digital Solutions Specialist
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hey there! I build scalable web applications that help small businesses grow. 
              I focus on creating affordable, modern solutions that actually work for real people.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <Mail className="w-5 h-5" />
              <a 
                href="mailto:andrew@andrewbrough.ca" 
                className="text-primary hover:underline"
              >
                andrew@andrewbrough.ca
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Linkedin className="w-5 h-5" />
              <a 
                href="https://linkedin.com/in/andrewbrough" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Github className="w-5 h-5" />
              <a 
                href="https://github.com/AndrewBrough" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Andrew Brough. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
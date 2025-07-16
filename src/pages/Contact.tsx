import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_uv2a1x9',
        'template_7v0b6ns',
        formRef.current,
        'xw2Vgq0q0s7Y2QVWy'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          alert('❌ Failed to send message.');
          console.error(error);
        }
      );
  };

  const teamMembers = [
    {
      name: 'Meduletu Kamati',
      role: 'Co-Founder',
      email: 'meduletu.kamati@gmail.com',
      Organisation: 'Geotech Hackers'
    },
    {
      name: 'Rutendo Madanyika',
      role: 'Co-Founder',
      email: 'missruru06@gmail.com',
      Organisation: 'Geotech Hackers'
    },
    {
      name: 'Erastus Katanga',
      role: 'Co-Founder',
      email: 'gamefreak148d@gmail.com',
      Organisation: 'Geotech Hackers'
    },
    {
      name: 'Simaneka Anthindi',
      role: 'Co-Founder',
      email: 'simaneka.an.Anthindi@gmail.com',
      Organisation: 'Geotech Hackers'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team of experts for questions about uranium mining,
              educational content, or collaboration opportunities.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input name="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input name="lastName" placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input name="email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input name="subject" placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* General Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@bytecode.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+264 61 111 111 1</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          International University of Management<br />
                          Windhoek, Namibia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Team Members */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMembers.map((member, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4">
                          <div className="flex items-start gap-3">
                            <User className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h4 className="font-semibold">{member.name}</h4>
                              <p className="text-sm text-primary">{member.role}</p>
                              <p className="text-sm text-muted-foreground">{member.Organisation}</p>
                              <p className="text-sm text-muted-foreground">{member.email}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use License</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Permission is granted to temporarily download one copy of the materials on 
                    Namibia Uranium Portal's website for personal, non-commercial transitory viewing only.
                  </p>
                  <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Educational Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The educational materials provided on this website are for informational purposes only. 
                    While we strive for accuracy, we make no warranties about the completeness, 
                    reliability, or suitability of the information.
                  </p>
                  <p>
                    Users are responsible for verifying information and should consult appropriate 
                    professionals for specific advice related to uranium mining, nuclear energy, 
                    or safety procedures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Conduct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>You agree not to use the website to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Upload or transmit harmful, offensive, or illegal content</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Interfere with the security or functionality of the website</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The materials on Namibia Uranium Portal's website are provided on an 'as is' basis. 
                    Namibia Uranium Portal makes no warranties, expressed or implied, and hereby disclaims 
                    and negates all other warranties including without limitation, implied warranties or 
                    conditions of merchantability, fitness for a particular purpose, or non-infringement 
                    of intellectual property or other violation of rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> legal@namibiauranium.org</p>
                    <p><strong>Address:</strong> Windhoek, Namibia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
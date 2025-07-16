import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    subscribe to our newsletter, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Educational progress and quiz results</li>
                    <li>Usage data and analytics</li>
                    <li>Device and browser information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide educational content and track progress</li>
                    <li>Send important updates and notifications</li>
                    <li>Improve our website and user experience</li>
                    <li>Respond to your questions and provide support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                  <p>
                    We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Educational partners for course delivery</li>
                    <li>Service providers who assist in website operation</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> privacy@namibiauranium.org</p>
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

export default Privacy;
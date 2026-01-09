'use client';

import { useState } from 'react';
import {
  Star, Shield, Clock, Award, FileCheck, AlertTriangle, CheckCircle,
  Scale, Factory, FileText, Phone, ArrowRight, ChevronRight, Mail,
  BadgeCheck, Zap, Users, TrendingUp
} from 'lucide-react';
import { useTracking } from '@/hooks';
import { cn, scrollToSection } from '@/lib/utils';
import { Button, Container } from '@/components/ui';

// JJCC Group - Tobacco & Vape Compliance Landing Page

const COMPANY = {
  name: 'J&J Compliance Consulting Group',
  shortName: 'J&J',
  phone: '(949) 735-6224',
  address: 'California, USA',
};

// Main Page Component
export default function TobaccoLandingPage() {
  useTracking({
    siteKey: process.env.NEXT_PUBLIC_SITE_KEY,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    pixelId: process.env.NEXT_PUBLIC_PIXEL_ID,
  });

  return (
    <main className="overflow-hidden">
      <StickyNav />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
}

// Sticky Navigation
function StickyNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-18">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J&J</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">J&J</span>
              <span className="text-xl font-light text-gray-500"> Compliance</span>
            </div>
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#c41e3a] transition-colors"
            >
              <div className="w-8 h-8 bg-[#c41e3a]/10 rounded-full flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#c41e3a]" />
              </div>
              <span className="font-medium replacing-number">{COMPANY.phone}</span>
            </a>
            <Button
              size="lg"
              onClick={() => scrollToSection('form')}
              className="bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#8b1528] shadow-lg shadow-red-500/25"
            >
              <span className="hidden sm:inline">Free Consultation</span>
              <span className="sm:hidden">Get Help</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#8b1528] to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#c41e3a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#c41e3a]/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-white/90">FDA Regulatory Compliance Specialists</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Tobacco & Vape Products
            <span className="block mt-2 bg-gradient-to-r from-[#c41e3a] to-[#e85a6f] bg-clip-text text-transparent">
              FDA Approved
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert PMTA submissions, warning letter response, and regulatory compliance consulting.
            We've helped 100+ tobacco and vape companies navigate FDA regulations successfully.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="xl"
              onClick={() => scrollToSection('form')}
              className="bg-[#c41e3a] text-white hover:bg-[#a01830] shadow-xl shadow-red-500/30 text-lg px-8"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <a
              href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-white bg-white/10 border-2 border-white/30 rounded-md hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="replacing-number">{COMPANY.phone}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { value: '100+', label: 'Clients Served' },
              { value: '95%', label: 'Success Rate' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

// Trust Bar
function TrustBar() {
  const items = [
    { icon: <Shield className="h-5 w-5" />, text: 'FDA Compliance Experts' },
    { icon: <FileCheck className="h-5 w-5" />, text: 'PMTA Specialists' },
    { icon: <Award className="h-5 w-5" />, text: 'ISO 9001 Certified' },
    { icon: <Users className="h-5 w-5" />, text: 'Former FDA Reviewers' },
  ];

  return (
    <section className="py-6 bg-gray-50 border-b border-gray-100">
      <Container>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-600">
              <div className="text-[#c41e3a]">{item.icon}</div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'PMTA Rejection',
      desc: 'FDA rejected your application? We know exactly what went wrong and how to fix it.',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Warning Letters',
      desc: 'Received an FDA warning? We respond within 24 hours to protect your business.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Complex Regulations',
      desc: 'Confused by FDA requirements? We translate regulations into clear action steps.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#c41e3a] font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Facing FDA Compliance Issues?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You're not alone. These are the challenges we solve every day for tobacco and vape companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-[#c41e3a]/30 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('form')}
            className="bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#8b1528]"
          >
            Get Expert Help Now
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <FileCheck className="h-7 w-7" />,
      title: 'PMTA Submission',
      desc: 'Complete Premarket Tobacco Product Application support from strategy to FDA authorization.',
      features: ['Application preparation', 'Scientific studies', 'FDA correspondence'],
    },
    {
      icon: <AlertTriangle className="h-7 w-7" />,
      title: 'Warning Letter Response',
      desc: 'Rapid response to FDA warning letters with proven resolution strategies.',
      features: ['24-hour response', 'Compliance plans', 'FDA negotiations'],
    },
    {
      icon: <Factory className="h-7 w-7" />,
      title: 'Quality Management',
      desc: 'ISO 9001-ready QMS development for tobacco and e-liquid manufacturers.',
      features: ['QMS development', 'Audit preparation', 'SOP documentation'],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'ENDS Compliance',
      desc: 'Comprehensive regulatory support for vapes, e-cigarettes, and ENDS products.',
      features: ['Product registration', 'Label compliance', 'Marketing review'],
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: 'TPMF Registration',
      desc: 'Tobacco Product Manufacturing Facility registration and ongoing compliance.',
      features: ['Facility registration', 'Listing updates', 'Compliance audits'],
    },
    {
      icon: <Scale className="h-7 w-7" />,
      title: 'Regulatory Strategy',
      desc: 'Custom FDA regulatory strategies to accelerate your path to market.',
      features: ['Market analysis', 'Pathway selection', 'Timeline planning'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#c41e3a] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive FDA Compliance Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From PMTA submissions to quality management systems, we handle every aspect of tobacco and vape regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c41e3a]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-xl flex items-center justify-center text-white mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Free Consultation', desc: 'We review your situation and identify the best path forward.' },
    { num: '02', title: 'Custom Strategy', desc: 'Our experts develop a tailored compliance plan for your products.' },
    { num: '03', title: 'Implementation', desc: 'We handle the heavy lifting - documentation, submissions, and FDA communication.' },
    { num: '04', title: 'FDA Approval', desc: 'We guide you through to successful authorization.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#c41e3a] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            How We Get You FDA Approved
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-red-50 mb-4">{step.num}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-red-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Results Section
function ResultsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c41e3a] font-semibold text-sm uppercase tracking-wider">Results That Matter</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              We Don't Just Promise Results. We Deliver Them.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our track record speaks for itself. When you work with JJCC Group, you're partnering with the team that has successfully navigated hundreds of FDA regulatory challenges.
            </p>
            <ul className="space-y-4">
              {[
                'Over 100 successful PMTA submissions',
                '95% warning letter resolution rate',
                'Average 40% faster approval timeline',
                'Former FDA reviewers on our team',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '100+', label: 'PMTAs Filed', icon: <FileCheck className="h-6 w-6" /> },
              { value: '95%', label: 'Success Rate', icon: <TrendingUp className="h-6 w-6" /> },
              { value: '48hr', label: 'Response Time', icon: <Zap className="h-6 w-6" /> },
              { value: '15+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-[#c41e3a] mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      text: "JJCC Group saved our business. After our PMTA was rejected twice, they stepped in and got us approved within 6 months. Their expertise in FDA regulations is unmatched.",
      name: 'Michael R.',
      role: 'E-Liquid Manufacturer',
    },
    {
      text: "When we received an FDA warning letter, we panicked. JJCC responded within hours and had a compliance plan ready by the next day. They know exactly how to handle these situations.",
      name: 'Sarah T.',
      role: 'Vape Brand Owner',
    },
    {
      text: "The QMS implementation was seamless. JJCC built a system that not only passed FDA inspection but actually improved our operations. Worth every penny.",
      name: 'James K.',
      role: 'Tobacco Distributor',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#c41e3a] font-semibold text-sm uppercase tracking-wider">Client Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <section id="form" className="py-20 md:py-28 bg-gradient-to-br from-[#c41e3a] to-[#8b1528]">
        <Container>
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-xl mx-auto text-center shadow-2xl">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              We've received your request. One of our FDA compliance experts will contact you within 24 hours.
            </p>
            <a
              href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 text-[#c41e3a] font-semibold hover:text-blue-700"
            >
              <Phone className="h-4 w-4" />
              <span className="replacing-number">{COMPANY.phone}</span>
            </a>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="form" className="py-20 md:py-28 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get FDA Compliant?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Schedule your free consultation today. Our experts will review your situation and provide a clear path to FDA compliance.
            </p>
            <div className="space-y-4">
              {[
                'Free initial consultation',
                'Custom compliance roadmap',
                'No obligation assessment',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm text-gray-300 mb-2">Prefer to talk now?</p>
              <a
                href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-white font-semibold text-xl hover:text-gray-200 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="replacing-number">{COMPANY.phone}</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="Email *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  placeholder="Phone *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <input
                  type="text" name="company" value={formData.company} onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <select
                name="service" required value={formData.service} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              >
                <option value="">Select Service Needed *</option>
                <option value="pmta">PMTA Submission Support</option>
                <option value="warning">FDA Warning Letter Response</option>
                <option value="qms">Quality Management Systems</option>
                <option value="ends">ENDS & Vape Compliance</option>
                <option value="tpmf">TPMF Registration</option>
                <option value="consulting">Regulatory Strategy Consulting</option>
              </select>
              <textarea
                name="message" rows={3} value={formData.message} onChange={handleChange}
                placeholder="Tell us about your situation..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              />
              <Button
                type="submit"
                size="xl"
                className="w-full bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#8b1528] shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                {!isSubmitting && <ArrowRight className="h-5 w-5 ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Footer Section
function FooterSection() {
  return (
    <footer className="py-12 bg-slate-900 text-gray-400">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">J&J</span>
            </div>
            <div>
              <span className="text-white font-bold">J&J</span>
              <span className="text-gray-500"> Compliance</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://jjccgroup.org/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://jjccgroup.org/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Layout,
  Search,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Code,
} from "lucide-react";

const features = [
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: "Custom Designs",
    description: "Tailored solutions to match your brand identity and goals.",
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "SEO-Optimized",
    description:
      "Boost your online presence with search engine-friendly designs.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile-Friendly",
    description: "Seamless experience across all devices and screen sizes.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Fast & Secure",
    description: "Optimized for speed with top-tier security measures.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Scalable & Easy to Manage",
    description: "Designed for growth with simple management tools.",
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Clean Code",
    description: "Efficient, maintainable, and well-documented code structure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex mb-10"></div>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Our expertise ensures top-quality designs with performance, security,
          and scalability in mind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg h-full bg-card border border-border"
            >
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="mt-4 text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

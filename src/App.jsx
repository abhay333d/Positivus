import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaShareAlt } from "react-icons/fa";
import { SiAmazon, SiDribbble, SiZoom, SiNetflix, SiNotion, SiHubspot } from "react-icons/si";

export default function App() {
  return (
    <div className="bg-white text-[#191A23] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-[#191A23]">
        <h1 className="text-xl font-bold">✕ Positivus</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>
        <Button className="bg-[#B9FF66] text-black rounded-full px-4 py-2">Request a quote</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 py-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Navigating the digital landscape for success</h2>
        <p className="mb-6">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <Button className="bg-black text-white rounded-full px-6 py-3">Book a consultation</Button>
        <div className="flex justify-center gap-4 mt-6">
          <FaShareAlt />
          <FaPlay />
        </div>
      </section>

      {/* Logos Marquee */}
      <motion.div className="overflow-hidden py-4 bg-[#F3F3F3]">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-2xl items-center justify-center"
        >
          <SiAmazon /> <SiDribbble /> <SiHubspot /> <SiNotion /> <SiNetflix /> <SiZoom />
        </motion.div>
      </motion.div>

      {/* Services */}
      <section className="px-4 py-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-[#B9FF66] mb-2">Services</h3>
        <p className="mb-6">We offer a range of services to help businesses grow and succeed online:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border rounded-2xl">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Search engine optimization</h4>
              <Button variant="ghost" className="text-black">Learn more <FaArrowRight className="ml-2" /></Button>
            </CardContent>
          </Card>
          <Card className="border rounded-2xl bg-[#B9FF66]">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Pay-per-click advertising</h4>
              <Button variant="ghost" className="text-black">Learn more <FaArrowRight className="ml-2" /></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Working Process */}
      <section className="px-4 py-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-[#B9FF66] mb-2">Our Working Process</h3>
        <p className="mb-4 text-sm">Step-by-Step Guide to Achieving Your Business Goals</p>
        <div className="space-y-4">
          <Card className="bg-[#B9FF66] rounded-2xl">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">01 Consultation</h4>
              <p className="text-sm mt-2">We discuss your business goals and tailor our services accordingly.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">02 Research and Strategy Development</h4>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-10 bg-[#191A23] text-white">
        <h3 className="text-2xl font-bold text-[#B9FF66] mb-4">Testimonials</h3>
        <div className="flex overflow-x-scroll gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="min-w-[300px] bg-[#191A23] border border-[#B9FF66] rounded-2xl">
              <CardContent className="p-4">
                <p className="text-sm">"We have been working with Positivus for the past year..."</p>
                <p className="mt-2 font-semibold text-[#B9FF66]">John Smith</p>
                <p className="text-xs">Marketing Director at XYZ Corp</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191A23] text-white px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-xl font-bold mb-4">✕ Positivus</h1>
            <nav className="flex flex-col gap-2">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Use Cases</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
            </nav>
          </div>
          <div>
            <h4 className="text-[#B9FF66] mb-2">Contact us:</h4>
            <p>Email: info@positivus.com</p>
            <p>Phone: 855-657-8901</p>
            <p>Address: 1234 Main St, Moonstone City</p>
            <div className="mt-4">
              <Input placeholder="Email" className="mb-2" />
              <Button className="bg-[#B9FF66] text-black w-full">Subscribe to news</Button>
            </div>
          </div>
        </div>
        <div className="text-sm text-center mt-8 border-t pt-4">© 2023 Positivus. All Rights Reserved. <a className="underline ml-2" href="#">Privacy Policy</a></div>
      </footer>
    </div>
  );
}

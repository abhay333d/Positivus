import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SiAmazon, SiDribbble, SiZoom, SiNetflix, SiNotion, SiHubspot } from "react-icons/si";

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1154_7)">
      <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_1154_7">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function PositivusLanding() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-black">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="text-2xl font-bold">Positivus</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Use Cases</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Blog</a>
        </nav>
        <div className="hidden md:block">
          <Button className="border border-[#000000] text-black bg-white rounded-full px-4 py-2 font-semibold hover:bg-[#B9FF66]">Request a quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center px-4 py-16 max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">Navigating the digital landscape for success</h2>
          <p className="mb-8 text-lg">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <Button className="bg-black text-white rounded-full px-6 py-3 font-semibold">Book a consultation</Button>
        </div>
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <img src="./src/assets/illustration.png" alt="Megaphone graphic" className="w-full" />
        </div>
      </section>

      {/* Logos Marquee */}
      <div className="py-4 border-t border-b border-black bg-white">
        <div className="flex flex-wrap justify-center items-center gap-12 text-2xl">
          <SiAmazon /> <SiDribbble /> <SiHubspot /> <SiNotion /> <SiNetflix /> <SiZoom />
        </div>
      </div>

      {/* Services */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-[#B9FF66] mb-4">Services</h3>
        <p className="mb-10 text-lg">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-black rounded-2xl bg-white">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl mb-4">Search engine optimization</h4>
              <Button variant="ghost" className="text-black flex items-center">Learn more <FaArrowRight className="ml-2" /></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-[#B9FF66] text-black">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl mb-4">Pay-per-click advertising</h4>
              <Button variant="ghost" className="text-black flex items-center">Learn more <FaArrowRight className="ml-2" /></Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
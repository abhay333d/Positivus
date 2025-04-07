import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { motion } from "framer-motion";
import { FaArrowRight, FaBars } from "react-icons/fa";

const LogoIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1154_7)">
      <path
        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1154_7">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function PositivusLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-10 md:px-32">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="text-2xl font-bold">Positivus</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Use Cases
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </nav>
        <div className="hidden md:block">
          <Button className="border border-[#000000] !text-black bg-white rounded-xl px-4 py-2 text-sm hover:bg-[#B9FF66]">
            Request a quote
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden p-6 border-b border-black">
          <nav className="flex flex-col gap-4 text-sm">
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Use Cases
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <Button className="border-[#000000] !text-black bg-white rounded-xl px-4 py-2 text-sm hover:bg-[#B9FF66] w-full">
              Request a quote
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center px-4 py-4 max-w-6xl mx-auto">
        <div className="max-w-md px-4">
          <h2 className="text-4xl font-bold mb-6">
            Navigating the digital landscape for success
          </h2>
          <p className="mb-8 text-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button className="bg-black text-white rounded-xl px-6 py-3 font-semibold">
            Book a consultation
          </Button>
        </div>
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <img
            src="./src/assets/illustration.png"
            alt="Megaphone graphic"
            className="w-full"
          />
        </div>
      </section>

      {/* Logos Marquee */}
      <div className="bg-white overflow-hidden py-6">
        <motion.div
          className="flex whitespace-break-spaces w-max h-10"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <img
              key={index}
              src="./src/assets/logos.png"
              alt="Client logos"
              className="h-5 md:h-9 grayscale"
            />
          ))}
        </motion.div>
      </div>

      {/* Services */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-10 w-xl">
          <h3 className="text-2xl font-semibold text-[#B9FF66] mb-4">
            <span className="bg-[#B9FF66] text-black py-0.5 px-1 rounded-md">
              Services
            </span>
          </h3>
          <p className="mb-6 text-sm">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 h-60">
          <Card className="border border-black rounded-4xl bg-white shadow-md">
            <CardContent className="p-6 flex h-full">
              <div className="flex-1 flex flex-col justify-between">
                <h4 className="font-semibold text-xl mb-4 mt-3 ml-4 inline-block">
                  <span className="bg-[#B9FF66] px-1">
                    Search engine optimization
                  </span>
                </h4>
                <Button
                  variant="ghost"
                  className="text-black flex items-center mt-auto mr-8"
                >
                  <span className="bg-black text-white p-2 rounded-full mr-2">
                    <FaArrowRight />
                  </span>
                  Learn more
                </Button>
              </div>
              <div className="flex-1 flex justify-end items-end mb-8">
                <img
                  src="./src/assets/tokyo-magnifier.png"
                  alt="SEO"
                  className="max-h-35 object-contain"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="border border-black rounded-4xl bg-[#B9FF66] shadow-md">
            <CardContent className="p-6 flex h-full">
              <div className="flex-1 flex flex-col justify-between">
                <h4 className="font-semibold text-xl mb-4 mt-3 ml-4 inline-block">
                  <span className="bg-white px-1">
                    Search engine optimization
                  </span>
                </h4>
                <Button
                  variant="ghost"
                  className="text-black flex items-center mt-auto mr-8"
                >
                  <span className="bg-black text-white p-2 rounded-full mr-2">
                    <FaArrowRight />
                  </span>
                  Learn more
                </Button>
              </div>
              <div className="flex-1 flex justify-end items-end mb-8">
                <img
                  src="./src/assets/tokyo-selecting.png"
                  alt="SEO"
                  className="max-h-35 object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

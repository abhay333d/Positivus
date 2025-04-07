import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: "Working with Positivus has been an amazing experience. Our social engagement has tripled and we’ve gained valuable insight into our customer base. Highly recommend their services!",
    name: "Sarah Lee",
    title: "CEO at BrightFuture Inc.",
  },
  {
    text: "The team at Positivus are top-notch professionals. Their SEO strategy alone brought us more leads than any other method we’ve tried. Couldn’t be happier.",
    name: "Michael Chen",
    title: "Founder at TechNova",
  },
  {
    text: "Positivus transformed our marketing approach. Their data-driven methods and clear communication set them apart. Sales are up 40%!",
    name: "Emily Davis",
    title: "CMO at FutureTrendz",
  },
  {
    text: "Reliable, creative, and results-focused. That’s how I’d describe the team at Positivus. They’re our go-to for all things digital marketing.",
    name: "David Kim",
    title: "Head of Marketing at NetSolutions",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const triggerFade = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    triggerFade(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    triggerFade(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-6 bg-[#191A23] rounded-3xl">
      {/* Testimonial Bubble */}
      <div
        className={`relative bg-[#191A23] border border-lime-400 px-6 md:px-8 py-6 rounded-3xl text-white transition-opacity duration-300 max-w-xl w-full ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Tail */}
        <div className="hidden sm:block absolute left-16 -bottom-[16.5px] w-8 h-8 bg-[#191A23] border-l border-b border-lime-400 -rotate-45"></div>

        {/* Quote */}
        <p className="text-sm sm:text-base italic mb-4 text-white">
          “{testimonials[current].text}”
        </p>
      </div>

      {/* Author */}
      <div className="text-center">
        <p className="text-lime-400 font-semibold text-base sm:text-lg">
          {testimonials[current].name}
        </p>
        <p className="text-sm text-white/70">{testimonials[current].title}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-6 sm:mt-10">
        <button
          onClick={prevSlide}
          className="text-white hover:text-lime-400 transition"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === i ? "bg-lime-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-white hover:text-lime-400 transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

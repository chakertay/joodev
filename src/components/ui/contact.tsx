"use client";

import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Book a Call Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-10 border border-neutral-800 shadow-xl">
          <div className="h-full flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Talk
              </h2>
              <p className="text-neutral-400 mb-8 text-lg">
                Schedule a call with our team to discuss how we can help transform your business with our solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <Button 
                variant="outline" 
                className="w-full py-6 text-lg bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => window.open("https://calendly.com/axalya", "_blank")}
              >
                Book a Call
              </Button>
              
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+33 09 83 88 83 10</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span>contact@axalya.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                  <span>127 rue Amelot, 75011 Paris</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-neutral-800 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-neutral-400">
                  First Name
                </label>
                <Input
                  id="first-name"
                  type="text"
                  className="w-full bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/50 text-white placeholder-neutral-500"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-neutral-400">
                  Last Name
                </label>
                <Input
                  id="last-name"
                  type="text"
                  className="w-full bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/50 text-white placeholder-neutral-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-400">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/50 text-white placeholder-neutral-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400">
                Your Message
              </label>
              <Textarea
                id="message"
                rows={4}
                className="w-full bg-neutral-800/50 border-neutral-700 focus:border-blue-500 focus:ring-blue-500/50 text-white placeholder-neutral-500"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-white text-black hover:bg-neutral-200 transition-colors duration-300"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}

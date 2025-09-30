"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/global/3d-card";

interface ExpertCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedinUrl: string;
  email: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function ExpertCard({ name, title, description, image, linkedinUrl, email }: ExpertCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-10 border border-neutral-800 shadow-xl w-auto sm:w-[32rem] h-auto group/card">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute top-8 right-8 w-1 h-1 bg-gray-400 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/40 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Profile Image with 3D effect */}
          <CardItem
            translateZ="50"
            className="w-full flex justify-center mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r from-white/20 to-gray-400/20 p-[2px]"
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating sparkles around image */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-white/80" />
              </motion.div>
            </motion.div>
          </CardItem>

          {/* Name with gradient text */}
          <CardItem
            translateZ="60"
            className="text-center mb-3"
          >
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {name}
            </motion.h3>
          </CardItem>
          
          {/* Title with glow effect */}
          <CardItem
            translateZ="40"
            className="text-center mb-6"
          >
            <motion.p 
              className="text-gray-400 font-medium text-xl"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.p>
          </CardItem>

          {/* Description */}
          <CardItem
            translateZ="30"
            className="text-center mb-8"
          >
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg"
              whileHover={{ scale: 1.01 }}
            >
              {description}
            </motion.p>
          </CardItem>

          {/* Social Links with enhanced effects */}
          <CardItem
            translateZ="50"
            className="flex justify-center gap-6"
          >
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-white/20 group/linkedin border border-gray-600"
            >
              <Linkedin className="w-6 h-6" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-gray-300/20 opacity-0 group-hover/linkedin:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.a>
            
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-4 bg-gradient-to-r from-white to-gray-200 rounded-full text-black transition-all duration-300 shadow-lg hover:shadow-gray-400/50 group/email border border-gray-300"
            >
              <Mail className="w-6 h-6" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-white/20 opacity-0 group-hover/email:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function Experts() {
  const experts = [
    {
      name: "Rachid Belabbas",
      title: "Fondateur & CEO",
      description: "Expert en automatisation et transformation digitale avec plus de 10 ans d\'expérience dans l\'optimisation des processus métier.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=192&h=192&fit=crop&crop=face&auto=format&q=80",
      linkedinUrl: "https://linkedin.com/in/rachid-belabbas",
      email: "rachid@axalya.com"
    },
    {
      name: "Zaher",
      title: "Fondateur & CTO",
      description: "Spécialiste en intelligence artificielle et développement de solutions innovantes pour l\'automatisation des entreprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=192&h=192&fit=crop&crop=face&auto=format&q=80",
      linkedinUrl: "https://linkedin.com/in/zaher",
      email: "zaher@axalya.com"
    }
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos Experts
          </motion.h2>
          
          <motion.p 
            className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rencontrez les <span className="text-white font-semibold">fondateurs d&apos;Axalya</span>, 
            experts en automatisation et intelligence artificielle qui transforment l&apos;avenir des entreprises
          </motion.p>
        </motion.div>

        {/* Expert Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {experts.map((expert, index) => (
            <ExpertCard
              key={expert.name}
              name={expert.name}
              title={expert.title}
              description={expert.description}
              image={expert.image}
              linkedinUrl={expert.linkedinUrl}
              email={expert.email}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

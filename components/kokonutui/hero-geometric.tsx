"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  title1 = "Welcome to",
  title2 = "THE HUB",
}: {
  title1?: string
  title2?: string
}) {
  const [showCards, setShowCards] = useState(false)

  // Variants for initial hero text and button
  const heroContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2.8, // Starts after logo animation
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const cardLabels = ["About Mr Ben", "Students MATE", "Teachers MATE", "Media"]

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Full screen fade-out animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-50 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center h-full">
          {/* Logo with Netflix-style fade-in animation, positioned above text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 md:mb-12 inline-block"
          >
            <Image
              src="/images/logo.png"
              alt="Mr. Ben's Classroom Logo"
              width={400} // Base width
              height={100} // Base height
              className="w-64 md:w-80 lg:w-96 h-auto max-w-full" // Responsive scaling
            />
          </motion.div>

          {/* Conditional rendering for Hero Text/Button or Cards */}
          {!showCards ? (
            <motion.div
              key="hero-initial-content"
              initial="hidden"
              animate="visible"
              variants={heroContentVariants}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{title1}</span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                    pacifico.className,
                  )}
                >
                  {title2}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                Your comprehensive educational resource platform. Discover interactive learning materials, engaging blog
                content, and powerful educator tools all in one place.
              </p>

              <Button
                onClick={() => setShowCards(true)}
                className="px-8 py-4 text-lg bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out"
              >
                Enter Site
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="hero-cards-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-full mt-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {cardLabels.map((label, index) => (
                  <Card
                    key={index}
                    className="bg-white/[0.05] border border-white/[0.1] text-white hover:border-indigo-500 transition-colors duration-200"
                  >
                    <a href="#" className="block p-4 text-center">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">{label}</CardTitle>
                      </CardHeader>
                      <CardContent>{/* Optional: Add an icon or brief description here */}</CardContent>
                    </a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

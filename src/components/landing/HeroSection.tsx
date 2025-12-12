import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-background-pan"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32 lg:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 text-balance">
              Stop Wasting Time on Repetitive Tasks
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 text-balance">
              I help small businesses and non-profits reclaim their time by mapping and automating critical processes—from lead handling to data management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button size="lg" asChild className="group">
              <a href="#contact">
                Start Automating
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
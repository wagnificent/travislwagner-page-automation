import { motion } from "framer-motion";
export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl bg-slate-100 p-2">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
                  alt="Travis Wagner"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                About Travis
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate-600">
                <p>
                  Hi, I'm Travis. I'm a process architect and automation specialist with a passion for helping small organizations thrive. I believe that the right systems can unlock incredible potential, freeing up valuable time for innovation and growth.
                </p>
                <p>
                  My approach is simple: I listen, I map, and I build. I take the time to understand your unique challenges and design custom-fit solutions that are reliable, scalable, and easy to maintain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
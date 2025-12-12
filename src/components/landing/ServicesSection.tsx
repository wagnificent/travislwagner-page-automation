import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-24 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How I Can Help
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From untangling complex workflows to building hands-free automations, I provide the expertise to boost your productivity.
            </p>
          </div>
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {SERVICES.map((service) => (
              <motion.div key={service.title} variants={cardVariants}>
                <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="p-8">
                    <div className="mx-auto bg-indigo-100 text-indigo-600 rounded-lg h-12 w-12 flex items-center justify-center">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-6 text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-base text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
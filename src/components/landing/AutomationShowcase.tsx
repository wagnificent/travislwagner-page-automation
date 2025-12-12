import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AUTOMATION_SHOWCASE } from "@/lib/constants";
const FlowCard = ({ title, items }: { title: string; items: { icon: React.ElementType; text: string }[] }) => (
  <Card className="bg-slate-50 border-slate-200 h-full">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-0.5">
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-slate-600">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
const AutomatedFlowCard = ({ title, items }: { title: string; items: { icon: React.ElementType; text: string }[] }) => (
  <Card className="bg-green-50 border-green-200 h-full">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-slate-600">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
export function AutomationShowcase() {
  return (
    <section id="showcase" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-24 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              From Lost Leads to Loyal Clients
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how a simple automation can transform your lead handling process, ensuring no opportunity slips through the cracks.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12">
            <FlowCard title={AUTOMATION_SHOWCASE.before.title} items={AUTOMATION_SHOWCASE.before.items} />
            <div className="hidden lg:flex flex-col items-center justify-center">
              <ArrowRight className="h-12 w-12 text-slate-400" />
            </div>
            <div className="lg:hidden flex items-center justify-center text-slate-400 font-bold my-4">
              TRANSFORMED INTO
            </div>
            <AutomatedFlowCard title={AUTOMATION_SHOWCASE.after.title} items={AUTOMATION_SHOWCASE.after.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
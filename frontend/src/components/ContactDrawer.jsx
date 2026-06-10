import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function ContactDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/v1/leads", formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', email: '', company: '', budget: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Failed to submit form", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] w-full max-w-md h-full bg-[#00A8FF] text-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 id="contact-title" className="text-3xl font-unbounded font-semibold">
                Get<br />Started
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {success ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-white text-[#00A8FF] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold font-unbounded">Thank You!</h3>
                  <p className="mt-2 text-white/80">We have received your message and will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium mb-8 text-white/90">
                    Get your free marketing plan.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-none border-b-2 border-white/30 focus:border-white focus:ring-0 px-4 py-3 text-white placeholder-white/50 rounded-lg outline-none transition-all"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-none border-b-2 border-white/30 focus:border-white focus:ring-0 px-4 py-3 text-white placeholder-white/50 rounded-lg outline-none transition-all"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-none border-b-2 border-white/30 focus:border-white focus:ring-0 px-4 py-3 text-white placeholder-white/50 rounded-lg outline-none transition-all"
                    placeholder="Your Company"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Marketing Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#00A8FF] border-b-2 border-white/30 focus:border-white focus:ring-0 px-4 py-3 text-white rounded-lg outline-none transition-all appearance-none cursor-pointer"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <option value="" className="bg-[#007BFF]">Select a range...</option>
                    <option value="under_1k" className="bg-[#007BFF]">Under $1,000</option>
                    <option value="1k_5k" className="bg-[#007BFF]">$1,000 - $5,000</option>
                    <option value="5k_10k" className="bg-[#007BFF]">$5,000 - $10,000</option>
                    <option value="over_10k" className="bg-[#007BFF]">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-none border-b-2 border-white/30 focus:border-white focus:ring-0 px-4 py-3 text-white placeholder-white/50 rounded-lg outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full border border-white bg-transparent py-4 font-unbounded text-sm font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-[#00A8FF] transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit"} 
                    {!loading && (
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </>
            )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

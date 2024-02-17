import { motion } from "framer-motion";

export const ContactMe = () => {
  return (
    <>
      <motion.section
        className="contactMe"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="contact">DO YOU HAVE</p>
        <p className="contact">SOMETHING IN MIND?</p>
        <a href="mailto:victorrangele819@gmail.com" className="contactMeLink">
          <span className="hover-underline-animation-end">LET'S TALK</span>
        </a>
      </motion.section>
    </>
  );
};

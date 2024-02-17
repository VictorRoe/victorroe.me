import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";
import React from "react";

export const Principal: React.FC = () => {
  interface TextItem {
    type: string;
    text: string;
  }

  const placeholderText: TextItem[] = [
    { type: "heading1", text: "HELLO." },
    {
      type: "heading1",
      text: "I'M VICTOR",
    },
  ];

  const placeholderText2: TextItem[] = [
    {
      type: "title",
      text: "WEB DEVELOPER",
    },
    {
      type: "title",
      text: "Z/OS SYS ADMIN",
    },
    {
      type: "title",
      text: "FREELANCE",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const containerRole = {
    visible: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  return (
    <>
      <div className="flex-nav">
        <img className="logo" src="./LOGO.svg" alt="logo" />
        <img className="menu" src="./Menu.svg" alt="Menu" />
      </div>
      <main className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="tittle">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>
        <div className="flex-arr-rol">
          <motion.img
            className="arrow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.75 }}
            src="./Arrow.svg"
            alt="arrow"
          />
          <motion.div
            initial="hidden"
            whileInView="visibleRole"
            viewport={{ once: true }}
            variants={containerRole}
          >
            <div className="roles">
              <ul>
                {placeholderText2.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <motion.span
        className="scroll"
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
        animate={{ opacity: [0, 1, 0] }}
      >
        SCROLL DOWN
      </motion.span>
    </>
  );
};

import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import AnimatedText from "../animations/AnimatedText";
import { MenuToggle } from "./MenuToggle";

export const Principal: React.FC = () => {
  const query = useMediaQuery("(max-width: 700px)");
  const isMobile = query ? "/cycle-logo.svg" : "/LOGO.svg";
  const [isOpen, toggleOpen] = useCycle(false, true);

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

  const links = [
    { name: "Home", to: "#pico", id: 1 },
    { name: "About", to: "#about", id: 2 },
    { name: "Contact", to: "#contact", id: 3 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        id="main"
        className="menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <nav>
          <AnimatePresence>
            {isOpen && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{
                  width: 400,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.2, duration: 0.3 },
                }}
              >
                <motion.div
                  className="nav-container"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {links.map(({ name, to, id }) => (
                    <motion.a
                      key={id}
                      href={to}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={() => toggleOpen(0)}
                    >
                      {name}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </nav>
        <div className="flex-nav">
          <MenuToggle toggle={() => toggleOpen()} />
          <img className="logo" src={isMobile} alt="logo" />
        </div>
      </motion.div>
      <main className="container">
        <div className="container-1">
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
              src="/Arrow.svg"
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
        </div>
        <div className="container-2">
          <canvas></canvas>
        </div>
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
      </main>
    </>
  );
};

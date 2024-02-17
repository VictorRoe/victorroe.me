import { motion } from "framer-motion";

const birthDate = new Date("2000-03-11");
const calculateAge = (birthDate: Date): number => {
  const currentDate = new Date();
  const differenceInDays = Math.floor(
    (currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const age: number = Math.floor(differenceInDays / 365.25);
  return age;
};

export const AboutMe = () => {
  const age: number = calculateAge(birthDate);

  return (
    <>
      <section className="aboutMe">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex-aboutme">
            <div className="children-1">
              <p>
                I'm a developer and systems administrator based in Colombia. I
                have two years of experience developing web applications
                specialized in the back-end side.
              </p>
              <p>
                I have {age} years old, I love learning about new technologies
                and getting new challenges for my personal development.
              </p>
              <p>If you're interested for freelance work...</p>
              <a className="aboutMeContact" href="https://github.com/VictorRoe">
                <span className="hover-underline-animation">CONTACT ME</span>
              </a>
            </div>
            <div className="children-2"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

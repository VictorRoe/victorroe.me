import React from "react";
import { Variants, motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
}

interface TagMap {
  [key: string]: keyof JSX.IntrinsicElements;
}

interface AnimatedCharactersProps {
  text: string;
  type: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap: TagMap = {
  heading1: "h1",
  title: "li",
  paragraph: "p",
};
const AnimatedCharacters: React.FC<AnimatedCharactersProps> = (props) => {
  const item: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
    visibleRole: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 0.75,
      },
    },
  };

  const splitWords: string[] = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {word.flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;

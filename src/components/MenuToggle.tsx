import { motion } from "framer-motion";

interface PathProps {
  variants: {
    closed: { d: string };
    open: { d: string };
  };
}

interface MenuToggleProps {
  toggle: () => void;
}

const Path: React.FC<PathProps> = ({ ...props }) => (
  <motion.path
    fill="none"
    strokeWidth="2.5"
    stroke="#FFF8F0"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  return (
    <button onClick={toggle} className="btn-nav">
      <svg width="70" height="19" viewBox="0 0 70 19">
        <Path
          variants={{
            closed: { d: "M 2 3.5 L 65 3.5" },
            open: { d: "M 3 16.5 L 65 2.5" },
          }}
        />
        <Path
          variants={{
            closed: { d: "M 2 13.346 L 55 13.346" },
            open: { d: "M 3 2.5 L 65 16.5" },
          }}
        />
      </svg>
    </button>
  );
};

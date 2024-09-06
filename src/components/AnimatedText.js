// import { motion, stagger } from "framer-motion";
// import React from "react";

// const quote = {
//   initial: {
//     opacity: 1,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       staggerChildren: 0.08,
//     },
//   },
// };

// const singleWord = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const AnimatedText = ({ text, className = "" }) => {
//   return (
//     <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden font-mont">
//       <motion.h1
//         className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light  ${className}`}
//         variants={quote}
//         initial="initial"
//         animate="animate"
//       >
//         {text.split(" ").map((word, index) => (
//           <motion.span
//             key={word + "-" + index}
//             className="inline-block"
//             variants={singleWord}
//           >
//             {word}&nbsp;
//           </motion.span>
//         ))}
//       </motion.h1>
//     </div>
//   );
// };

// export default AnimatedText;

// import React from "react";
// import { motion } from "framer-motion";
// import useThemeSwitcher from "@/hooks/useThemeSwitcher";

// const quote = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const singleWord = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const AnimatedText = ({ text, className = "" }) => {
//   const [mode] = useThemeSwitcher();

//   return (
//     <div
//       className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden font-mont ${
//         mode === "dark" ? "dark-mode" : ""
//       }`}
//     >
//       <motion.h1
//         className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className} three-d-text`}
//         variants={quote}
//         initial="initial"
//         animate="animate"
//       >
//         {text.split(" ").map((word, index) => (
//           <motion.span
//             key={word + "-" + index}
//             className="inline-block"
//             variants={singleWord}
//           >
//             {word}&nbsp;
//           </motion.span>
//         ))}
//       </motion.h1>
//     </div>
//   );
// };

// export default AnimatedText;

// import React from "react";
// import { motion } from "framer-motion";
// import useThemeSwitcher from "@/hooks/useThemeSwitcher";

// const quote = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const singleWord = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const AnimatedText = ({ text, className = "" }) => {
//   const [mode] = useThemeSwitcher();

//   return (
//     <div
//       className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden font-mont`}
//     >
//       <motion.h1
//         className={`inline-block w-full ${
//           mode === "dark" ? "text-light dark:text-light" : "text-dark"
//         } font-bold capitalize text-8xl three-d-text ${className}`}
//         variants={quote}
//         initial="initial"
//         animate="animate"
//       >
//         {text.split(" ").map((word, index) => (
//           <motion.span
//             key={word + "-" + index}
//             className={`inline-block ${
//               mode === "dark" ? "text-light dark:text-light" : "text-dark"
//             }`}
//             variants={singleWord}
//           >
//             {word}&nbsp;
//           </motion.span>
//         ))}
//       </motion.h1>
//     </div>
//   );
// };

// export default AnimatedText;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const quote = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const [mode] = useThemeSwitcher();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-render when theme changes
    setKey((prevKey) => prevKey + 1);
  }, [mode]);

  return (
    <motion.div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0
        ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
      key={key}
    >
      <motion.h1
        className={`inline-block w-full font-bold capitalize text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl ${
          mode === "dark" ? "text-light" : "text-dark"
        } three-d-text`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText;

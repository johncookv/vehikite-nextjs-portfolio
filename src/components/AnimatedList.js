import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItemIcon from "./ListItemIcon";

const AnimatedListItem = ({
  title,
  linkText,
  link,
  subTitle,
  subTitleDetail,
  description,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto md:my-4 md:w-[80%]"
    >
      <ListItemIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {title}&nbsp;
          {link && linkText && (
            <a href={link} target="_blank" className="text-primary capitalize">
              @&nbsp;{linkText}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {subTitle}
          {subTitleDetail ? ` | ${subTitleDetail}` : null}
        </span>
        <p className="font-medium w-full md:text-sm">{description}</p>
      </motion.div>
    </li>
  );
};

const AnimatedList = ({ listTitle, items }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.75 center"],
  });
  return (
    <div className="my-64 md:my-32 sm:my-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {listTitle}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {items.map((item, index) => {
            const {
              title,
              linkText,
              link,
              subTitle,
              subTitleDetail,
              description,
            } = item;
            return (
              <AnimatedListItem
                key={`${title}-${index}`}
                title={title}
                linkText={linkText}
                link={link}
                subTitle={subTitle}
                subTitleDetail={subTitleDetail}
                description={description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedList;

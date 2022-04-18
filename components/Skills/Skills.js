import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import bxlCss3 from "@iconify/icons-bx/bxl-css3";
import nodeIcon from "@iconify/icons-fa-brands/node";

const skills = [
  {
    icon: "bxl:react",
    text: "React",
  },
  {
    icon: "cib:next-js",
    text: "Next.js",
  },
  {
    icon: "fa-brands:node",
    text: "Node.js",
  },
  {
    icon: "cib:graphql",
    text: "GraphQL",
  },
  {
    icon: "file-icons:prisma",
    text: "Prisma",
  },
  {
    icon: "cib:mysql",
    text: "MySQL",
  },
  {
    icon: "akar-icons:php-fill",
    text: "PHP",
  },
  {
    icon: "bxl:docker",
    text: "Docker",
  },
  {
    icon: "bxl:aws",
    text: "AWS",
  },
  {
    icon: "simple-icons:antdesign",
    text: "Antd UI",
  },
  {
    icon: "simple-icons:chakraui",
    text: "Chakra UI",
  },
  {
    icon: "cib:linux",
    text: "Ubuntu/Linux",
  },
];

export default function Skills() {
  return (
    <div>
      <h1 className={styles.title} data-aos="fade-up">
        Skills
      </h1>
      <div className={styles.list}>
        {skills.map((e) => (
          <div className={styles.icon}>
            <Icon icon={e.icon} style={{ fontSize: "70px" }} />
            <span>{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

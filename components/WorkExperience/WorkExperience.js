import React from "react";
import styles from "./WorkExperience.module.css";
import { Chrono } from "react-chrono";

export default function WorkExperience() {
  const items = [
    {
      title: "2020 Jan - 2020 Feb",
      cardTitle: "Interactive",
      url: "https://interactive.mn/",
      cardSubtitle: "Intership Student",
    },
    {
      title: "2021 May - Present",
      cardTitle: "Tab Solution Co.,LTD",
      url: "https://tabsolution.jp/",
      cardSubtitle: "Full-stack Engineer",
    },
  ];
  return (
    <div>
      <h1 className={styles.title} data-aos="fade-up">
        Work Experience
      </h1>
      <div className={styles.list}>
        <div>
          <Chrono
            items={items}
            scrollable
            disableNavOnKey
            hideControls
            activeItemIndex={1}
          />
        </div>
      </div>
    </div>
  );
}

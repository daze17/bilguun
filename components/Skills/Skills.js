import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import html5Filled from '@iconify/icons-ant-design/html5-filled';
import bxlCss3 from '@iconify/icons-bx/bxl-css3';
import javascript20Filled from '@iconify/icons-fluent/javascript-20-filled';
import bxlReact from '@iconify/icons-cib/react';
import gatsbyIcon from '@iconify/icons-cib/gatsby';
import nextJs from '@iconify/icons-cib/next-js';
import mongodbIcon from '@iconify/icons-cib/mongodb';
import nodeIcon from '@iconify/icons-fa-brands/node';

export default function Skills() {
    return (
        <div>
            <h1 className={styles.title} data-aos="fade-up">SKILLS</h1>
            <div className={styles.list}>
                <div className={styles.icon}>
                    <Icon icon={html5Filled} style={{fontSize: '70px'}} />
                    html5
                </div>
                <div className={styles.icon}>
                    <Icon icon={bxlCss3} style={{fontSize: '70px'}} />
                    css3
                </div>
                <div className={styles.icon}>
                    <Icon icon={javascript20Filled} className="javascript-icon" style={{fontSize: '70px'}} />
                    javascript
                </div>
                <div className={styles.icon}>
                    <Icon  icon={bxlReact} style={{fontSize: '70px'}} />
                    react
                </div>
                <div className={styles.icon}>
                    <Icon icon={gatsbyIcon} style={{fontSize: '70px'}} />  
                    gatsby
                </div>
                <div className={styles.icon}>
                    <Icon icon={nextJs} style={{fontSize: '70px'}} /> 
                    nextjs
                </div>
                <div className={styles.icon}>
                    <Icon icon={mongodbIcon} style={{fontSize: '70px'}} /> 
                    mongodb
                </div>
                <div className={styles.icon}>
                    <Icon icon={nodeIcon} style={{fontSize: '70px'}} />  
                    nodejs
                </div>
            </div>
        </div>
    )
}

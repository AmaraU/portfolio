import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

    const textList = ["front-end developer", "back-end developer", "full-stack developer"];
    const [ currentText, setCurrentText ] = useState('');
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ typingSpeed, setTypingSpeed ] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = textList[currentIndex];

            if (isDeleting) {
                setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentText((prevText) => fullText.slice(0, prevText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            }

            if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, currentIndex, textList, typingSpeed]);


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I'm Amara</h1>
                <p className={styles.description}>
                    And I am a <span className={styles.changing}>{currentText}</span>
                    <br />
                    <br />
                    I'm all about finding new, creative ideas and building them into something awesome 
                    and I'm always looking for new tech and challenges.
                    <br />
                    <br />
                    Check out my portfolio to see some of the projects I've worked on.
                    Reach out if you'd like to learn more!
                </p>
                {/* <a href="mailto:amaraude01@gmail.com" className={styles.contactBtn}>Contact Me</a> */}
                <a className={styles.scroll} href = "mailto:amaraude01@gmail.com"><span>Let's Work Together</span><i></i></a>

            </div>
            <img src={getImageUrl("hero/avatar.png")} className={styles.heroImage} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
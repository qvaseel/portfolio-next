'use client'
import Image from "next/image";
import styles from "../../styles/awards.module.css"
import anime from "animejs"
import { useRef } from "react";

interface IAwardItem {
    imgUrl: any;
}

const AwardsItem = ({ imgUrl}: IAwardItem) => {
    const myElement = useRef<HTMLDivElement | null>(null);

    function randomValues() {
        if (typeof window !== 'undefined') {
            anime({
                targets: myElement.current,
                translateY: function() {
                  return anime.random(-50, 50);
                },
                easing: 'easeInOutQuad',
                duration: 800,
                complete: randomValues
            });
        }
    }

    randomValues();
    return (
        <div ref={(el) => {
            if (el) {
                myElement.current = el;
            }
        }}>
            <Image src={imgUrl} alt="award" className={styles.awards_item}/>
        </div>
    )
};

export default AwardsItem;
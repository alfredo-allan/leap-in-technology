import React, { useState, useEffect } from 'react';
import styles from './ContentHeader.module.css';

interface CarouselTextProps {
    text: {
        title: string;
        description: string;
    };
}

const ContentHeader = () => {
    const [index, setIndex] = useState(0);

    const carouselData = [
        {
            title: 'Desenvolvimento de Software',
            description: 'Soluções personalizadas para suas necessidades.',
        },
        {
            title: 'Design de Interface',
            description: 'Interfaces intuitivas e atraentes.',
        },
        {
            title: 'Branding e Produto',
            description: 'Fortalecemos sua marca e seus produtos.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselData.length]);

    return (
        <div className={styles.carouselContainer}>

            <CarouselText text={carouselData[index]} />
        </div>
    );
};

const CarouselText = ({ text }: CarouselTextProps) => {
    return (
        <div className={styles.overlayBox}>
            <h1 className={styles.title}>{text.title}</h1>
            <p className={styles.description}>{text.description}</p>
        </div>
    );
};

export default ContentHeader;
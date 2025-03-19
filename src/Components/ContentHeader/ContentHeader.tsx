import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import code from '../../Assets/Img/code.jpg';
import designerInterface from '../../Assets/Img/designer-interface.jpg';
import brandProduct from '../../Assets/Img/brand-product.jpg';
import styles from './ContentHeader.module.css';

const ContentHeader = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const carouselData = [
        {
            image: code,
            title: 'Desenvolvimento de Software',
            description: 'Soluções personalizadas para suas necessidades.',
        },
        {
            image: designerInterface,
            title: 'Design de Interface',
            description: 'Interfaces intuitivas e atraentes.',
        },
        {
            image: brandProduct,
            title: 'Branding e Produto',
            description: 'Fortalecemos sua marca e seus produtos.',
        },
    ];

    return (
        <div className={styles.carouselContainer}>
            <Carousel activeIndex={index} onSelect={handleSelect} fade interval={3000}>
                {carouselData.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <Image className={`${styles.carouselImage} d-block w-100`} src={item.image} alt={`Slide ${idx + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>

            {carouselData.map((item, idx) => (
                index === idx && (
                    <div key={idx} className={styles.overlayBox}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                )
            ))}
        </div>
    );
};

export default ContentHeader;
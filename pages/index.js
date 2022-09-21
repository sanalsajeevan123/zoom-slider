import Image from 'next/image'
import { useState, useRef } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import React from 'react';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

const Home = () => {
  const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i]?.classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j]?.classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };
  return (
    <div className="container">
            <div className="left">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i === 0 ? 'img_wrap active' : 'img_wrap'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <Image
                                src={image}
                                alt={i}
                                layout='responsive'
                                width= '70px'
                                height= '70px'
                                object-fit= 'contain'

                            />
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1000,
                            },
                            enlargedImageContainerDimensions: {
                                width: '120%',
                                height: '100%',
                            },
                        }}
                    />
                </div>
            </div>
            <div className="right"></div>
        </div>
  )
}

export default Home

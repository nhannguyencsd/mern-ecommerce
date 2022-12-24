import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductCarousel.module.scss';
import images from '../../assets/images/imagesIndex';

const cx = classNames.bind(styles);

function ProductCarousel({ slides }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [mounted, setMounted] = useState(false);
    const wrapperRef = useRef();
    const listRef = useRef();
    const btnRefs = useRef([]);
    const timeoutId = useRef();

    //hanlde resize
    const handleResize = () => {
        setWidth(wrapperRef.current.offsetWidth);
    };
    // handle previous
    const handePrevious = () => {
        listRef.current.style.transitionDuration = currentIndex === 0 ? '0s' : '500ms';
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        else return;
    };
    // handle next
    const handeNext = () => {
        listRef.current.style.transitionDuration =
            currentIndex === listRef.current.children.length - 1 ? '0s' : '500ms';
        if (currentIndex < listRef.current.children.length - 1) setCurrentIndex(currentIndex + 1);
        else return;
    };
    // hanlde mouse moveover
    const handleMouseOver = (index, color) => {
        btnRefs.current[index].style.color = color;
        btnRefs.current[index].style.backgroundColor = '#fff';
    };
    // hanlde mouseout
    const handleMouseOut = (index) => {
        btnRefs.current[index].style.color = '#fff';
        btnRefs.current[index].style.backgroundColor = 'transparent';
    };
    //handle movement for each item in listRef
    useEffect(() => {
        // set mounted
        if (!mounted) {
            setWidth(wrapperRef.current.offsetWidth);
            setMounted(true);
        }
        // translate listRef
        listRef.current.style.transform = `translate(-${width * currentIndex}px)`;
        //handle next for last item in listRef: wait 500ms then translate first item inside wrapper element
        if (currentIndex === listRef.current.children.length - 1) {
            timeoutId.current = setTimeout(() => {
                listRef.current.style.transitionDuration = '0s';
                listRef.current.style.transform = `translate(-${width}px)`;
                setCurrentIndex(1);
            }, 500);
        }
        //handle previous for first item in listRef: wait 500ms then translate the last item to the wrapper element
        if (currentIndex === 0) {
            timeoutId.current = setTimeout(() => {
                listRef.current.style.transitionDuration = '0s';
                const displacement = width * (listRef.current.children.length - 1);
                listRef.current.style.transform = `translate(-${displacement}px)`;
                setCurrentIndex(listRef.current.children.length - 2);
            }, 500);
        }
        //cleanup function
        return () => {
            clearTimeout(timeoutId.current);
        };
    }, [mounted, width, currentIndex]);

    // add event resize
    useEffect(() => {
        timeoutId.current = setTimeout(() => {
            listRef.current.style.transitionDuration = '0s';
            listRef.current.style.transform = `translate(-${width * currentIndex}px)`;
        }, 500);

        window.addEventListener('resize', handleResize);
        //cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    // clone the last and first item in slides
    if (!mounted) {
        slides.unshift(slides[slides.length - 1]);
        slides.push(slides[1]);
    }

    // render component
    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('list')} ref={listRef}>
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={cx('item')}
                            style={{
                                width: width,
                            }}
                            key={index}
                        >
                            <div
                                className={cx('body')}
                                href="/"
                                title={slide.headline}
                                style={{
                                    background: `linear-gradient(to right, ${slide.gradient}`,
                                    width: width,
                                }}
                            >
                                <div className={cx('content')}>
                                    <div className={cx('headline')}>{slide.headline}</div>
                                    <div className={cx('desc')}>{slide.desc}</div>
                                    <Link
                                        className={cx('btn')}
                                        ref={(ref) => btnRefs.current.push(ref)}
                                        to="/"
                                        onMouseOver={() => handleMouseOver(index, slide.gradient[0])}
                                        onMouseOut={() => handleMouseOut(index)}
                                    >
                                        {slide.action}
                                    </Link>
                                </div>
                                <div className={cx('background')}>
                                    <img className={cx('image')} src={slide.image} alt="First slide" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={cx('prev')} onClick={handePrevious}>
                <img className={cx('test')} src={images.caretLeft} alt="left icon" />
            </button>
            <button className={cx('next')} onClick={handeNext}>
                <img src={images.caretRight} alt="right icon" />
            </button>
        </div>
    );
}

export default ProductCarousel;

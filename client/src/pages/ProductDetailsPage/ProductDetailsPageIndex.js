import classNames from 'classnames/bind';
import styles from './ProductDetailsPage.module.scss';
import StarRating from '../../components/StarRating/StarRatingIndex';
import AddToCart from '../../components/AddToCart/AddToCartIndex';
import ProductHeadline from '../../components/ProductHeadline/ProductHeadlineIndex';
import ProductGallery from '../../components/ProductGallery/ProductGalleryIndex';
import ProductRecommendation from '../../components/ProductRecommendation/ProductRecommendationIndex';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviewsIndex';

const cx = classNames.bind(styles);

const productImages = [
    {
        src: require('../../assets/images/products/samsung-s22.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        src: require('../../assets/images/products/samsung-s22b.jpg'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
    {
        src: require('../../assets/images/products/samsung-s22c.png'),
        title: 'Samsung Galaxy S22 Ultra 5G (128GB, 8GB) 6.8" AMOLED 2X, 108MP Camera',
    },
];

function ProductDetailsPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                {/* product detail */}
                <div className="row">
                    {/* product gallery */}
                    <div className="col lg-5 md-5 sm-12">
                        <ProductGallery images={productImages} />
                    </div>
                    {/* product info */}
                    <div className="col lg-7 md-7 sm-12">
                        <div className={cx('info')}>
                            <div className={cx('product-name')}>{productImages[0].title}</div>
                            <div className={cx('product-rating')}>
                                <StarRating fixedValue={4} />
                                <span>8 reviews</span>
                            </div>
                            <h4 className={cx('product-price')}>$699.99</h4>
                            <p className={cx('product-description')}>
                                Product description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
                                tellus eget aliquet rutrum. Nunc et tellus turpis Sed neque eros, ornare at ipsum vitae,
                                molestie dictum urna. Curabitur pharetra arcu luctus sem hendrerit, a tincidunt nibh
                                semper. Sed enim orci, fermentum a eros ac, eleifend sodales sem. Maecenas pretium non
                                metus quis dapibus.
                            </p>
                            <AddToCart large margined />
                            <ProductHeadline
                                headlineIcon={
                                    <svg
                                        fill="#000000"
                                        width="30px"
                                        height="24px"
                                        viewBox="0 0 30 30"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#000000"
                                        strokeWidth="0.36999999999999996"
                                    >
                                        <g strokeWidth="0"></g>
                                        <g
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#CCCCCC"
                                            strokeWidth="0.06"
                                        ></g>
                                        <g>
                                            <path d="M22.005 0c-.194-.002-.372.105-.458.276l-2.197 4.38-4.92.7c-.413.06-.578.56-.278.846l3.805 3.407-.953 4.81c-.07.406.363.715.733.523L22 12.67l4.286 2.273c.37.19.8-.118.732-.522l-.942-4.81 3.77-3.408c.3-.286.136-.787-.278-.846l-4.916-.7-2.2-4.38C22.368.11 22.195.002 22.005 0zM22 1.615l1.863 3.71c.073.148.216.25.38.273l4.168.595-3.227 2.89c-.12.112-.173.276-.145.436l.813 4.08-3.616-1.927c-.147-.076-.322-.076-.47 0l-3.59 1.926.823-4.08c.028-.16-.027-.325-.145-.438l-3.262-2.89 4.166-.594c.165-.023.307-.125.38-.272zM16.5 18c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zM1.5 3C.678 3 0 3.678 0 4.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zm0 14c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5z"></path>
                                        </g>
                                    </svg>
                                }
                                headline="Feature Specification"
                                content="A new feature is nunc lectus eros, volutpat quis suscipit eu, lacinia et justo. Proin turpis mi,
                                fermentum in feugiat et, sagittis sed nibh. Vivamus convallis felis tempor laoreet eleifend.
                                Etiam leo dolor."
                            ></ProductHeadline>
                            <ProductHeadline
                                headlineIcon={
                                    <svg
                                        fill="#000000"
                                        height="30px"
                                        width="30px"
                                        viewBox="0 0 477.3 477.3"
                                        stroke="#000000"
                                        strokeWidth="0.004773"
                                    >
                                        <g strokeWidth="0"></g>
                                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g>
                                            {' '}
                                            <g>
                                                {' '}
                                                <path d="M451.3,150.55c-15.9-17.2-38.5-26.6-63.6-26.6h-65.5v-36.8c0-6.6-5.4-12-12-12H12c-6.6,0-12,5.4-12,12v263.9 c0,6.6,5.4,12,12,12h47.8c3.9,22.2,23.2,39.1,46.5,39.1s42.6-16.9,46.5-39.1h157.4h26.3c3.9,22.2,23.2,39.1,46.5,39.1 s42.6-16.9,46.5-39.1h35.8c6.6,0,12-5.4,12-12v-124C477.2,195.35,468.3,168.85,451.3,150.55z M24,99.15h274.2v36.8v203.2H150.7 c-6.5-18.2-24-31.3-44.4-31.3s-37.9,13.1-44.4,31.3H24V99.15z M106.3,378.15c-12.8,0-23.2-10.4-23.2-23.2 c0-12.8,10.4-23.2,23.2-23.2s23.2,10.4,23.2,23.2S119.1,378.15,106.3,378.15z M383,378.15c-12.8,0-23.2-10.4-23.2-23.2 c0-12.8,10.4-23.2,23.2-23.2c12.8,0,23.2,10.4,23.2,23.2S395.8,378.15,383,378.15z M453.2,339.05h-25.8 c-6.5-18.2-24-31.3-44.4-31.3s-37.9,13.1-44.4,31.3h-16.3v-191.1h65.5c40.4,0,65.5,30.3,65.5,79.1v112H453.2z"></path>{' '}
                                            </g>{' '}
                                        </g>
                                    </svg>
                                }
                                headline="Shipping"
                                content="We ship to sodales sapien massa, euismod imperdiet tellus rutrum nec. Nullam non mauris at
                                tortor posuere bibendum eget non risus. Vestibulum egestas libero fringilla, pretium eros vitae,
                                fermentum nisi."
                            ></ProductHeadline>
                            <ProductHeadline
                                headlineIcon={
                                    <svg
                                        width="30px"
                                        height="24px"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g strokeWidth="0"></g>
                                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g>
                                            {' '}
                                            <path
                                                d="M12.9998 8L6 14L12.9998 21"
                                                stroke="#000000"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{' '}
                                            <path
                                                d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
                                                stroke="#000000"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{' '}
                                        </g>
                                    </svg>
                                }
                                headline="Return Policy"
                                content="Our return policy is aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Maecenas fermentum at risus ut tristique. Etiam ut mauris placerat, sollicitudin ante
                                id, mollis ante. Aliquam molestie nulla a dignissim tempor. Pellentesque mattis vehicula mi, vel
                                fringilla purus varius"
                            ></ProductHeadline>
                        </div>
                    </div>
                </div>
                {/* product recommendation */}
                <ProductRecommendation />
                {/* customer reviews */}
                <CustomerReviews />
            </div>
        </div>
    );
}

export default ProductDetailsPage;

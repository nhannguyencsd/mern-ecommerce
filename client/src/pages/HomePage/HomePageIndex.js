import classNames from 'classnames/bind';
import ProductCarousel from '../../components/ProductCarousel/ProductCarouselIndex';
import styles from './HomePage.module.scss';

import { useRef } from 'react';
const bestSellers = [
    {
        id: '0',
        gradient: ['rgb(0, 126, 254)', 'rgb(6, 195, 254)'],
        image: 'https://scalefusion.com/assets/new_layout_assets/sf-index-v3/devices@2x-810dbc6c77647e26122505f21edd0d9196f4be6aeea220c399c6bcd601ac161c.png',
        headline: 'Limited Time Special Offer',
        desc: 'Save up to 50% on TVs, smartphones, smartwatches, cameras, headphones, tablets, and more',
        action: 'Shop now',
    },

    {
        id: '1',
        gradient: ['rgb(254, 33, 94)', 'rgb(255, 148, 2)'],
        image: 'https://storage-asset.msi.com/event/spb/2018/tokyo-game-show/images/kv-pd.png',
        headline: 'Light Up The Game',
        desc: 'Enjoy this member exclusive offer your can spend on games, consoles, accessories, and more at Techmart',
        action: 'Commence',
    },

    {
        id: '2',
        gradient: ['rgb(104, 40, 250)', 'rgb(255, 186, 164)'],
        image: 'https://www.pngkit.com/png/full/640-6403640_my-nasco-nasco-electronics.png',
        headline: 'Discover Amazing Techs',
        desc: 'Browse through collection of appliances, electronics, games and more. Order now and take as much as 40% Discount!',
        action: 'Take a look ',
    },
];

const cx = classNames.bind(styles);

function HomePage() {
    const divRef = useRef();
    return (
        <div ref={divRef} className={cx('wrapper')}>
            <div className="grid">
                <ProductCarousel slides={bestSellers} />
            </div>
        </div>
    );
}

export default HomePage;

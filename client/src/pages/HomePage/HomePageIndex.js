import classNames from 'classnames/bind';
import ProductCarousel from '../../components/ProductCarousel/ProductCarouselIndex';
import CategoryCard from '../../components/CategoryCard/CategoryCardIndex';
import styles from './HomePage.module.scss';

const bestSellers = [
    {
        id: '0',
        gradient: ['rgb(0, 126, 254)', 'rgb(6, 195, 254)'],
        image: 'https://scalefusion.com/assets/new_layout_assets/sf-index-v3/devices@2x-810dbc6c77647e26122505f21edd0d9196f4be6aeea220c399c6bcd601ac161c.png',
        headline: 'Limited Time Special Offer',
        desc: 'Save up to 50% on phones, smartphones, smartwatches, cameras, headphones, tablets, and more',
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

const categories = [
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
    {
        image: require('../../assets/images/categories/phones.png'),
        title: 'Phones',
    },
];

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid">
                <ProductCarousel slides={bestSellers} />
                <div className={cx('categories')}>Categories</div>
                <div className="row">
                    {categories.map((category, index) => {
                        return (
                            <CategoryCard card={category} insertClassName=" col lg-distinct md-3 sm-3" key={index} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

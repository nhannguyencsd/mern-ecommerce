import classNames from 'classnames/bind';
import styles from './AttributesFilter.module.scss';

const cx = classNames.bind(styles);

function AttributesFilter() {
    return (
        <div className={cx('wrapper')}>
            {[{ color: ['red', 'green', 'blue'] }, { ram: ['1 TB', '2 TB'] }].map((item, index) => {
                return (
                    <div className={cx('type')} key={index}>
                        <h4 className={cx('headline')}>{Object.keys(item)}</h4>
                        {item[Object.keys(item)].map((subItem, subIndex) => {
                            const isColor = Object.keys(item).toString() === 'color';
                            const type = Object.keys(item);
                            const typeValue = subItem;
                            //color attribute
                            if (isColor) {
                                return (
                                    <div className={cx('option')} key={subIndex}>
                                        <input id={`filter-color-${typeValue}`} type="radio" />
                                        <label
                                            className={cx(typeValue)}
                                            htmlFor={`filter-color-${typeValue}`}
                                            title={typeValue}
                                        ></label>
                                    </div>
                                );
                            } else {
                                //non-color attributes
                                return (
                                    <div className={cx('option')} key={subIndex}>
                                        <input key={subIndex} id={`filter-${type}-${subIndex}`} type="checkbox" />
                                        <label className={cx('non-color')} htmlFor={`filter-${type}-${subIndex}`}>
                                            {typeValue}
                                        </label>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default AttributesFilter;

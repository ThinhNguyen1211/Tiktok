import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.tiktokLogo} alt="Tiktok logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <span className="spanSpliter"></span>
                    <button className={cx('clear')}>
                        <img src={images.clearIcon} alt="clear icon" className={cx('clear-icon')} />
                    </button>
                    <button className={cx('loading')}>
                        <img src={images.loadingIcon} alt="clear icon" className={cx('loading-icon')} />
                    </button>
                    <button className={cx('search-btn')}>
                        <img src={images.searchIcon} alt="Search logo" />
                    </button>
                </div>
                <div className={cx('settings')}>
                    <a>
                        <div></div>
                    </a>
                    <button>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

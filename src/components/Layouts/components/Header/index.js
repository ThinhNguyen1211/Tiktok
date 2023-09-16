import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.tiktokLogo} alt="Tiktok logo" className={cx('tiktok-logo')} />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} className={cx('search-input')} />
                    <span className="spanSpliter"></span>
                    <button className={cx('clear-btn')}>
                        <img src={images.clearIcon} alt="clear icon" className={cx('clear-icon')} />
                    </button>
                    <button className={cx('loading-btn')}>
                        <img src={images.loadingIcon} alt="clear icon" className={cx('loading-icon')} />
                    </button>
                    <button className={cx('search-btn')}>
                        <img src={images.searchIcon} alt="Search logo" />
                    </button>
                    <div className={cx('search-border')}></div>
                </div>
                <div className={cx('actions-container')}>
                    <a>
                        <div className={cx('upload')}>
                            <img src={images.plusIcon} alt="plus icon" className={cx('upload-icon')} />
                            <span className={cx('upload-text')}>Tải lên</span>
                        </div>
                    </a>
                    <button className={cx('login-btn')}>Đăng nhập</button>
                    <div className={cx('device-changed')}>
                        <img src={images.deviceChangedIcon} alt="Device changed icon" />
                    </div>
                    <div className={cx('menu')}>
                        <img src={images.menuIcon} alt="menu icon" className={cx('menu-icon')} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

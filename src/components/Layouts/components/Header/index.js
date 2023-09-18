import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
let isSwitched = false;

const handleSwitch = () => {
    isSwitched = !isSwitched;
    const switchProp = document.querySelector('.switch-prop');
    const switchBtn = document.querySelector('.switch-btn');

    const transformValue = isSwitched ? 'translateX(20px)' : 'translateX(0)';
    switchProp.style.transform = transformValue;
    isSwitched ? (switchBtn.style.background = 'rgb(79 254 168)') : (switchBtn.style.background = 'rgba(0, 0, 0, 0.1)');
};

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
                        <img src={images.searchBlackIcon} alt="Search logo" className={cx('search--active-icon')} />
                        <img src={images.searchIcon} alt="Search logo" className={cx('search-icon')} />
                    </button>
                    <div className={cx('search-border')}></div>
                </div>
                <div className={cx('actions-container')}>
                    <a href="/">
                        <div className={cx('upload')}>
                            <img src={images.plusIcon} alt="plus icon" className={cx('upload-icon')} />
                            <span className={cx('upload-text')}>Tải lên</span>
                        </div>
                    </a>
                    <button className={cx('login-btn')}>Đăng nhập</button>
                    <div className={cx('device-changed')}>
                        <img src={images.deviceChangedIcon} alt="Device changed icon" />
                        <div className={cx('device-download')}>
                            <div className={cx('download-wrapper')}>
                                <img src={images.tiktokDesktop} alt="tiktok desktop" className={cx('download-image')} />
                                <p className={cx('download-header')}>Ứng dụng TikTok cho máy tính</p>
                                <button className={cx('download-btn')}>Tải về</button>
                                <div className={cx('download-on')}>
                                    <p className={cx('download-paragraph')}>Thay vào đó, tải ứng dụng di động về</p>
                                    <img src={images.rightArrowIcon} alt="right arrow" className={cx('right-arrow')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('menu')}>
                        <img src={images.menuIcon} alt="menu icon" className={cx('menu-icon')} />
                        <div className={cx('menu-settings')}>
                            <ul>
                                <li>
                                    <div>
                                        <img src={images.creativeBulbIcon} alt="creative bulb" />
                                        <p>Trung tâm nhà sáng tạo LIVE</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={images.languagesSelectIcon} alt="languages select" />
                                        <p>Tiếng Việt</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={images.helpIcon} alt="help icon" />
                                        <p>Phản hồi và trợ giúp</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={images.keyboardIcon} alt="keyboard icon" />
                                        <p>Phím tắt trên bàn phím</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className={cx('night-mode')}>
                                            <img src={images.nightModeIcon} alt="night mode icon" />
                                            <p>Chế độ tối</p>
                                        </div>
                                        <div className={cx('switch-wrapper')}>
                                            <button onClick={() => handleSwitch()} className={cx('switch-btn')}>
                                                <div>
                                                    <span className={cx('switch-prop')}></span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

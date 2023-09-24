import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import LoginModal from '../LoginModal';
import DownloadModal from '../DownloadModal';
import LanguageModal from '../LanguageModal';
import ShortcutModal from '../ShortcutModal';

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

const handleShowLoginModal = () => {
    const loginModal = document.querySelector('.LoginModal_wrapper__3fnKg');
    loginModal.style.opacity = 1;
    loginModal.style.visibility = 'visible';
};

const handleShowDownloadModal = () => {
    const downloadModal = document.querySelector('.DownloadModal_wrapper__sdzBE');
    downloadModal.style.opacity = 1;
    downloadModal.style.visibility = 'visible';
};

const handleShowLanguageModal = () => {
    const languageModal = document.querySelector('.LanguageModal_wrapper__Zw4ec');
    languageModal.style.opacity = 1;
    languageModal.style.visibility = 'visible';
    languageModal.style.display = 'block';
    setTimeout(() => {
        languageModal.style.opacity = 0;
        languageModal.style.visibility = 'hidden';
    }, 1200);
};

const handleShowShortcutModal = () => {
    const shortcutModal = document.querySelector('.ShortcutModal_wrapper__2DEeh');
    shortcutModal.style.opacity = 1;
    shortcutModal.style.visibility = 'visible';
};

//TODO: night-mode

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
                    <div className={cx('upload-link')} onClick={() => handleShowLoginModal()}>
                        <div className={cx('upload')}>
                            <img src={images.plusIcon} alt="plus icon" className={cx('upload-icon')} />
                            <span className={cx('upload-text')}>Tải lên</span>
                        </div>
                    </div>
                    <button className={cx('login-btn')} onClick={() => handleShowLoginModal()}>
                        Đăng nhập
                    </button>
                    <div className={cx('device-changed')}>
                        <img src={images.deviceChangedIcon} alt="Device changed icon" />
                        <div className={cx('device-download')}>
                            <div className={cx('download-wrapper')}>
                                <img src={images.tiktokDesktop} alt="tiktok desktop" className={cx('download-image')} />
                                <p className={cx('download-header')}>Ứng dụng TikTok cho máy tính</p>
                                <button className={cx('download-btn')} onClick={() => handleShowDownloadModal()}>
                                    Tải về
                                </button>
                                <div className={cx('download-on')} onClick={() => handleShowDownloadModal()}>
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
                                        <a href="https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN">
                                            Trung tâm nhà sáng tạo LIVE
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('language-selected')} onClick={() => handleShowLanguageModal()}>
                                        <img src={images.languagesSelectIcon} alt="languages select" />
                                        <p>Tiếng Việt</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={images.helpIcon} alt="help icon" />
                                        <a href="https://www.tiktok.com/feedback">Phản hồi và trợ giúp</a>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('keyboard-shortcut')} onClick={() => handleShowShortcutModal()}>
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
            <LoginModal />
            <DownloadModal />
            <LanguageModal />
            <ShortcutModal />
        </header>
    );
}

export default Header;

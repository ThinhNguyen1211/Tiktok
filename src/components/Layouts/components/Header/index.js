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
    // handle switch
    isSwitched = !isSwitched;
    const switchProp = document.querySelector('.switch-prop');
    const switchBtn = document.querySelector('.switch-btn');

    const transformValue = isSwitched ? 'translateX(20px)' : 'translateX(0)';
    switchProp.style.transform = transformValue;
    isSwitched ? (switchBtn.style.background = 'rgb(79 254 168)') : (switchBtn.style.background = 'rgba(0, 0, 0, 0.1)');

    //* handle dark-mode changed
    if (isSwitched) {
        // get elements
        const body = document.querySelector('body');
        const header = document.querySelector('.Header_wrapper__H5T4g');
        const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');
        const search = document.querySelector('.Header_search__PKR0D');
        const searchInput = document.querySelector('.Header_search-input__VJHrA');
        const spanSpliter = document.querySelector('.spanSpliter');
        const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
        const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
        const upload = document.querySelector('.Header_upload__EGBKW');
        const uploadIcon = document.querySelector('.Header_upload-icon__9m6OI');
        const deviceChangedIcon = document.querySelector('.device-changed-icon');
        const deviceDownload = document.querySelector('.Header_device-download-wrapper__kdZfI');
        const deviceDownloadImg = document.querySelector('.Header_download-image__kxWSr');
        const deviceDownloadHeader = document.querySelector('.Header_download-header__57PwS');
        const downloadOn = document.querySelector('.Header_download-on__7Zggw');
        const downloadRightArrow = document.querySelector('.Header_right-arrow__TkID6');
        const menuIcon = document.querySelector('.Header_menu-icon__xXmVp');
        const menuSettings = document.querySelector('.Header_menu-settings__Wzl9F');
        const creativeBulbIcon = document.querySelector('.creativeBulbIcon');
        const languagesSelectIcon = document.querySelector('.languagesSelectIcon');
        const helpIcon = document.querySelector('.helpIcon');
        const keyboardIcon = document.querySelector('.keyboardIcon');
        const nightModeIcon = document.querySelector('.nightModeIcon');
        const loginModal = document.querySelector('.LoginModal_login-modal__CuRyc');
        const loginModalCloseBtn = document.querySelector('.LoginModal_login-modal-close-btn__hHZxg');
        const loginModalCloseIcon = document.querySelector('.close-icon');
        const loginModalHeader = document.querySelector('.login-modal-header');
        const loginModalqrIcon = document.querySelector('.login-modal-qrIcon');
        const loginModalHumanIcon = document.querySelector('.login-modal-humanIcon');
        const loginModalContainer = document.querySelector('.LoginModal_login-container__UKFax');
        const loginModalLinks = loginModalContainer.querySelectorAll('a');
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const loginModalPolicyParagraph = document.querySelector('.login-policy-paragraph');
        const loginModalPolicyLinks = loginModalPolicyParagraph.querySelectorAll('a');
        const loginModalAssignParagraph = document.querySelector('.assign-account-paragraph');
        // add class for elements
        header.classList.add('dark-mode-background');
        body.classList.add('dark-mode-background');
        tiktokLogo.src = images.tiktokDarkModeLogo;
        tiktokLogo.style.marginTop = '10px';
        search.style.background = '#2f2f2f';
        searchInput.style.color = '#c9c9c9';
        spanSpliter.style.background = 'rgba(255, 255, 255, .12)';
        searchIcon.src = images.searchGrayIcon;
        searchActiveIcon.src = images.searchWhiteIcon;
        upload.style.background = '#252525';
        upload.style.color = '#e9e9e9';
        uploadIcon.src = images.plusWhiteIcon;
        deviceChangedIcon.src = images.deviceChangedWhiteIcon;
        deviceDownload.style.background = '#252525';
        deviceDownloadImg.src = images.tiktokDesktopDark;
        deviceDownloadHeader.style.color = '#fff';
        downloadOn.style.color = '#7d7d7d';
        downloadRightArrow.src = images.rightArrowGrayIcon;
        menuIcon.src = images.menuWhiteIcon;
        menuSettings.style.background = '#252525';
        menuSettings.style.color = '#e9e9e9';
        creativeBulbIcon.src = images.creativeBulbWhiteIcon;
        languagesSelectIcon.src = images.languagesSelectWhiteIcon;
        helpIcon.src = images.helpWhiteIcon;
        keyboardIcon.src = images.keyboardWhiteIcon;
        nightModeIcon.src = images.nightModeWhiteIcon;
        loginModal.style.background = '#252525';
        loginModalCloseBtn.style.background = 'rgba(255, 255, 255, 0.04)';
        loginModalCloseIcon.src = images.closeWhiteIcon;
        loginModalHeader.style.color = '#fff';
        loginModalqrIcon.src = images.qrWhiteIcon;
        loginModalHumanIcon.src = images.humanWhiteIcon;
        loginModalLinks.forEach((loginModalLink) => {
            loginModalLink.style.color = '#fff';
            loginModalLink.style.background = '#2e2e2e';
        });
        loginModalPolicy.style.background = '#121212';
        loginModalPolicyParagraph.style.color = 'rgba(255, 255, 255, 0.5)';
        loginModalPolicyLinks.forEach((loginModalPolicyLink) => {
            loginModalPolicyLink.style.color = '#fff';
        });
        loginModalAssignParagraph.style.color = '#fff';
    } else {
        // get elements
        const body = document.querySelector('body');
        const header = document.querySelector('.Header_wrapper__H5T4g');
        const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');
        const search = document.querySelector('.Header_search__PKR0D');
        const searchInput = document.querySelector('.Header_search-input__VJHrA');
        const spanSpliter = document.querySelector('.spanSpliter');
        const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
        const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
        const upload = document.querySelector('.Header_upload__EGBKW');
        const uploadIcon = document.querySelector('.Header_upload-icon__9m6OI');
        const deviceChangedIcon = document.querySelector('.device-changed-icon');
        const deviceDownload = document.querySelector('.Header_device-download-wrapper__kdZfI');
        const deviceDownloadImg = document.querySelector('.Header_download-image__kxWSr');
        const deviceDownloadHeader = document.querySelector('.Header_download-header__57PwS');
        const downloadOn = document.querySelector('.Header_download-on__7Zggw');
        const downloadRightArrow = document.querySelector('.Header_right-arrow__TkID6');
        const menuIcon = document.querySelector('.Header_menu-icon__xXmVp');
        const menuSettings = document.querySelector('.Header_menu-settings__Wzl9F');
        const creativeBulbIcon = document.querySelector('.creativeBulbIcon');
        const languagesSelectIcon = document.querySelector('.languagesSelectIcon');
        const helpIcon = document.querySelector('.helpIcon');
        const keyboardIcon = document.querySelector('.keyboardIcon');
        const nightModeIcon = document.querySelector('.nightModeIcon');
        const loginModal = document.querySelector('.LoginModal_login-modal__CuRyc');
        const loginModalCloseBtn = document.querySelector('.LoginModal_login-modal-close-btn__hHZxg');
        const loginModalCloseIcon = document.querySelector('.close-icon');
        const loginModalHeader = document.querySelector('.login-modal-header');
        const loginModalqrIcon = document.querySelector('.login-modal-qrIcon');
        const loginModalHumanIcon = document.querySelector('.login-modal-humanIcon');
        const loginModalContainer = document.querySelector('.LoginModal_login-container__UKFax');
        const loginModalLinks = loginModalContainer.querySelectorAll('a');
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const loginModalPolicyParagraph = document.querySelector('.login-policy-paragraph');
        const loginModalPolicyLinks = loginModalPolicyParagraph.querySelectorAll('a');
        const loginModalAssignParagraph = document.querySelector('.assign-account-paragraph');
        // add class for elements
        header.classList.remove('dark-mode-background');
        body.classList.remove('dark-mode-background');
        tiktokLogo.src = images.tiktokLogo;
        tiktokLogo.style.marginTop = '0';
        search.style.background = 'rgba(22, 24, 35, 0.06)';
        searchInput.style.color = 'rgb(22, 24, 35)';
        spanSpliter.style.background = 'rgba(22, 24, 35, 0.12)';
        searchIcon.src = images.searchIcon;
        searchActiveIcon.src = images.searchBlackIcon;
        upload.style.background = '#fff';
        upload.style.color = '#0e0e0e';
        uploadIcon.src = images.plusIcon;
        deviceChangedIcon.src = images.deviceChangedIcon;
        deviceDownload.style.background = '#fff';
        deviceDownloadImg.src = images.tiktokDesktop;
        deviceDownloadHeader.style.color = '#0e0e0e';
        downloadOn.style.color = 'rgba(22, 24, 35, 0.3)';
        downloadRightArrow.src = images.rightArrowIcon;
        menuIcon.src = images.menuIcon;
        menuSettings.style.background = '#fff';
        menuSettings.style.color = '#0e0e0e';
        creativeBulbIcon.src = images.creativeBulbIcon;
        languagesSelectIcon.src = images.languagesSelectIcon;
        helpIcon.src = images.helpIcon;
        keyboardIcon.src = images.keyboardIcon;
        nightModeIcon.src = images.nightModeIcon;
        loginModal.style.background = '#fff';
        loginModalCloseBtn.style.background = 'rgba(22, 24, 35, 0.03)';
        loginModalCloseIcon.src = images.closeIcon;
        loginModalHeader.style.color = '#0e0e0e';
        loginModalqrIcon.src = images.qrIcon;
        loginModalHumanIcon.src = images.humanIcon;
        loginModalLinks.forEach((loginModalLink) => {
            loginModalLink.style.color = '#0e0e0e';
            loginModalLink.style.background = '#fff';
        });
        loginModalPolicy.style.background = '#fff';
        loginModalPolicyParagraph.style.color = 'rgba(22, 24, 35, 0.5)';
        loginModalPolicyLinks.forEach((loginModalPolicyLink) => {
            loginModalPolicyLink.style.color = 'rgb(22, 24, 35)';
        });
        loginModalAssignParagraph.style.color = 'rgb(22, 24, 35)';
    }
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

//TODO: Header: sửa thêm phần hover (mouseEnter, mouseLeave) vào ô search , download modal, language, shortcut modal
//TODO: Sidebar: get ra thẻ ul, queryselectorAll các thẻ li, dùng forEach các thẻ li -> css lại thẻ a

//TODO: sửa thêm cơ chế khi scroll xuống quá mức của sidebar hoặc language thì nó sẽ scroll luôn content

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
                        <img
                            src={images.deviceChangedIcon}
                            alt="Device changed icon"
                            className={cx('device-changed-icon')}
                        />
                        <div className={cx('device-download-wrapper')}>
                            <div className={cx('download-container')}>
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
                                        <img
                                            src={images.creativeBulbIcon}
                                            alt="creative bulb"
                                            className={cx('creativeBulbIcon')}
                                        />
                                        <a href="https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN">
                                            Trung tâm nhà sáng tạo LIVE
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('language-selected')} onClick={() => handleShowLanguageModal()}>
                                        <img
                                            src={images.languagesSelectIcon}
                                            alt="languages select"
                                            className={cx('languagesSelectIcon')}
                                        />
                                        <p>Tiếng Việt</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={images.helpIcon} alt="help icon" className={cx('helpIcon')} />
                                        <a href="https://www.tiktok.com/feedback">Phản hồi và trợ giúp</a>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('keyboard-shortcut')} onClick={() => handleShowShortcutModal()}>
                                        <img
                                            src={images.keyboardIcon}
                                            alt="keyboard icon"
                                            className={cx('keyboardIcon')}
                                        />
                                        <p>Phím tắt trên bàn phím</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className={cx('night-mode')}>
                                            <img
                                                src={images.nightModeIcon}
                                                alt="night mode icon"
                                                className={cx('nightModeIcon')}
                                            />
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

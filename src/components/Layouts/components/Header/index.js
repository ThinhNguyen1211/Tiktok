import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import LoginModal from '../LoginModal';
import DownloadModal from '../DownloadModal';
import LanguageModal from '../LanguageModal';
import ShortcutModal from '../ShortcutModal';

const cx = classNames.bind(styles);

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

//TODO: sửa thêm cơ chế khi scroll xuống quá mức của sidebar hoặc language thì nó sẽ scroll luôn content

function Header() {
    let isSwitched = false;
    const handleSwitch = () => {
        isSwitched = !isSwitched;
        // handle switch
        const switchProp = document.querySelector('.switch-prop');
        const switchBtn = document.querySelector('.switch-btn');

        const transformValue = isSwitched ? 'translateX(20px)' : 'translateX(0)';
        switchProp.style.transform = transformValue;
        isSwitched
            ? (switchBtn.style.background = 'rgb(79 254 168)')
            : (switchBtn.style.background = 'rgba(0, 0, 0, 0.1)');

        //* handle dark-mode changed
        if (isSwitched) {
            // get elements
            const body = document.querySelector('body');
            const header = document.querySelector('.Header_wrapper__H5T4g');
            const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');

            const search = document.querySelector('.Header_search__PKR0D');
            const searchInput = document.querySelector('.Header_search-input__VJHrA');
            const spanSpliter = document.querySelector('.spanSpliter');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');

            const upload = document.querySelector('.Header_upload__EGBKW');
            const uploadIcon = document.querySelector('.Header_upload-icon__9m6OI');

            const deviceChangedIcon = document.querySelector('.device-changed-icon');
            const deviceDownload = document.querySelector('.Header_device-download-wrapper__kdZfI');
            const deviceDownloadImg = document.querySelector('.Header_download-image__kxWSr');
            const deviceDownloadHeader = document.querySelector('.Header_download-header__57PwS');

            const downloadOn = document.querySelector('.Header_download-on__7Zggw');
            const downloadRightArrow = document.querySelector('.Header_right-arrow__TkID6');
            const downloadModal = document.querySelector('.DownloadModal_download-modal__1YyxY');
            const downloadModalHeaderH2 = document.querySelector('.download-modal-header-h2');
            const downloadModalHeaderDes = document.querySelector('.download-qr-des');
            const downloadModalFromDes = document.querySelector('.download-from--des');
            const downloadModalCloseBtn = document.querySelector('.close-btn');

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

            const languageModal = document.querySelector('.LanguageModal_language-container__E45-L');
            const languageModalHeaderImg = document.querySelector('.language-header-img');
            const languageModalHeaderParagraph = document.querySelector('.language-header-p');
            const languageModalHeaderProp = document.querySelector('.LanguageModal_language-props__y2Yep');
            const languageModalHeaderProps = languageModalHeaderProp.querySelectorAll('li');

            const shortcutModal = document.querySelector('.ShortcutModal_shortcut-modal__TVL-2');
            const shortcutModalHeader = document.querySelector('.ShortcutModal_shortcut-modal-header__9nVe-');
            const shortcutModalContent = document.querySelector('.ShortcutModal_shortcut-modal-content__Hg1XC');
            const shortcutModalContents = shortcutModalContent.querySelectorAll('div');
            const shortcutModalCloseBtn = document.querySelector('.ShortcutModal_close-btn__qn8Aq');
            const shortcutModalCloseIcon = document.querySelector('.shortcut-modal-close-icon');

            const sidebarNavDirectLink = document.querySelectorAll('.nav-direct-link');
            const sidebarParagraph = document.querySelector('.Sidebar_paragraph__NtEqi');
            const sidebarEffectBackground = document.querySelector('.Sidebar_effect-background__mPKoL');
            const sidebarEffectIcon = document.querySelector('.effect-Icon');
            const sidebarEffectParagraph = document.querySelector('.effect-Paragraph');
            const sidebarLoginBtn = document.querySelector('.Sidebar_login-btn__LJD9l');
            const sidebarPolicy = document.querySelector('.Sidebar_policy__donMl');
            const sidebarPolicies = sidebarPolicy.querySelectorAll('a');
            const sidebarPolicyMore = document.querySelector('.Sidebar_more-policy__QR0DH');
            const sidebarPolicyCloneBy = document.querySelector('.policy-cloneBy');
            const sidebarPolicyExecute = document.querySelector('.Sidebar_policy-execute__Ubh8R');

            // add class for elements
            header.classList.add('dark-mode-background');
            body.classList.add('dark-mode-background');
            tiktokLogo.src = images.tiktokDarkModeLogo;
            tiktokLogo.style.marginTop = '10px';

            search.onmouseenter = () => {
                searchBorder.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                searchBtn.style.background = 'rgba(255, 255, 255, 0.12)';
            };
            search.onmouseleave = () => {
                searchBorder.style.border = 'transparent';
                searchBtn.style.background = 'transparent';
            };
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
            downloadModal.style.background = '#121212';
            downloadModalHeaderH2.style.color = '#fff';
            downloadModalHeaderDes.style.color = '#fff';
            downloadModalFromDes.style.color = '#fff';
            downloadModalCloseBtn.src = images.closeWhiteIcon;

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

            languageModal.style.background = '#252525';
            languageModalHeaderImg.src = images.closeWhiteIcon;
            languageModalHeaderParagraph.style.color = '#fff';
            languageModalHeaderProps.forEach((li) => {
                li.style.color = '#fff';
                li.onmouseenter = () => {
                    li.style.background = '#2f2f2f';
                };
                li.onmouseleave = () => {
                    li.style.background = '#252525';
                };
            });

            shortcutModal.style.background = '#252525';
            shortcutModalHeader.style.color = '#fff';
            shortcutModalContents.forEach((div) => {
                div.style.color = '#fff';
            });
            shortcutModalCloseBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            shortcutModalCloseIcon.src = images.closeWhiteIcon;

            sidebarNavDirectLink.forEach((link) => {
                link.style.background = '#121212';
                link.style.color = '#e8e8e8';
                link.onmouseenter = () => {
                    link.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                link.onmouseleave = () => {
                    link.style.background = '#121212';
                };
            });
            sidebarParagraph.style.color = '#7e7e7e';
            sidebarEffectBackground.src =
                'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d8db931296c3e5645b1e.png';
            sidebarEffectIcon.style.fill = 'white';
            sidebarEffectParagraph.style.color = '#e8e8e8';
            sidebarLoginBtn.style.background = 'rgba(255, 255, 255, .08)';
            sidebarLoginBtn.onmouseenter = () => {
                sidebarLoginBtn.style.background = 'rgb(116 0 0 / 12%)';
            };
            sidebarLoginBtn.onmouseleave = () => {
                sidebarLoginBtn.style.background = 'rgba(255, 255, 255, .08)';
            };
            sidebarPolicies.forEach((policy) => {
                policy.style.color = '#7e7e7e';
            });
            sidebarPolicyMore.style.color = '#7e7e7e';
            sidebarPolicyCloneBy.style.color = '#7e7e7e';
            sidebarPolicyExecute.style.color = '#7e7e7e';
            sidebarPolicyExecute.style.background = '#252525';
        } else {
            // get elements
            const body = document.querySelector('body');
            const header = document.querySelector('.Header_wrapper__H5T4g');
            const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');

            const search = document.querySelector('.Header_search__PKR0D');
            const searchInput = document.querySelector('.Header_search-input__VJHrA');
            const spanSpliter = document.querySelector('.spanSpliter');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');

            const upload = document.querySelector('.Header_upload__EGBKW');
            const uploadIcon = document.querySelector('.Header_upload-icon__9m6OI');

            const deviceChangedIcon = document.querySelector('.device-changed-icon');
            const deviceDownload = document.querySelector('.Header_device-download-wrapper__kdZfI');
            const deviceDownloadImg = document.querySelector('.Header_download-image__kxWSr');
            const deviceDownloadHeader = document.querySelector('.Header_download-header__57PwS');

            const downloadOn = document.querySelector('.Header_download-on__7Zggw');
            const downloadRightArrow = document.querySelector('.Header_right-arrow__TkID6');
            const downloadModal = document.querySelector('.DownloadModal_download-modal__1YyxY');
            const downloadModalHeaderH2 = document.querySelector('.download-modal-header-h2');
            const downloadModalHeaderDes = document.querySelector('.download-qr-des');
            const downloadModalFromDes = document.querySelector('.download-from--des');
            const downloadModalCloseBtn = document.querySelector('.close-btn');

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

            const languageModal = document.querySelector('.LanguageModal_language-container__E45-L');
            const languageModalHeaderImg = document.querySelector('.language-header-img');
            const languageModalHeaderParagraph = document.querySelector('.language-header-p');
            const languageModalHeaderProp = document.querySelector('.LanguageModal_language-props__y2Yep');
            const languageModalHeaderProps = languageModalHeaderProp.querySelectorAll('li');

            const shortcutModal = document.querySelector('.ShortcutModal_shortcut-modal__TVL-2');
            const shortcutModalHeader = document.querySelector('.ShortcutModal_shortcut-modal-header__9nVe-');
            const shortcutModalContent = document.querySelector('.ShortcutModal_shortcut-modal-content__Hg1XC');
            const shortcutModalContents = shortcutModalContent.querySelectorAll('div');
            const shortcutModalCloseBtn = document.querySelector('.ShortcutModal_close-btn__qn8Aq');
            const shortcutModalCloseIcon = document.querySelector('.shortcut-modal-close-icon');

            const sidebarNavDirectLink = document.querySelectorAll('.nav-direct-link');
            const sidebarParagraph = document.querySelector('.Sidebar_paragraph__NtEqi');
            const sidebarEffectBackground = document.querySelector('.Sidebar_effect-background__mPKoL');
            const sidebarEffectIcon = document.querySelector('.effect-Icon');
            const sidebarEffectParagraph = document.querySelector('.effect-Paragraph');
            const sidebarLoginBtn = document.querySelector('.Sidebar_login-btn__LJD9l');
            const sidebarPolicy = document.querySelector('.Sidebar_policy__donMl');
            const sidebarPolicies = sidebarPolicy.querySelectorAll('a');
            const sidebarPolicyMore = document.querySelector('.Sidebar_more-policy__QR0DH');
            const sidebarPolicyCloneBy = document.querySelector('.policy-cloneBy');
            const sidebarPolicyExecute = document.querySelector('.Sidebar_policy-execute__Ubh8R');
            // add class for elements
            header.classList.remove('dark-mode-background');
            body.classList.remove('dark-mode-background');
            tiktokLogo.src = images.tiktokLogo;
            tiktokLogo.style.marginTop = '0';

            search.onmouseenter = () => {
                search.style.border = '1px solid rgba(22, 24, 35, 0.2)';
                searchBtn.style.background = 'rgba(0, 0, 0, 0.043)';
            };
            search.onmouseleave = () => {
                searchBorder.style.border = 'transparent';
                searchBtn.style.background = 'transparent';
            };
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
            downloadModal.style.background = '#fff';
            downloadModalHeaderH2.style.color = '#000';
            downloadModalHeaderDes.style.color = '#000';
            downloadModalFromDes.style.color = '#000';
            downloadModalCloseBtn.src = images.closeIcon;

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

            languageModal.style.background = '#fff';
            languageModalHeaderImg.src = images.closeIcon;
            languageModalHeaderParagraph.style.color = '#000';
            languageModalHeaderProps.forEach((li) => {
                li.style.color = '#000';
                li.onmouseenter = () => {
                    li.style.background = 'rgba(22 , 24 , 35 ,0.06)';
                };
                li.onmouseleave = () => {
                    li.style.background = '#fff';
                };
            });

            shortcutModal.style.background = '#fff';
            shortcutModalHeader.style.color = '#000';
            shortcutModalContents.forEach((div) => {
                div.style.color = '#000';
            });
            shortcutModalCloseBtn.style.backgroundColor = 'rgba(22, 24, 35, 0.03)';
            shortcutModalCloseIcon.src = images.closeIcon;

            sidebarNavDirectLink.forEach((link) => {
                link.style.background = '#fff';
                link.style.color = '#000';
                link.onmouseenter = () => {
                    link.style.background = '#f2f2f2';
                };
                link.onmouseleave = () => {
                    link.style.background = '#fff';
                };
            });
            sidebarParagraph.style.color = 'rgba(22, 24, 35, 0.5)';
            sidebarEffectBackground.src =
                'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png';
            sidebarEffectIcon.style.fill = 'black';
            sidebarEffectParagraph.style.color = '#000';
            sidebarLoginBtn.style.background = '#fff';
            sidebarLoginBtn.onmouseenter = () => {
                sidebarLoginBtn.style.background = 'rgba(255, 0, 0, 0.06)';
            };
            sidebarLoginBtn.onmouseleave = () => {
                sidebarLoginBtn.style.background = '#fff';
            };
            sidebarPolicies.forEach((policy) => {
                policy.style.color = 'rgba(22, 24, 35, 0.5)';
            });
            sidebarPolicyMore.style.color = 'rgba(22, 24, 35, 0.5)';
            sidebarPolicyCloneBy.style.color = 'rgba(22, 24, 35, 0.5)';
            sidebarPolicyExecute.style.color = 'rgba(22, 24, 35, 0.5)';
            sidebarPolicyExecute.style.background = '#fff';
        }
    };
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

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';

import images from '~/assets/images';
import LoginModal from '../LoginModal';
import DownloadModal from '../DownloadModal';
import LanguageModal from '../LanguageModal';
import ShortcutModal from '../ShortcutModal';
import storage from '../storage';
import AccountsItem from '~/components/AccountsItem';

const cx = classNames.bind(styles);

const handleShowLoginModal = () => {
    const loginModal = document.querySelector('.LoginModal_wrapper__3fnKg');
    loginModal.style.opacity = 1;
    loginModal.style.visibility = 'visible';
    loginModal.style.zIndex = 99999;
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

//TODO: search GPT cách làm authen đăng nhập, làm authen đăng nhập qua google

//TODO: tạo layout mới khi đã đăng nhập (hoặc không cần, viết thêm logic khi đã login là đc)

//TODO: sửa thêm cơ chế khi scroll xuống quá mức của sidebar hoặc language thì nó sẽ scroll luôn content (lỗi do đặt content và sidebar chung 1 container)
function Header() {
    const [visible, setVisible] = useState(false);
    let [searchInputValue, setSearchInputValue] = useState('');
    let [searchInputState, setSearchInputState] = useState(false);
    let isSwitched = storage.get();

    //? Fake API
    const API = [
        { content: 'This website has been cloned by Thinh Nguyen', state: 'trending', stateIcon: images.trendingIcon },
        {
            content: 'This search box has been created by using Tippy tooltip',
            state: 'trending',
            stateIcon: images.trendingIcon,
        },
        { content: 'Lionel Messi', state: 'trending', stateIcon: images.trendingIcon },
        { content: 'Concert Rap Việt Mùa 3', state: 'explore', stateIcon: images.upArrowIcon },
        { content: 'Liverpool vô địch c1', state: 'default', stateIcon: images.trendingIcon },
        { content: 'Team Whales vô địch CKTG 2023', state: 'default', stateIcon: images.dotIcon },
        { content: 'Obito phát hành album mới', state: 'default', stateIcon: images.dotIcon },
        { content: 'Những Story Về Tình Yêu', state: 'default', stateIcon: images.dotIcon },
        { content: 'Alan Walker Về Việt Nam Biểu Diễn', state: 'default', stateIcon: images.dotIcon },
        { content: '2 Cô Giáo Bị Vùi Lấp Trên Đường Đi Dạy Về', state: 'default', stateIcon: images.dotIcon },
    ];
    const APIsearchResults = [
        {
            content: 'This website has been cloned by Thinh Nguyen',
        },
        {
            content: 'This search box has been created by using Tippy tooltip',
        },
        {
            content: 'Lionel Messi',
        },
        {
            content: 'Concert Rap Việt Mùa 3',
        },
        {
            content: 'Liverpool vô địch c1',
        },
        {
            content: 'Team Whales vô địch CKTG 2023',
        },
        {
            content: 'Obito phát hành album mới',
        },
        {
            content: 'Những Story Về Tình Yêu',
        },
    ];
    const [recommendResults, setRecommendResults] = useState(API);
    const [searchResults, setSearchResults] = useState(APIsearchResults);

    const handleSearching = (e) => {
        if (e.target.value.length > 0) {
            setSearchInputState(true);
            setSearchInputValue(e.target.value);
        } else {
            setSearchInputState(false);
            setSearchInputValue(e.target.value);
        }
    };
    useEffect(() => {
        const switchBtn = document.querySelector('.switch-btn');
        const switchProp = document.querySelector('.switch-prop');

        const transformValue = storage.get() ? 'translateX(20px)' : 'translateX(0)';
        switchProp.style.transform = transformValue;
        storage.get()
            ? (switchBtn.style.background = 'rgb(79 254 168)')
            : (switchBtn.style.background = 'rgba(0, 0, 0, 0.1)');

        if (storage.get()) {
            // get elements
            const body = document.querySelector('body');
            const header = document.querySelector('.Header_wrapper__H5T4g');
            const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');

            const search = document.querySelector('.Header_search__PKR0D');
            const searchInput = document.querySelector('.Header_search-input__VJHrA');
            const searchClearBtn = document.querySelector('.Header_clear-btn__tESFF');
            const searchLoadingBtn = document.querySelector('.Header_loading-btn__1EoYb');
            const searchClearIcon = document.querySelector('.clear-icon');
            const searchLoadingIcon = document.querySelector('.loading-icon');
            const spanSpliter = document.querySelector('.spanSpliter');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');
            const searchResults = document.querySelector('.Header_search-results__GAgG-');
            const searchResult = document.querySelectorAll('.Header_search-result-item__sCAht');
            const searchResultsHeader = document.querySelector('.Header_search-results-header__kk8u9');
            const searchResultsContents = document.querySelectorAll('.Header_search-result-li__4Sn9Z');
            const searchSeeAllResults = document.querySelector('.Header_seeAllResults__WkZnh');
            const searchSeeAllResultsText = document.querySelector('.Header_seeAllResultsText__pQz1J');

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
            const loginFormHeader = document.querySelector('.login-form-header');
            const loginModalDes = document.querySelector('.LoginModal_login-description__Pw8CZ');
            const loginModalHidePasswordIcon = document.querySelector('.hide-svg');
            const loginModalShowPasswordIcon = document.querySelector('.show-svg');
            const loginModalForgetPassword = document.querySelector('.LoginModal_forget-password__2MtY0');
            const loginModalInputs = document.querySelectorAll('.LoginModal_form-label__I5JGX');
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
            if (searchInput.value === '') {
                searchClearBtn.style.display = 'none';
            }
            searchInput.addEventListener('keydown', () => {
                searchClearBtn.style.display = 'none';
                searchLoadingBtn.style.display = 'block';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchInput.addEventListener('keyup', () => {
                searchClearBtn.style.display = 'block';
                searchLoadingBtn.style.display = 'none';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchClearBtn.addEventListener('click', () => {
                searchClearBtn.style.display = 'none';
                setSearchInputValue('');
                setSearchInputState(false);
                searchInput.focus();
            });
            searchClearIcon.style.fill = '#767676';
            searchLoadingIcon.style.fill = '#767676';
            spanSpliter.style.background = 'rgba(255, 255, 255, .12)';
            searchIcon.src = images.searchGrayIcon;
            searchActiveIcon.src = images.searchWhiteIcon;
            if (searchResults) {
                searchResults.style.background = 'rgb(37, 37, 37)';
                searchResultsHeader.style.color = 'rgb(126, 126, 126)';
                searchResultsContents.forEach((searchResultsContent) => {
                    searchResultsContent.style.color = 'rgb(232, 232, 232)';
                });
                if (searchSeeAllResultsText) {
                    searchSeeAllResultsText.style.color = '#fff';
                }
            }
            searchResult.forEach((result) => {
                result.style.background = 'rgb(37, 37, 37)';
                result.onmouseenter = () => {
                    result.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                result.onmouseleave = () => {
                    result.style.background = 'rgb(37, 37, 37)';
                };
            });
            if (searchSeeAllResults) {
                searchSeeAllResults.style.background = 'rgb(37, 37, 37)';
                searchSeeAllResults.onmouseenter = () => {
                    searchSeeAllResults.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                searchSeeAllResults.onmouseleave = () => {
                    searchSeeAllResults.style.background = 'rgb(37, 37, 37)';
                };
            }

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
            loginFormHeader.style.color = '#fff';
            loginModalDes.style.color = 'rgba(255, 255, 255, 0.9)';
            loginModalInputs.forEach((input) => {
                input.style.color = 'rgba(255, 255, 255, 0.9)';
                input.style.backgroundColor = '#3f3f3f';
            });
            loginModalHidePasswordIcon.style.fill = '#969696';
            loginModalShowPasswordIcon.style.fill = '#969696';
            loginModalForgetPassword.style.color = 'rgba(255, 255, 255, 0.9)';
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
                li.style.background = '#252525';
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
            const searchClearBtn = document.querySelector('.Header_clear-btn__tESFF');
            const searchLoadingBtn = document.querySelector('.Header_loading-btn__1EoYb');
            const searchClearIcon = document.querySelector('.clear-icon');
            const searchLoadingIcon = document.querySelector('.loading-icon');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');
            const searchResults = document.querySelector('.Header_search-results__GAgG-');
            const searchResult = document.querySelectorAll('.Header_search-result-item__sCAht');
            const searchResultsHeader = document.querySelector('.Header_search-results-header__kk8u9');
            const searchResultsContents = document.querySelectorAll('.Header_search-result-li__4Sn9Z');
            const searchSeeAllResults = document.querySelector('.Header_seeAllResults__WkZnh');
            const searchSeeAllResultsText = document.querySelector('.Header_seeAllResultsText__pQz1J');

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
            const loginFormHeader = document.querySelector('.login-form-header');
            const loginModalDes = document.querySelector('.LoginModal_login-description__Pw8CZ');
            const loginModalHidePasswordIcon = document.querySelector('.hide-svg');
            const loginModalShowPasswordIcon = document.querySelector('.show-svg');
            const loginModalForgetPassword = document.querySelector('.LoginModal_forget-password__2MtY0');
            const loginModalInputs = document.querySelectorAll('.LoginModal_form-label__I5JGX');
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
                searchBorder.style.border = '1px solid rgba(22, 24, 35, 0.2)';
                searchBtn.style.background = 'rgba(0, 0, 0, 0.043)';
            };
            search.onmouseleave = () => {
                searchBorder.style.border = 'transparent';
                searchBtn.style.background = 'transparent';
            };
            search.style.background = 'rgba(22, 24, 35, 0.06)';
            searchInput.style.color = 'rgb(22, 24, 35)';
            if (searchInput.value === '') {
                searchClearBtn.style.display = 'none';
            }
            searchInput.addEventListener('keydown', () => {
                searchClearBtn.style.display = 'none';
                searchLoadingBtn.style.display = 'block';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchInput.addEventListener('keyup', () => {
                searchClearBtn.style.display = 'block';
                searchLoadingBtn.style.display = 'none';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchClearBtn.addEventListener('click', () => {
                searchClearBtn.style.display = 'none';
                setSearchInputValue('');
                setSearchInputState(false);
                searchInput.focus();
            });
            searchClearIcon.style.fill = '#a6a7ab';
            searchLoadingIcon.style.fill = '#a6a7ab';
            spanSpliter.style.background = 'rgba(22, 24, 35, 0.12)';
            searchIcon.src = images.searchIcon;
            searchActiveIcon.src = images.searchBlackIcon;
            if (searchResults) {
                searchResults.style.background = '#fff';
                searchResultsHeader.style.color = 'rgba(22, 24, 35, 0.75)';
                searchResultsContents.forEach((searchResultsContent) => {
                    searchResultsContent.style.color = '#000';
                });
                if (searchSeeAllResultsText) {
                    searchSeeAllResultsText.style.color = '#000';
                }
            }
            searchResult.forEach((result) => {
                result.style.background = '#fff';
                result.onmouseenter = () => {
                    result.style.background = '#0000000b';
                };
                result.onmouseleave = () => {
                    result.style.background = '#fff';
                };
            });
            if (searchSeeAllResults) {
                searchSeeAllResults.style.background = '#fff';
                searchSeeAllResults.onmouseenter = () => {
                    searchSeeAllResults.style.background = '#0000000b';
                };
                searchSeeAllResults.onmouseleave = () => {
                    searchSeeAllResults.style.background = '#fff';
                };
            }

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
            loginFormHeader.style.color = '#000';
            loginModalDes.style.color = '#000';
            loginModalInputs.forEach((input) => {
                input.style.color = 'rgb(22, 24, 35)';
                input.style.backgroundColor = 'rgba(22, 24, 35, 0.06)';
            });
            loginModalHidePasswordIcon.style.fill = 'currentcolor';
            loginModalShowPasswordIcon.style.fill = 'currentcolor';
            loginModalForgetPassword.style.color = 'rgba(22, 24, 35, 0.75)';
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
                li.style.background = '#fff';
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
    });
    const handleSwitch = () => {
        isSwitched = !isSwitched;
        storage.set(isSwitched);
        // handle switch
        const switchProp = document.querySelector('.switch-prop');
        const switchBtn = document.querySelector('.switch-btn');

        const transformValue = isSwitched ? 'translateX(20px)' : 'translateX(0)';
        switchProp.style.transform = transformValue;
        isSwitched
            ? (switchBtn.style.background = 'rgb(79 254 168)')
            : (switchBtn.style.background = 'rgba(0, 0, 0, 0.1)');

        //* handle dark-mode changed
        if (storage.get()) {
            // get elements
            const body = document.querySelector('body');
            const header = document.querySelector('.Header_wrapper__H5T4g');
            const tiktokLogo = document.querySelector('.Header_tiktok-logo__Q2llv');

            const search = document.querySelector('.Header_search__PKR0D');
            const searchInput = document.querySelector('.Header_search-input__VJHrA');
            const searchClearBtn = document.querySelector('.Header_clear-btn__tESFF');
            const searchLoadingBtn = document.querySelector('.Header_loading-btn__1EoYb');
            const searchClearIcon = document.querySelector('.clear-icon');
            const searchLoadingIcon = document.querySelector('.loading-icon');
            const spanSpliter = document.querySelector('.spanSpliter');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');
            const searchResults = document.querySelector('.Header_search-results__GAgG-');
            const searchResult = document.querySelectorAll('.Header_search-result-item__sCAht');
            const searchResultsHeader = document.querySelector('.Header_search-results-header__kk8u9');
            const searchResultsContents = document.querySelectorAll('.Header_search-result-li__4Sn9Z');
            const searchSeeAllResults = document.querySelector('.Header_seeAllResults__WkZnh');
            const searchSeeAllResultsText = document.querySelector('.Header_seeAllResultsText__pQz1J');

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
            const loginFormHeader = document.querySelector('.login-form-header');
            const loginModalDes = document.querySelector('.LoginModal_login-description__Pw8CZ');
            const loginModalHidePasswordIcon = document.querySelector('.hide-svg');
            const loginModalShowPasswordIcon = document.querySelector('.show-svg');
            const loginModalForgetPassword = document.querySelector('.LoginModal_forget-password__2MtY0');
            const loginModalInputs = document.querySelectorAll('.LoginModal_form-label__I5JGX');
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
            if (searchInput.value === '') {
                searchClearBtn.style.display = 'none';
            }
            searchInput.addEventListener('keydown', () => {
                searchClearBtn.style.display = 'none';
                searchLoadingBtn.style.display = 'block';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchInput.addEventListener('keyup', () => {
                searchClearBtn.style.display = 'block';
                searchLoadingBtn.style.display = 'none';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchClearBtn.addEventListener('click', () => {
                searchClearBtn.style.display = 'none';
                setSearchInputValue('');
                setSearchInputState(false);
                searchInput.focus();
            });
            searchClearIcon.style.fill = '#767676';
            searchLoadingIcon.style.fill = '#767676';
            spanSpliter.style.background = 'rgba(255, 255, 255, .12)';
            searchIcon.src = images.searchGrayIcon;
            searchActiveIcon.src = images.searchWhiteIcon;
            if (searchResults) {
                searchResults.style.background = 'rgb(37, 37, 37)';
                searchResultsHeader.style.color = 'rgb(126, 126, 126)';
                searchResultsContents.forEach((searchResultsContent) => {
                    searchResultsContent.style.color = 'rgb(232, 232, 232)';
                });
                if (searchSeeAllResultsText) {
                    searchSeeAllResultsText.style.color = '#fff';
                }
            }
            searchResult.forEach((result) => {
                result.style.background = 'rgb(37, 37, 37)';
                result.onmouseenter = () => {
                    result.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                result.onmouseleave = () => {
                    result.style.background = 'rgb(37, 37, 37)';
                };
            });
            if (searchSeeAllResults) {
                searchSeeAllResults.style.background = 'rgb(37, 37, 37)';
                searchSeeAllResults.onmouseenter = () => {
                    searchSeeAllResults.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                searchSeeAllResults.onmouseleave = () => {
                    searchSeeAllResults.style.background = 'rgb(37, 37, 37)';
                };
            }

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
            loginFormHeader.style.color = '#fff';
            loginModalDes.style.color = 'rgba(255, 255, 255, 0.9)';
            loginModalInputs.forEach((input) => {
                input.style.color = 'rgba(255, 255, 255, 0.9)';
                input.style.backgroundColor = '#3f3f3f';
            });
            loginModalHidePasswordIcon.style.fill = '#969696';
            loginModalShowPasswordIcon.style.fill = '#969696';
            loginModalForgetPassword.style.color = 'rgba(255, 255, 255, 0.9)';
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
                li.style.background = '#252525';
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
            const searchClearBtn = document.querySelector('.Header_clear-btn__tESFF');
            const searchLoadingBtn = document.querySelector('.Header_loading-btn__1EoYb');
            const searchClearIcon = document.querySelector('.clear-icon');
            const searchLoadingIcon = document.querySelector('.loading-icon');
            const searchBtn = document.querySelector('.Header_search-btn__Bs0JF');
            const searchIcon = document.querySelector('.Header_search-icon__z9aVK');
            const searchActiveIcon = document.querySelector('.Header_search--active-icon__bsyoF');
            const searchBorder = document.querySelector('.Header_search-border__MiLkN');
            const searchResults = document.querySelector('.Header_search-results__GAgG-');
            const searchResult = document.querySelectorAll('.Header_search-result-item__sCAht');
            const searchResultsHeader = document.querySelector('.Header_search-results-header__kk8u9');
            const searchResultsContents = document.querySelectorAll('.Header_search-result-li__4Sn9Z');
            const searchSeeAllResults = document.querySelector('.Header_seeAllResults__WkZnh');
            const searchSeeAllResultsText = document.querySelector('.Header_seeAllResultsText__pQz1J');

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
            const loginFormHeader = document.querySelector('.login-form-header');
            const loginModalDes = document.querySelector('.LoginModal_login-description__Pw8CZ');
            const loginModalHidePasswordIcon = document.querySelector('.hide-svg');
            const loginModalShowPasswordIcon = document.querySelector('.show-svg');
            const loginModalForgetPassword = document.querySelector('.LoginModal_forget-password__2MtY0');
            const loginModalInputs = document.querySelectorAll('.LoginModal_form-label__I5JGX');
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
                searchBorder.style.border = '1px solid rgba(22, 24, 35, 0.2)';
                searchBtn.style.background = 'rgba(0, 0, 0, 0.043)';
            };
            search.onmouseleave = () => {
                searchBorder.style.border = 'transparent';
                searchBtn.style.background = 'transparent';
            };
            search.style.background = 'rgba(22, 24, 35, 0.06)';
            searchInput.style.color = 'rgb(22, 24, 35)';
            if (searchInput.value === '') {
                searchClearBtn.style.display = 'none';
            }
            searchInput.addEventListener('keydown', () => {
                searchClearBtn.style.display = 'none';
                searchLoadingBtn.style.display = 'block';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchInput.addEventListener('keyup', () => {
                searchClearBtn.style.display = 'block';
                searchLoadingBtn.style.display = 'none';
                if (searchInput.value === '') {
                    searchClearBtn.style.display = 'none';
                }
            });
            searchClearBtn.addEventListener('click', () => {
                searchClearBtn.style.display = 'none';
                setSearchInputValue('');
                setSearchInputState(false);
                searchInput.focus();
            });
            searchClearIcon.style.fill = '#a6a7ab';
            searchLoadingIcon.style.fill = '#a6a7ab';
            spanSpliter.style.background = 'rgba(22, 24, 35, 0.12)';
            searchIcon.src = images.searchIcon;
            searchActiveIcon.src = images.searchBlackIcon;
            if (searchResults) {
                searchResults.style.background = '#fff';
                searchResultsHeader.style.color = 'rgba(22, 24, 35, 0.75)';
                searchResultsContents.forEach((searchResultsContent) => {
                    searchResultsContent.style.color = '#000';
                });
                if (searchSeeAllResultsText) {
                    searchSeeAllResultsText.style.color = '#000';
                }
            }
            searchResult.forEach((result) => {
                result.style.background = '#fff';
                result.onmouseenter = () => {
                    result.style.background = '#0000000b';
                };
                result.onmouseleave = () => {
                    result.style.background = '#fff';
                };
            });
            if (searchSeeAllResults) {
                searchSeeAllResults.style.background = '#fff';
                searchSeeAllResults.onmouseenter = () => {
                    searchSeeAllResults.style.background = '#0000000b';
                };
                searchSeeAllResults.onmouseleave = () => {
                    searchSeeAllResults.style.background = '#fff';
                };
            }

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
            loginFormHeader.style.color = '#000';
            loginModalDes.style.color = '#000';
            loginModalInputs.forEach((input) => {
                input.style.color = 'rgb(22, 24, 35)';
                input.style.backgroundColor = 'rgba(22, 24, 35, 0.06)';
            });
            loginModalHidePasswordIcon.style.fill = 'currentcolor';
            loginModalShowPasswordIcon.style.fill = 'currentcolor';
            loginModalForgetPassword.style.color = 'rgba(22, 24, 35, 0.75)';
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
                li.style.background = '#fff';
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
                <Tippy
                    interactive={true}
                    trigger="click"
                    visible={visible}
                    onClickOutside={() => setVisible(false)}
                    render={(attrs) =>
                        !searchInputState ? (
                            <ul
                                className={cx('search-results')}
                                tabIndex="-1"
                                {...attrs}
                                style={visible ? { display: 'block' } : { display: 'none' }}
                            >
                                <div className={cx('search-results-header')}>Bạn có thể thích</div>
                                {recommendResults.map((recommendResult, i) => {
                                    return (
                                        <li className={cx('search-result-item')} key={i}>
                                            <img
                                                src={recommendResult.stateIcon}
                                                alt={recommendResult.state}
                                                className={cx('search-result-img')}
                                            />
                                            <h4 className={cx('search-result-li')}>{recommendResult.content}</h4>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <ul
                                className={cx('search-results')}
                                tabIndex="-1"
                                {...attrs}
                                style={visible ? { display: 'block' } : { display: 'none' }}
                            >
                                {searchResults.map((searchResult, i) => {
                                    return (
                                        <li className={cx('search-result-item')} key={i}>
                                            <img
                                                src={
                                                    isSwitched === true
                                                        ? images.searchWhiteIcon
                                                        : images.searchBlackIcon
                                                }
                                                alt={searchResult.state}
                                                className={cx('search-result-img')}
                                            />
                                            <h4 className={cx('search-result-li', 'sub')}>{searchResult.content}</h4>
                                        </li>
                                    );
                                })}
                                <div className={cx('search-results-header')}>Tài khoản</div>
                                <AccountsItem />
                                <li className={cx('seeAllResults')}>
                                    <p className={cx('seeAllResultsText')}>
                                        Xem tất cả kết quả dành cho "{searchInputValue}"
                                    </p>
                                </li>
                            </ul>
                        )
                    }
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            className={cx('search-input')}
                            onInput={(e) => handleSearching(e)}
                            onClick={() => setVisible(true)}
                            value={searchInputValue}
                        />
                        <button className={cx('clear-btn')}>
                            <svg
                                width="16"
                                data-e2e=""
                                height="16"
                                viewBox="0 0 48 48"
                                fill="rgba(22, 24, 35, .34)"
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx('clear-icon')}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
                                ></path>
                            </svg>
                        </button>
                        <button className={cx('loading-btn')}>
                            <svg
                                width="16"
                                data-e2e=""
                                height="16"
                                viewBox="0 0 48 48"
                                fill="rgba(22, 24, 35, .34)"
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx('loading-icon')}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z"
                                ></path>
                            </svg>
                        </button>
                        <span className="spanSpliter"></span>
                        <button className={cx('search-btn')}>
                            <img src={images.searchBlackIcon} alt="Search logo" className={cx('search--active-icon')} />
                            <img src={images.searchIcon} alt="Search logo" className={cx('search-icon')} />
                        </button>
                        <div className={cx('search-border')}></div>
                    </div>
                </Tippy>
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

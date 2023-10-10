import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';

import Styles from '../Sidebar/Sidebar.module.scss';
import images from '~/assets/images';
import storage from '../storage';

const cx = classNames.bind(Styles);

const handleShowLoginModal = () => {
    const modalWrapper = document.querySelector('.LoginModal_wrapper__3fnKg');
    modalWrapper.style.opacity = 1;
    modalWrapper.style.visibility = 'visible';
};

function Sidebar() {
    let isActive = useRef(0);
    let [isSwitched, setSwitched] = useState(false);
    let [activeLi, setActiveLi] = useState(null);

    useEffect(() => {
        const switchBtn = document.querySelector('.switch-btn');
        if (storage.get() === false) {
            setSwitched(false);
            storage.set(false);
        }
        if (storage.get() === true) {
            setSwitched(true);
            storage.set(true);
        }

        switchBtn.addEventListener('click', () => {
            setSwitched(!isSwitched);
            storage.set(!isSwitched);
        });
        const liElements = document.querySelectorAll('.nav');
        if (activeLi === null) {
            liElements[0].classList.add('active');
            isActive.current = 0;
        }

        liElements.forEach((liElement, i) => {
            liElement.addEventListener('click', () => {
                if (activeLi) {
                    activeLi.classList.remove('active');
                } else if (activeLi === null) {
                    liElements[0].classList.remove('active');
                }

                liElement.classList.add('active');
                isActive.current = i;
                setActiveLi(liElement);
            });
        });
    }, [isSwitched, isActive, activeLi]);

    return (
        <aside className={cx('wrapper')}>
            <ul className={cx('nav-direct')}>
                <li className={cx('home', 'nav')}>
                    <Link className={cx('nav-direct-link')} to="/">
                        <img
                            src={
                                isActive.current === 0
                                    ? images.homeActiveIcon
                                    : storage.get()
                                    ? images.homeWhiteIcon
                                    : images.homeIcon
                            }
                            alt="home icon"
                            className={cx('home-icon')}
                        />{' '}
                        Dành cho bạn
                    </Link>
                </li>
                <li className={cx('following', 'nav')}>
                    <Link className={cx('nav-direct-link')} to="/following">
                        <img
                            src={
                                isActive.current === 1
                                    ? images.followActiveIcon
                                    : storage.get()
                                    ? images.followWhiteIcon
                                    : images.followIcon
                            }
                            alt="follow icon"
                            className={cx('follow-icon')}
                        />{' '}
                        Đang Follow
                    </Link>
                </li>
                <li className={cx('explore', 'nav')}>
                    <Link className={cx('nav-direct-link')} to="/explore">
                        <img
                            src={
                                isActive.current === 2
                                    ? images.exploreActiveIcon
                                    : storage.get()
                                    ? images.exploreWhiteIcon
                                    : images.exploreIcon
                            }
                            alt="explore icon"
                            className={cx('explore-icon')}
                        />{' '}
                        Khám phá
                    </Link>
                </li>
                <li className={cx('live', 'nav')}>
                    <Link className={cx('nav-direct-link')} to="/live">
                        <img
                            src={
                                isActive.current === 3
                                    ? images.liveActiveIcon
                                    : storage.get()
                                    ? images.liveWhiteIcon
                                    : images.liveIcon
                            }
                            alt="live icon"
                            className={cx('live-icon')}
                        />{' '}
                        LIVE
                    </Link>
                </li>
            </ul>
            <div className={cx('login-suggested')}>
                <p className={cx('paragraph')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <button className={cx('login-btn')} onClick={() => handleShowLoginModal()}>
                    Đăng nhập
                </button>
            </div>
            <div className={cx('policy')}>
                <div className={cx('effect-btn')}>
                    <a
                        href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v2&amp;utm_source=tiktok_webapp_main"
                        className={cx('effect-link')}
                    >
                        <img
                            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                            alt="eh-background"
                            className={cx('effect-background')}
                        />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="white">
                                <path
                                    className={cx('effect-Icon')}
                                    fill="black"
                                    d="M0 18V9a9 9 0 0 1 18 0v9H0Zm15.75-2.25V9a6.75 6.75 0 0 0-9.978-5.93 6.744 6.744 0 0 1 6.619 2.971A4.483 4.483 0 0 1 13.5 9v6.75h2.25ZM6.502 5.257A4.5 4.5 0 0 0 2.25 9.75v6H4.5V9c0-1.56.795-2.936 2.002-3.743Zm4.096 2.16A2.25 2.25 0 0 0 6.75 9v6.75h4.5v-6a4.48 4.48 0 0 0-.652-2.333Z"
                                ></path>
                            </svg>

                            <h4 className={cx('effect-Paragraph')}>Tạo hiệu ứng</h4>
                        </div>
                    </a>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/about?lang=vi-VN">
                        Giới thiệu
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://newsroom.tiktok.com/">
                        Bảng tin
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/about/contact?lang=vi-VN">
                        Liên hệ
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://careers.tiktok.com">
                        Sự nghiệp
                    </a>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/forgood">
                        TikTok for Good
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
                    >
                        Quảng cáo
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://developers.tiktok.com/?refer=tiktok_web">
                        Developers
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/transparency">
                        Minh bạch
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/tiktok-rewards/vi-VN">
                        TikTok Rewards
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/embed">
                        TikTok Embeds
                    </a>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href="https://support.tiktok.com/vi-VN">
                        Trợ giúp
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/safety?lang=vi-VN">
                        An toàn
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/legal/terms-of-service?lang=vi-VN">
                        Điều khoản
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi-VN"
                    >
                        Quyền riêng tư
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/creators/creator-portal/en-us/">
                        Cổng thông tin tác giả
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/community-guidelines?lang=vi-VN">
                        Hướng dẫn cộng đồng
                    </a>
                </div>
                <div>
                    <span className={cx('more-policy')}>Thêm</span>
                    <div className={cx('policy-execute-wrapper')}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.tiktok.com/legal/page/global/law-enforcement/vi"
                            className={cx('policy-execute')}
                        >
                            NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                        </a>
                    </div>
                </div>
                <span className={cx('policy-cloneBy')}>
                    ©TikTok clone by <a href="https://www.facebook.com/profile.php?id=100007758302640">Thinh Nguyen</a>
                </span>
            </div>
        </aside>
    );
}

export default Sidebar;

import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const handleClose = () => {
    const loginModal = document.querySelector('.LoginModal_wrapper__3fnKg');
    loginModal.style.opacity = 0;
    loginModal.style.visibility = 'hidden';
};

const alertCantLogin = (app) => {
    alert(`Đăng nhập với ${app} hiện đang bị lỗi, vui lòng thử lại bằng phương thức khác`);
};

function LoginModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-modal')}>
                <div className={cx('login-modal-content')}>
                    <div className={cx('login-wrapper')}>
                        <div className={cx('login-container')}>
                            <h2>Đăng nhập vào TikTok</h2>
                            <a href="https://www.tiktok.com/login/qrcode?enter_from=homepage_hot&enter_method=click_top_bar&hide_close_btn=1&is_modal=1&lang=vi-VN&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fvi-VN&type=">
                                <img src={images.qrIcon} alt="qr icon" />
                                <p>Sử dụng mã QR</p>
                            </a>
                            <a href="https://www.tiktok.com/login/phone-or-email?enter_from=homepage_hot&enter_method=click_navigation_bar&hide_close_btn=1&is_modal=1&lang=vi-VN&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%2F&type=">
                                <img src={images.humanIcon} alt="human icon" />
                                <p>Số điện thoại / Email / TikTok ID</p>
                            </a>
                            <a onClick={() => alertCantLogin('Facebook')}>
                                <img src={images.facebookIcon} alt="facebook icon" />
                                <p>Tiếp tục với Facebook</p>
                            </a>
                            <a
                                href="https://accounts.google.com/v3/signin/identifier?opparams=%253Fplatform%253Dgoogle&dsh=S1862857662%3A1695489417061148&client_id=1096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com&o2v=2&prompt=consent&redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Flogin%2F&response_type=token&scope=openid+profile&service=lso&state=%7B%22client_id%22%3A%221096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com%22%2C%22network%22%3A%22google%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_5q8nd9bm%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fwww.tiktok.com%2Flogin%2F%22%2C%22scope%22%3A%22basic%22%7D&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hANhLvSozjZnAQovpEpmPBDYgVDe7A-4ehudlcKTL7ZtxnJHk8LYNJF0jj9J8cUGVY6poks4VuGtNEsTyBUPXJ2LvWjyHH5iXL2sudhTV6-KSAVvolNQtufL7bR5VlXoLF_i5c_MWua3ZCeVRFberAdWIFNvMBO8ZZoH0YcpXWTTms7w1wnvtnXCZiSUY4YUruh2UTska5Y0xOcrPvbFteML_ULSJn43Zs_FIosZKIXmLZ0pcViRBkQPeOemXAQlP0OggayQhugYVpnUknJdXqh4v9-8MispUGL0sQB1DBfDFgd9Rl8h01Anj8qANX8YExvYbjmZKU8EkCtfxNBE7hWQcWoinW06vTcB8kFiOwHgN_9g7jli5r12f0F_l9SYMu9WpwLOwjPTW0LlVWJ5mhN1fKS_qe22vPgO8OIIfj8WJyDzx69M85tYVkmzsrW92hELvzgXfOD28KmuEkFylD0GWuovMg%26as%3DS1862857662%253A1695489417061148%26client_id%3D1096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=https%3A%2F%2Fwww.tiktok.com&rart=ANgoxce1sLgu0LnExmkpD7eiHDyV4dAbuIVoh_tCfvMf-l2v8qCLxSTHXwf-RgGANl64yb3xeG4ipz03P1M7KWWFYP_Y_gry3w"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={images.googleIcon} alt="google icon" />
                                <p>Tiếp tục với Google</p>
                            </a>
                            <a
                                href="https://api.twitter.com/oauth/authenticate?oauth_token=T6m_4QAAAAAA-ZVUAAABisMLw-w"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={images.twitterIcon} alt="twitter icon" />
                                <p>Tiếp tục với Twitter</p>
                            </a>
                            <a
                                href="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fclient_id%3D1569196861%26redirect_uri%3Dhttps%253A%252F%252Fwww.tiktok.com%252FoauthLine%252F%26response_type%3Dcode%26scope%3Dopenid%2Bprofile%26state%3D1line&loginChannelId=1569196861&loginState=5L0goIapNiXCItIo64MXTL#/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={images.lineIcon} alt="line icon" />
                                <p>Tiếp tục với LINE</p>
                            </a>
                            <a
                                href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_lyii0r5v1t_provider%26ka%3Dsdk%252F1.39.4%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fvi-GB%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.tiktok.com%26origin%3Dhttps%253A%252F%252Fwww.tiktok.com%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3D69ma01hpy0u7hgwnukyrqh%26through_account%3Dtrue%26client_id%3D4954e33ea2a4395e59ecbc20761bd889&talk_login=hidden#login"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={images.kakaotalkIcon} alt="kakaotalk icon" />
                                <p>Tiếp tục với KakaoTalk</p>
                            </a>
                            <a
                                href="https://appleid.apple.com/auth/authorize?client_id=com.ss.iphone.ugc.Ame.siwa-web&redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Foauth&response_type=code%20id_token&state=39e79bd43gASoVCgoVPZIDAzMDdlMjZlMzY2YTUyMGMwMzljNmE2Nzg0YTI4YjNhoU7ZJWh0dHBzOi8vd3d3LnRpa3Rvay5jb20vZm9yeW91P2xhbmc9ZW6hVgGhSQChRNNlDx02LcJGAaFB0QWzoU0AoUiud3d3LnRpa3Rvay5jb22hUgKiUEzRAuumQUNUSU9OqmxvZ2luX29ubHmhTL1odHRwczovL3d3dy50aWt0b2suY29tL2ZvcnlvdaFU2SA4NzRmMzE0NWFiNGEzNTUyYjA2OWYwZDc1YzRhY2Y2NqFXAKFGAKJTQQChVcI%253D&scope=name%20email&response_mode=web_message&frame_id=5c7dd39c-a5bf-42a7-9a76-9fbde971b077&m=11&v=1.5.4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className={cx('appleIcon')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                    >
                                        <g transform="scale(0.5)">
                                            <path
                                                fillRule="evenodd"
                                                d="M32.54 4c.278 2.368-.73 4.699-2.203 6.412-1.537 1.687-3.999 2.978-6.395 2.811-.312-2.276.9-4.697 2.26-6.174C27.739 5.372 30.406 4.09 32.539 4Zm7.844 13.647c-.276.153-4.7 2.614-4.65 7.625.055 6.058 5.697 8.059 5.766 8.08-.034.14-.883 2.89-2.999 5.68-1.768 2.458-3.621 4.86-6.56 4.905-1.399.03-2.342-.345-3.326-.734-1.026-.407-2.095-.831-3.77-.831-1.773 0-2.89.437-3.966.86-.932.364-1.833.717-3.104.766-2.801.097-4.94-2.624-6.772-5.06-3.659-4.97-6.51-14.01-2.689-20.159 1.851-3.016 5.23-4.96 8.837-5.011 1.59-.031 3.114.538 4.45 1.038 1.02.381 1.932.722 2.678.722.657 0 1.543-.328 2.576-.709 1.628-.601 3.62-1.336 5.648-1.137 1.387.036 5.338.508 7.887 3.962l-.006.003Z"
                                                clipRule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <p>Tiếp tục với Apple</p>
                            </a>
                            <a onClick={() => alertCantLogin('Instagram')}>
                                <img src={images.instagramIcon} alt="instagram icon" />
                                <p>Tiếp tục với Instagram</p>
                            </a>
                        </div>
                    </div>
                    <div className={cx('login-policy')}>
                        <p>
                            Bằng cách tiếp tục, bạn đồng ý với{' '}
                            <a href="https://www.tiktok.com/legal/terms-of-use?lang=vi-VN">Điều khoản Sử dụng</a> của
                            TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
                            <a href="https://www.tiktok.com/legal/privacy-policy?lang=vi-VN">
                                Chính sách Quyền riêng tư
                            </a>{' '}
                            của TikTok.
                        </p>
                    </div>
                    <div className={cx('assign-account')}>
                        <p>Bạn không có tài khoản?</p>
                        <a href="https://www.tiktok.com/signup">Đăng ký</a>
                    </div>
                    <div className={cx('close-btn')} onClick={() => handleClose()}>
                        <img src={images.closeIcon} alt="close icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;

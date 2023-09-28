import classNames from 'classnames/bind';
import styles from './DownloadModal.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const handleCloseDownloadModal = () => {
    const downloadModal = document.querySelector('.DownloadModal_wrapper__sdzBE');
    downloadModal.style.opacity = 0;
    downloadModal.style.visibility = 'hidden';
};

function DownloadModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('download-modal')}>
                <div className={cx('download-modal-container')}>
                    <div className={cx('download-modal-header')}>
                        <img
                            src={images.closeIcon}
                            alt="close icon"
                            className={cx('close-btn')}
                            onClick={() => handleCloseDownloadModal()}
                        />
                        <p className={cx('download-modal-header-h2')}>Tải ứng dụng TikTok</p>
                    </div>
                    <div className={cx('download-modal-content')}>
                        <div className={cx('download-qr')}>
                            <p className={cx('download-qr-des')}>Hãy quét mã QR để tải TikTok về máy</p>
                            <img
                                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                alt="qr-img"
                            />
                        </div>
                        <div className={cx('download-from-wrapper')}>
                            <p className={cx('download-from--des')}>Tải về từ cửa hàng ứng dụng</p>
                            <div className={cx('download-from-container')}>
                                <a
                                    href="https://www.microsoft.com/store/apps/9NH2GPH4JZS4"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className={cx('download-microsoft')}
                                >
                                    <img
                                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                        alt="microsoft-store"
                                        lang="en"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/download-link/af/id1235601864"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className={cx('download-apple')}
                                >
                                    <img
                                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png"
                                        alt="apple-store"
                                        lang="en"
                                    />
                                </a>
                                <a
                                    href="https://www.amazon.com/dp/B07KR1RJL2/"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className={cx('download-amazon')}
                                >
                                    <img
                                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png"
                                        alt="amazon-store"
                                        lang="en"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/download-link/af/com.ss.android.ugc.trill"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className={cx('download-google')}
                                >
                                    <img
                                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/d60c66b9f5dc9647f3a3.png"
                                        alt="google-store"
                                        lang="en"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadModal;

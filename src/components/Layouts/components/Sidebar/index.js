import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from '../Sidebar/Sidebar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(Styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul className={cx('nav-direct')}>
                <li className={cx('home')}>
                    <img src={images.homeIcon} alt="home icon" className={cx('home-icon')} />
                    <Link to="/">Dành cho bạn</Link>
                </li>
                <li className={cx('following')}>
                    <img src={images.followIcon} alt="follow icon" className={cx('follow-icon')} />
                    <Link to="/following">Đang Follow</Link>
                </li>
                <li className={cx('explore')}>
                    <img src={images.exploreIcon} alt="explore icon" className={cx('explore-icon')} />
                    <Link to="/explore">Khám phá</Link>
                </li>
                <li className={cx('live')}>
                    <img src={images.liveIcon} alt="live icon" className={cx('live-icon')} />
                    <Link to="/live">LIVE</Link>
                </li>
            </ul>
            <div className={cx('login-suggested')}>
                <p className={cx('paragraph')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <button className={cx('login-btn')}>Đăng nhập</button>
            </div>
            <div className={cx('policy')}>
                <div>
                    <a href="/">Giới thiệu</a>
                    <a href="/">Bảng tin</a>
                    <a href="/">Liên hệ</a>
                    <a href="/">Sự nghiệp</a>
                </div>
                <div>
                    <a href="/">TikTok for Good</a>
                    <a href="/">Quảng cáo</a>
                    <a href="/">Developers</a>
                    <a href="/">Minh bạch</a>
                    <a href="/">TikTok Rewards</a>
                    <a href="/">TikTok Embeds</a>
                </div>
                <div>
                    <a href="/">Trợ giúp</a>
                    <a href="/">An toàn</a>
                    <a href="/">Điều khoản</a>
                    <a href="/">Quyền riêng tư</a>
                    <a href="/">Cổng thông tin tác giả</a>
                    <a href="/">Hướng dẫn cộng đồng</a>
                </div>
                <div>
                    <span className={cx('more-policy')}>Thêm</span>
                </div>
                <span>
                    ©TikTok clone by <a href="https://www.facebook.com/profile.php?id=100007758302640">Thinh Nguyen</a>
                </span>
            </div>
        </aside>
    );
}

export default Sidebar;

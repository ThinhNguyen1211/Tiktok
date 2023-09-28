import classNames from 'classnames/bind';

import Header from '~/components/Layouts/components/Header';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import Sidebar from '~/components/Layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

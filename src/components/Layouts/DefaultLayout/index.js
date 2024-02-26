import classNames from 'classnames/bind';
import { useEffect } from 'react';

import Header from '~/components/Layouts/components/Header';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import Sidebar from '~/components/Layouts/components/Sidebar';

const cx = classNames.bind(styles);

window.addEventListener('scroll', () => {
    const scrollToTop = document.querySelector('.DefaultLayout_scrollToTop__35s0Y');
    const scrollPosition = window.scrollY;
    // console.log('Vị trí cuộn trang:', scrollPosition);

    if (scrollPosition > 50) {
        scrollToTop.style.marginBottom = '16px';
    } else {
        scrollToTop.style.marginBottom = '-32px';
    }
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                    <div className={cx('scrollToTop')}>
                        <button
                            title="Cuộn lên trên"
                            aria-label="Kéo lên đầu"
                            className={cx('scrollToTopBtn')}
                            onClick={() => scrollToTop()}
                        >
                            <svg
                                width="16"
                                data-e2e=""
                                height="16"
                                viewBox="0 0 48 48"
                                fill="#FFF"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"
                                ></path>
                                <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

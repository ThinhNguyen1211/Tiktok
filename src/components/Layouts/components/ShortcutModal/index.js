import classNames from 'classnames/bind';
import styles from './ShortcutModal.module.scss';

const cx = classNames.bind(styles);

const handleCloseShortcutModal = () => {
    const shortcutModal = document.querySelector('.ShortcutModal_wrapper__2DEeh');
    shortcutModal.style.opacity = 0;
    shortcutModal.style.visibility = 'hidden';
};

function ShortcutModal() {
    return (
        <div className={cx('wrapper')}>
            <div data-e2e="" tabIndex="0" className={cx('shortcut-modal')}>
                <div className={cx('shortcut-modal-container')}>
                    <div className={cx('close-btn')} onClick={() => handleCloseShortcutModal()}>
                        <svg
                            width="20"
                            data-e2e=""
                            height="20"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('shortcut-modal-header')}>Phím tắt trên bàn phím</div>
                    <div className={cx('shortcut-modal-content')}>
                        <div>
                            Quay về video trước
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M25.2809 18.7113C24.641 17.8563 23.359 17.8563 22.7191 18.7113L15.9152 27.8012C15.1256 28.8562 15.8784 30.36 17.1962 30.36L30.8038 30.36C32.1216 30.36 32.8744 28.8562 32.0848 27.8012L25.2809 18.7113Z"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            Đi đến video tiếp theo
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22.7191 30.6487C23.359 31.5037 24.641 31.5037 25.2809 30.6487L32.0848 21.5588C32.8744 20.5038 32.1216 19 30.8038 19H17.1962C15.8784 19 15.1256 20.5038 15.9152 21.5588L22.7191 30.6487Z"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            Thích video
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M31.5 33C31.5 33.5523 31.0523 34 30.5 34H20.5C19.3954 34 18.5 33.1046 18.5 32V15C18.5 14.4477 18.9477 14 19.5 14H21.5C22.0523 14 22.5 14.4477 22.5 15V30H30.5C31.0523 30 31.5 30.4477 31.5 31V33Z"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            Tắt tiếng / bật tiếng video
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15 14C14.4477 14 14 14.4478 14 15V33C14 33.5523 14.4477 34 15 34H17C17.5523 34 18 33.5523 18 33V21L21.9562 33.3061C22.0891 33.7196 22.4738 34 22.9082 34H25.0911C25.5255 34 25.9102 33.7196 26.0431 33.3061L30 21V33C30 33.5523 30.4477 34 31 34H33C33.5523 34 34 33.5523 34 33V15C34 14.4477 33.5523 14 33 14L29.7129 14.0001C29.2863 14.0001 28.9067 14.2707 28.7676 14.6741L24 28.5L19.2324 14.6741C19.0933 14.2707 18.7137 14.0001 18.287 14.0001L15 14Z"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShortcutModal;

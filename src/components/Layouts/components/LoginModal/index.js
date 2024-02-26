import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import images from '~/assets/images';
import Validator from './form-validation';
import storage from '../storage';
import { v4 as uuidv4 } from 'uuid';
import { assignNewUser, getEmail, getUsername } from './storage-ddb';
import bcrypt from 'bcryptjs';

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
    let [usernameInputValue, setUsernameInputValue] = useState('');
    let [passwordInputValue, setPasswordInputValue] = useState('');
    let [modalState, setModalState] = useState('LoginModal_login-wrapper__DiqnZ');
    const loginButton = document.querySelector('.LoginModal_login-button__W3g0u');
    const assignButton = document.querySelector('.LoginModal_assign-button__xbBQA');
    const checkboxInput = document.querySelector('#email-consent');
    const usernameInputLoginForm = document.querySelector('#username-input-login-form');
    const passwordInputLoginForm = document.querySelector('#password-input-login-form');
    const loginForm = document.querySelector('#login-form');
    const assignForm = document.querySelector('#register-form');
    const errorMessage = document.querySelector('.LoginModal_error-message__dPJVy');
    const emailError = document.querySelector('#email-error');
    const usernameError = document.querySelector('#username-error');
    let [isSwitched, setSwitched] = useState(storage.get());

    useEffect(() => {
        const switchBtn = document.querySelector('.switch-btn');
        // let loginButton = document.querySelector('.LoginModal_login-button__W3g0u');
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

        // if (isSwitched) {
        //     loginButton.style.backgroundColor = '#363636';
        //     loginButton.style.color = 'rgba(255, 255, 255, 0.34)';
        // } else {
        //     loginButton.style.backgroundColor = 'rgba(22, 24, 35, 0.06)';
        //     loginButton.style.color = 'rgba(22, 24, 35, 0.34)';
        // }
    }, [isSwitched]);

    //* xử lý hiện thị / ẩn mật khẩu
    const handleTogglePasswordLoginForm = () => {
        const showPassword = document.querySelector('.LoginModal_show-password-icon__xmaic');
        const hidePassword = document.querySelector('.LoginModal_hidden-password-icon__qpEDl');
        const passwordInput = document.querySelector('input[name="password"]');

        if (hidePassword.style.display === 'block') {
            hidePassword.style.display = 'none';
            showPassword.style.display = 'block';
            passwordInput.type = 'text';
        } else {
            hidePassword.style.display = 'block';
            showPassword.style.display = 'none';
            passwordInput.type = 'password';
        }
    };

    const handleTogglePasswordAssignForm = () => {
        const showPassword = document.querySelector('.LoginModal_show-password-assign-icon__oLbxG');
        const hidePassword = document.querySelector('.LoginModal_hidden-password-assign-icon__BPelO');
        const passwordInput = document.querySelector('#password');

        if (hidePassword.style.display === 'block') {
            hidePassword.style.display = 'none';
            showPassword.style.display = 'block';
            passwordInput.type = 'text';
        } else {
            hidePassword.style.display = 'block';
            showPassword.style.display = 'none';
            passwordInput.type = 'password';
        }
    };

    const handleTogglePasswordConfirmAssignForm = () => {
        const showPassword = document.querySelector('.LoginModal_show-password-confirm-icon__RiAmg');
        const hidePassword = document.querySelector('.LoginModal_hidden-password-confirm-icon__iDdbU');
        const passwordConfirmInput = document.querySelector('#password-confirm');

        if (hidePassword.style.display === 'block') {
            hidePassword.style.display = 'none';
            showPassword.style.display = 'block';
            passwordConfirmInput.type = 'text';
        } else {
            hidePassword.style.display = 'block';
            showPassword.style.display = 'none';
            passwordConfirmInput.type = 'password';
        }
    };
    //*

    //* xử lý hiển thị modal sang form,...
    const handleSwitchLoginForm = () => {
        const loginModalWrapper = document.querySelector(`.${modalState}`);
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const loginFormWrapper = document.querySelector('.LoginModal_login-form-wrapper__9YvzA');

        loginModalWrapper.style.display = 'none';
        loginModalPolicy.style.display = 'none';
        loginFormWrapper.style.display = 'block';
        setModalState('LoginModal_login-form-wrapper__9YvzA');
    };

    const handleSwitchSignupForm = () => {
        const signupModalWrapper = document.querySelector(`.${modalState}`);
        const signupFormWrapper = document.querySelector('.signup-form-wrapper');

        signupModalWrapper.style.display = 'none';
        signupFormWrapper.style.display = 'block';
        setModalState('signup-form-wrapper');
    };

    const handleBackToLoginModal = () => {
        const loginModalWrapper = document.querySelector('.LoginModal_login-wrapper__DiqnZ');
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const loginFormWrapper = document.querySelector(`.${modalState}`);

        loginModalWrapper.style.display = 'block';
        loginModalPolicy.style.display = 'flex';
        loginFormWrapper.style.display = 'none';
        setModalState('LoginModal_login-wrapper__DiqnZ');
    };

    const handleBackToSignupModal = () => {
        const signupModalWrapper = document.querySelector('.signup-modal-wrapper');
        const signupFormWrapper = document.querySelector(`.${modalState}`);

        signupModalWrapper.style.display = 'block';
        signupFormWrapper.style.display = 'none';
        setModalState('signup-modal-wrapper');
    };

    const handleSwitchToAssign = () => {
        const assignAccount = document.querySelector('.LoginModal_assign-account-wrapper__YW2jx');
        const loginAccount = document.querySelector('.LoginModal_login-account-wrapper__iUACw');
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const assignModalWrapper = document.querySelector('.signup-modal-wrapper');
        const loginModalWrapper = document.querySelector(`.${modalState}`);

        if (modalState === 'LoginModal_login-wrapper__DiqnZ') {
            loginModalWrapper.style.display = 'none';
            assignModalWrapper.style.display = 'block';
            setModalState('signup-modal-wrapper');
        } else {
            loginModalWrapper.style.display = 'none';
            assignModalWrapper.style.display = 'block';
            loginModalPolicy.style.display = 'flex';
            setModalState('signup-modal-wrapper');
        }

        assignAccount.style.display = 'none';
        loginAccount.style.display = 'flex';
    };

    const handleSwitchToLogin = () => {
        const assignAccount = document.querySelector('.LoginModal_assign-account-wrapper__YW2jx');
        const loginAccount = document.querySelector('.LoginModal_login-account-wrapper__iUACw');
        const loginModalPolicy = document.querySelector('.LoginModal_login-policy__4Lcdh');
        const assignModalWrapper = document.querySelector(`.${modalState}`);
        const loginModalWrapper = document.querySelector('.LoginModal_login-wrapper__DiqnZ');

        if (modalState === 'signup-modal-wrapper') {
            loginModalWrapper.style.display = 'block';
            assignModalWrapper.style.display = 'none';
            setModalState('LoginModal_login-wrapper__DiqnZ');
        } else {
            loginModalPolicy.style.display = 'flex';
            loginModalWrapper.style.display = 'block';
            assignModalWrapper.style.display = 'none';
            setModalState('LoginModal_login-wrapper__DiqnZ');
        }

        assignAccount.style.display = 'flex';
        loginAccount.style.display = 'none';
    };
    //*
    const handleShowPasswordDesc = () => {
        const passwordDesc = document.querySelector('.LoginModal_password-desc-ul__X3QK5');
        const formMessage = document.querySelector('#form-message-password');
        if (formMessage.innerHTML !== '') {
            passwordDesc.style.display = 'block';
        } else {
            passwordDesc.style.display = 'none';
        }
    };
    const handleHidePasswordDesc = () => {
        const passwordDesc = document.querySelector('.LoginModal_password-desc-ul__X3QK5');
        passwordDesc.style.display = 'none';
    };
    const handleActiveButton = () => {
        let isValid = true;
        const inputs = document.querySelectorAll('[name][rules]');
        if (inputs) {
            for (const input of inputs) {
                if (input.value === '') {
                    isValid = false;
                }
            }
        }
        if (isValid) {
            assignButton.disabled = false;
        } else {
            assignButton.disabled = true;
        }
    };
    const handleMessageAttention = () => {
        const errors = document.querySelectorAll('.LoginModal_form-message__I4Jk3');
        if (!assignButton.disabled) {
            for (const error of errors) {
                error.classList.add(styles.error);
                setTimeout(() => {
                    error.classList.remove(styles.error);
                }, 250);
            }
        }
    };
    const handleCheckboxValue = () => {
        if (checkboxInput) {
            if (checkboxInput.checked) {
                checkboxInput.value = 'true';
            } else {
                checkboxInput.value = 'false';
            }
        }
    };
    const handleSubmitLoginForm = async () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

        if (emailRegex.test(usernameInputLoginForm.value)) {
            getEmail(usernameInputLoginForm.value, (err, results) => {
                if (results[0]) {
                    const hashPassword = bcrypt.hashSync(passwordInputLoginForm.value, results[0].Salt);
                    results.forEach((result) => {
                        if (result.Password === hashPassword) {
                            alert('login success');
                        } else {
                            errorMessage.innerHTML = 'Mật khẩu không chính xác. Vui lòng thử lại.';
                        }
                    });
                } else {
                    errorMessage.innerHTML = 'Email không tồn tại.';
                }
            });
        } else {
            getUsername(usernameInputLoginForm.value, (err, results) => {
                if (results[0]) {
                    const hashPassword = bcrypt.hashSync(passwordInputLoginForm.value, results[0].Salt);
                    results.forEach((result) => {
                        if (result.Password === hashPassword) {
                            alert('login success');
                        } else {
                            errorMessage.innerHTML = 'Mật khẩu không chính xác. Vui lòng thử lại.';
                        }
                    });
                } else {
                    errorMessage.innerHTML = 'Username không tồn tại.';
                }
            });
        }
    };
    const handleExistedEmail = (e) => {
        setTimeout(() => {
            if (emailError.innerHTML === '' && e.target.value !== '') {
                getEmail(e.target.value, (err, results) => {
                    if (results[0]) {
                        emailError.innerHTML = 'Email đã tồn tại. Vui lòng đăng nhập hoặc thử với email khác.';
                        e.target.style.border = '1px solid var(--primary-color)';
                        e.target.style.color = 'var(--primary-color)';
                    } else {
                        emailError.innerHTML = '';
                        e.target.style.border = '1px solid rgba(22, 24, 35, 0.12)';
                        e.target.style.color = 'rgb(22,24,35)';
                        let isValid = true;
                        const errors = assignForm.querySelectorAll('.LoginModal_form-message__I4Jk3');
                        for (const error of errors) {
                            if (error.innerHTML !== '') {
                                isValid = false;
                            }
                        }
                        if (isValid) {
                            const registerForm = new Validator('#register-form');
                            registerForm.onSubmit = async (formData) => {
                                const userID = uuidv4();
                                const timestamp = new Date().getTime();
                                const validateCode = Math.floor(100000 + Math.random() * 900000);
                                const saltRounds = 10; // Số vòng băm
                                const salt = await bcrypt.genSalt(saltRounds);
                                const hashPassword = await bcrypt.hash(formData.password, salt);
                                assignNewUser(
                                    formData.email,
                                    formData.username,
                                    userID,
                                    hashPassword,
                                    timestamp,
                                    formData.checkbox[0] ? 'true' : 'false',
                                    validateCode,
                                    salt,
                                );
                            };
                        }
                    }
                });
            }
        }, 100);
    };
    const handleExistedUsername = (e) => {
        setTimeout(() => {
            if (usernameError.innerHTML === '' && e.target.value !== '') {
                getUsername(e.target.value, (err, results) => {
                    if (results[0]) {
                        usernameError.innerHTML = 'Username đã tồn tại. Vui lòng đăng nhập hoặc thử với username khác.';
                        e.target.style.border = '1px solid var(--primary-color)';
                        e.target.style.color = 'var(--primary-color)';
                    } else {
                        usernameError.innerHTML = '';
                        e.target.style.border = '1px solid rgba(22, 24, 35, 0.12)';
                        e.target.style.color = 'rgb(22,24,35)';
                        let isValid = true;
                        const errors = assignForm.querySelectorAll('.LoginModal_form-message__I4Jk3');
                        for (const error of errors) {
                            if (error.innerHTML !== '') {
                                isValid = false;
                            }
                        }
                        if (isValid) {
                            const registerForm = new Validator('#register-form');
                            registerForm.onSubmit = async (formData) => {
                                const userID = uuidv4();
                                const timestamp = new Date().getTime();
                                const validateCode = Math.floor(100000 + Math.random() * 900000);
                                const saltRounds = 10; // Số vòng băm
                                const salt = await bcrypt.genSalt(saltRounds);
                                const hashPassword = await bcrypt.hash(formData.password, salt);
                                assignNewUser(
                                    formData.email,
                                    formData.username,
                                    userID,
                                    hashPassword,
                                    timestamp,
                                    formData.checkbox[0] ? 'true' : 'false',
                                    validateCode,
                                    salt,
                                );
                            };
                        }
                    }
                });
            }
        }, 100);
    };

    const handleClearErrorLoginForm = () => {
        errorMessage.innerHTML = '';
    };

    useEffect(() => {
        new Validator('#register-form');
        const registerForm = document.querySelector('#register-form');
        registerForm.onsubmit = (e) => {
            e.preventDefault();
        };
    }, []);

    if (usernameInputValue.length > 0) {
        if (passwordInputLoginForm.value.length > 0 && usernameInputLoginForm.value.length > 0) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    if (passwordInputValue.length > 0) {
        if (passwordInputLoginForm.value.length > 0 && usernameInputLoginForm.value.length > 0) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }

    //TODO: làm chức năng quên mật khẩu

    //TODO: làm authen, tiếp tục với google, facebook,... có url của web thì mới làm authen được

    //TODO: làm chế độ tối cho form đăng ký đăng nhập

    //TODO: khi dùng github pages hoặc đưa code lên reporitory, dùng github secrets để đặt các biến secrets cho AWS key của mình
    //TODO: sau đó sửa code trên github lại thành ${{ secrets.TEN_SECRET }}

    //TODO: khi làm chức năng tìm kiếm, ta nên cho func đó là 1 async func để await kết quả trả về rồi mới hiện ra
    //TODO: cả form đăng ký, đăng nhập cũng vậy, await khi hàm thực hiện xong, nếu nó return true thì ta switch sang giao diện đã
    //TODO: đăng nhập

    //? TODO bên dưới là notes tăng cường bảo mật thôi, không làm cũng được
    //TODO: nên lưu trữ salt ở một nơi khác tách biệt với thông tin người dùng, để tăng cường bảo mật thì ta có thể làm thêm chức
    //TODO: năng, khi đăng nhập sẽ gửi mã xác thực cho email nếu người dùng nhập mã khớp, thì ta mới xử lý trả về salt rồi xử lý
    //TODO: cho họ đăng nhập hoặc ta có thể chỉ dùng việc xác thực email để tăng cường bảo mật thôi là được cho dù nhập đúng mật
    //TODO: khẩu nhưng không xác thực được thì cũng reject

    //TODO: Tăng cường bảo mật khi đăng nhập hoặc Verify email ta gửi email cho người dùng với mã xác thực sau đó yêu cầu họ nhập

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-modal')}>
                <div className={cx('login-modal-content')}>
                    <div className={cx('login-wrapper')}>
                        <div className={cx('login-container')}>
                            <h2 className={cx('login-modal-header')}>Đăng nhập vào TikTok</h2>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.qrIcon} alt="qr icon" className={cx('login-modal-qrIcon')} />
                                <p>Sử dụng mã QR</p>
                            </a>
                            <a
                                onClick={() => {
                                    handleSwitchLoginForm();
                                }}
                            >
                                <img src={images.humanIcon} alt="human icon" className={cx('login-modal-humanIcon')} />
                                <p>Email / TikTok ID</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.facebookIcon} alt="facebook icon" />
                                <p>Tiếp tục với Facebook</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.googleIcon} alt="google icon" />
                                <p>Tiếp tục với Google</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.twitterIcon} alt="twitter icon" />
                                <p>Tiếp tục với Twitter</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.lineIcon} alt="line icon" />
                                <p>Tiếp tục với LINE</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.kakaotalkIcon} alt="kakaotalk icon" />
                                <p>Tiếp tục với KakaoTalk</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
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
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.instagramIcon} alt="instagram icon" />
                                <p>Tiếp tục với Instagram</p>
                            </a>
                        </div>
                    </div>
                    <div className={cx('login-form-wrapper')} style={{ display: 'none' }}>
                        <div
                            className={cx('back-btn')}
                            onClick={() => {
                                handleBackToLoginModal();
                            }}
                        >
                            <svg
                                className={cx('back-icon')}
                                width="1em"
                                data-e2e=""
                                height="1em"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
                                ></path>
                            </svg>
                        </div>
                        <div className={cx('login-form-container')}>
                            <h2 className={cx('login-form-header')}>Đăng nhập</h2>
                            <div className={cx('login-description')}>Email hoặc Username</div>
                            <form id="login-form">
                                <div className={cx('form-group')}>
                                    <input
                                        id="username-input-login-form"
                                        type="text"
                                        placeholder="Email hoặc Username"
                                        name="username"
                                        className={cx('form-control')}
                                        onChange={() => handleClearErrorLoginForm()}
                                        onInput={(e) => setUsernameInputValue(e.target.value)}
                                        value={usernameInputValue || ''}
                                    ></input>
                                </div>
                                <div className={cx('form-group')}>
                                    <input
                                        id="password-input-login-form"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        name="password"
                                        className={cx('form-control')}
                                        onChange={() => handleClearErrorLoginForm()}
                                        onInput={(e) => setPasswordInputValue(e.target.value)}
                                        value={passwordInputValue || ''}
                                    ></input>
                                    <div
                                        className={cx('toggle-password')}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleTogglePasswordLoginForm()}
                                    >
                                        <i className={cx('hidden-password-icon')} style={{ display: 'block' }}>
                                            <svg
                                                className={cx('hide-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M38.88 41.7a1 1 0 0 0 1.41 0l1.42-1.4a1 1 0 0 0 0-1.42l-3.86-3.86a24.57 24.57 0 0 0 6.27-9.69 1 1 0 0 0 0-.66C41 15.8 32.66 9 23 9c-3.27 0-6.35.73-9.12 2.05L9.12 6.29a1 1 0 0 0-1.41 0L6.29 7.71a1 1 0 0 0 0 1.41l32.59 32.59Zm-22-27.66A17.8 17.8 0 0 1 23 13c12.75 0 17 12 17 12s-1.38 3.9-4.93 7.25l-4.54-4.55A7.99 7.99 0 0 0 23 17c-.95 0-1.86.16-2.7.47l-3.43-3.43ZM1.87 24.67a24.64 24.64 0 0 1 5.8-9.23l2.77 2.78C7.25 21.46 6 25 6 25s4.25 12 17 12a18 18 0 0 0 5.42-.8l3.05 3.05A21.2 21.2 0 0 1 23 41c-9.83 0-17.93-6.63-21.13-15.67a1 1 0 0 1 0-.66Z"></path>
                                                <path d="M15 25c0-.68.08-1.35.24-1.98l9.74 9.73A8.02 8.02 0 0 1 15 25Z"></path>
                                            </svg>
                                        </i>
                                        <i className={cx('show-password-icon')} style={{ display: 'none' }}>
                                            <svg
                                                className={cx('show-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M41.4 23.71a.9.9 0 0 1 0 .58c-.63 1.92-2.2 4.89-4.82 7.51A17.35 17.35 0 0 1 24 37.11c-5.42 0-9.55-2.28-12.58-5.3a20.44 20.44 0 0 1-4.82-7.52.9.9 0 0 1 0-.58c.63-1.92 2.2-4.89 4.82-7.51A17.35 17.35 0 0 1 24 10.89c5.42 0 9.55 2.28 12.58 5.3a20.44 20.44 0 0 1 4.82 7.52ZM24 41c13.83 0 20.82-11.7 21.96-16.81a.85.85 0 0 0 0-.38C44.82 18.71 37.83 7 24 7S3.18 18.7 2.04 23.81a.85.85 0 0 0 0 .38C3.18 29.29 10.17 41 24 41Z"></path>
                                                <path d="M24 27.21a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm0 4.29a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <span className={cx('error-message')}></span>
                                <a href="#" className={cx('forget-password')}>
                                    Quên mật khẩu?
                                </a>
                                <label onClick={() => handleSubmitLoginForm()}>
                                    <button className={cx('login-button')} disabled={true}>
                                        Đăng nhập
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className={cx('signup-modal-wrapper')} style={{ display: 'none' }}>
                        <div className={cx('login-container')}>
                            <h2 className={cx('login-modal-header')}>Đăng Ký TikTok</h2>
                            <a
                                onClick={() => {
                                    handleSwitchSignupForm();
                                }}
                            >
                                <img src={images.humanIcon} alt="human icon" className={cx('login-modal-humanIcon')} />
                                <p>Sử dụng email hoặc username</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.facebookIcon} alt="facebook icon" />
                                <p>Tiếp tục với Facebook</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.googleIcon} alt="google icon" />
                                <p>Tiếp tục với Google</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.twitterIcon} alt="twitter icon" />
                                <p>Tiếp tục với Twitter</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.lineIcon} alt="line icon" />
                                <p>Tiếp tục với LINE</p>
                            </a>
                            <a
                                title="Tính năng đang trong quá trình phát triển."
                                className={cx('anchor-overlay-disabled')}
                            >
                                <img src={images.kakaotalkIcon} alt="kakaotalk icon" />
                                <p>Tiếp tục với KakaoTalk</p>
                            </a>
                        </div>
                    </div>
                    <div className={cx('signup-form-wrapper')} style={{ display: 'none', overflow: 'auto' }}>
                        <div
                            className={cx('back-btn')}
                            onClick={() => {
                                handleBackToSignupModal();
                            }}
                        >
                            <svg
                                className={cx('back-icon')}
                                width="1em"
                                data-e2e=""
                                height="1em"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
                                ></path>
                            </svg>
                        </div>
                        <div className={cx('login-form-container')}>
                            <h2 className={cx('login-form-header')}>Đăng ký</h2>
                            <div className={cx('login-description')}>Email</div>
                            <form action="" method="POST" id="register-form">
                                <div className={cx('form-group')}>
                                    <input
                                        rules="required|email"
                                        type="text"
                                        placeholder="Địa chỉ email"
                                        name="email"
                                        className={cx('form-control')}
                                        onBlur={(e) => handleExistedEmail(e)}
                                        onInput={() => handleActiveButton()}
                                    />
                                    <span id="email-error" className={cx('form-message')}></span>
                                </div>
                                <div className={cx('login-description')}>Username</div>
                                <div className={cx('form-group')}>
                                    <input
                                        rules="required|minUsername:5"
                                        type="text"
                                        placeholder="Tên người dùng (vd: Thinhng.12)"
                                        name="username"
                                        className={cx('form-control')}
                                        onBlur={(e) => handleExistedUsername(e)}
                                        onInput={() => handleActiveButton()}
                                    />
                                    <span id="username-error" className={cx('form-message')}></span>
                                </div>
                                <div className={cx('form-group')}>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        rules="required|minPassword:6"
                                        placeholder="Mật khẩu"
                                        className={cx('form-control')}
                                        onInput={() => handleActiveButton()}
                                        onClick={() => handleShowPasswordDesc()}
                                        onBlur={() => handleHidePasswordDesc()}
                                    />
                                    <div
                                        className={cx('toggle-password')}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleTogglePasswordAssignForm()}
                                    >
                                        <i className={cx('hidden-password-assign-icon')} style={{ display: 'block' }}>
                                            <svg
                                                className={cx('hide-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M38.88 41.7a1 1 0 0 0 1.41 0l1.42-1.4a1 1 0 0 0 0-1.42l-3.86-3.86a24.57 24.57 0 0 0 6.27-9.69 1 1 0 0 0 0-.66C41 15.8 32.66 9 23 9c-3.27 0-6.35.73-9.12 2.05L9.12 6.29a1 1 0 0 0-1.41 0L6.29 7.71a1 1 0 0 0 0 1.41l32.59 32.59Zm-22-27.66A17.8 17.8 0 0 1 23 13c12.75 0 17 12 17 12s-1.38 3.9-4.93 7.25l-4.54-4.55A7.99 7.99 0 0 0 23 17c-.95 0-1.86.16-2.7.47l-3.43-3.43ZM1.87 24.67a24.64 24.64 0 0 1 5.8-9.23l2.77 2.78C7.25 21.46 6 25 6 25s4.25 12 17 12a18 18 0 0 0 5.42-.8l3.05 3.05A21.2 21.2 0 0 1 23 41c-9.83 0-17.93-6.63-21.13-15.67a1 1 0 0 1 0-.66Z"></path>
                                                <path d="M15 25c0-.68.08-1.35.24-1.98l9.74 9.73A8.02 8.02 0 0 1 15 25Z"></path>
                                            </svg>
                                        </i>
                                        <i className={cx('show-password-assign-icon')} style={{ display: 'none' }}>
                                            <svg
                                                className={cx('show-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M41.4 23.71a.9.9 0 0 1 0 .58c-.63 1.92-2.2 4.89-4.82 7.51A17.35 17.35 0 0 1 24 37.11c-5.42 0-9.55-2.28-12.58-5.3a20.44 20.44 0 0 1-4.82-7.52.9.9 0 0 1 0-.58c.63-1.92 2.2-4.89 4.82-7.51A17.35 17.35 0 0 1 24 10.89c5.42 0 9.55 2.28 12.58 5.3a20.44 20.44 0 0 1 4.82 7.52ZM24 41c13.83 0 20.82-11.7 21.96-16.81a.85.85 0 0 0 0-.38C44.82 18.71 37.83 7 24 7S3.18 18.7 2.04 23.81a.85.85 0 0 0 0 .38C3.18 29.29 10.17 41 24 41Z"></path>
                                                <path d="M24 27.21a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm0 4.29a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                    <span id="form-message-password" className={cx('form-message')}></span>
                                    <ul className={cx('password-desc-ul')}>
                                        {' '}
                                        Mật khẩu của bạn phải gồm:
                                        <li className={cx('password-desc-li')}>Tối thiểu 6 ký tự</li>
                                        <li className={cx('password-desc-li')}>Các chữ cái, số và ký tự đặc biệt</li>
                                    </ul>
                                </div>
                                <div className={cx('form-group')}>
                                    <input
                                        rules="required|confirmed"
                                        id="password-confirm"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        name="password-confirm"
                                        className={cx('form-control')}
                                        onInput={() => handleActiveButton()}
                                    />
                                    <div
                                        className={cx('toggle-password')}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleTogglePasswordConfirmAssignForm()}
                                    >
                                        <i className={cx('hidden-password-confirm-icon')} style={{ display: 'block' }}>
                                            <svg
                                                className={cx('hide-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M38.88 41.7a1 1 0 0 0 1.41 0l1.42-1.4a1 1 0 0 0 0-1.42l-3.86-3.86a24.57 24.57 0 0 0 6.27-9.69 1 1 0 0 0 0-.66C41 15.8 32.66 9 23 9c-3.27 0-6.35.73-9.12 2.05L9.12 6.29a1 1 0 0 0-1.41 0L6.29 7.71a1 1 0 0 0 0 1.41l32.59 32.59Zm-22-27.66A17.8 17.8 0 0 1 23 13c12.75 0 17 12 17 12s-1.38 3.9-4.93 7.25l-4.54-4.55A7.99 7.99 0 0 0 23 17c-.95 0-1.86.16-2.7.47l-3.43-3.43ZM1.87 24.67a24.64 24.64 0 0 1 5.8-9.23l2.77 2.78C7.25 21.46 6 25 6 25s4.25 12 17 12a18 18 0 0 0 5.42-.8l3.05 3.05A21.2 21.2 0 0 1 23 41c-9.83 0-17.93-6.63-21.13-15.67a1 1 0 0 1 0-.66Z"></path>
                                                <path d="M15 25c0-.68.08-1.35.24-1.98l9.74 9.73A8.02 8.02 0 0 1 15 25Z"></path>
                                            </svg>
                                        </i>
                                        <i className={cx('show-password-confirm-icon')} style={{ display: 'none' }}>
                                            <svg
                                                className={cx('show-svg')}
                                                fill="currentColor"
                                                viewBox="0 0 48 48"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                            >
                                                <path d="M41.4 23.71a.9.9 0 0 1 0 .58c-.63 1.92-2.2 4.89-4.82 7.51A17.35 17.35 0 0 1 24 37.11c-5.42 0-9.55-2.28-12.58-5.3a20.44 20.44 0 0 1-4.82-7.52.9.9 0 0 1 0-.58c.63-1.92 2.2-4.89 4.82-7.51A17.35 17.35 0 0 1 24 10.89c5.42 0 9.55 2.28 12.58 5.3a20.44 20.44 0 0 1 4.82 7.52ZM24 41c13.83 0 20.82-11.7 21.96-16.81a.85.85 0 0 0 0-.38C44.82 18.71 37.83 7 24 7S3.18 18.7 2.04 23.81a.85.85 0 0 0 0 .38C3.18 29.29 10.17 41 24 41Z"></path>
                                                <path d="M24 27.21a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm0 4.29a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                    <span className={cx('form-message')}></span>
                                </div>
                                <div className={cx('form-group')}>
                                    <div style={{ display: 'flex' }}>
                                        <div className={cx('checkbox-input-wrapper')}>
                                            <label className={cx('custom-checkbox')}>
                                                <input
                                                    name="checkbox"
                                                    type="checkbox"
                                                    value="true"
                                                    id="email-consent"
                                                    className={cx('checkbox-input')}
                                                    onChange={() => handleCheckboxValue()}
                                                />
                                            </label>
                                        </div>
                                        <label
                                            htmlFor="email-consent"
                                            id="signup-email-consent-label"
                                            className={cx('label-description')}
                                        >
                                            Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật
                                            tài khoản được gửi đến email của bạn
                                        </label>
                                    </div>
                                </div>
                                <label onClick={() => handleMessageAttention()}>
                                    <button className={cx('assign-button')} disabled={true}>
                                        Đăng ký
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className={cx('login-policy')}>
                        <p className={cx('login-policy-paragraph')}>
                            Bằng cách tiếp tục, bạn đồng ý với{' '}
                            <a href="https://www.tiktok.com/legal/terms-of-use?lang=vi-VN">Điều khoản Sử dụng</a> của
                            TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
                            <a href="https://www.tiktok.com/legal/privacy-policy?lang=vi-VN">
                                Chính sách Quyền riêng tư
                            </a>{' '}
                            của TikTok.
                        </p>
                    </div>
                    <div className={cx('switch-to-assign')}>
                        <div className={cx('assign-account-wrapper')}>
                            <p className={cx('assign-account-paragraph')}>Bạn không có tài khoản?</p>
                            <a
                                href="#"
                                onClick={() => {
                                    handleSwitchToAssign();
                                }}
                                className={cx('assign-account-link')}
                                style={{ cursor: 'pointer' }}
                            >
                                Đăng ký
                            </a>
                        </div>
                        <div className={cx('login-account-wrapper')} style={{ display: 'none' }}>
                            <p className={cx('assign-account-paragraph')}>Bạn đã có tài khoản?</p>
                            <a
                                href="#"
                                onClick={() => {
                                    handleSwitchToLogin();
                                }}
                                className={cx('login-account-link')}
                                style={{ cursor: 'pointer' }}
                            >
                                Đăng nhập
                            </a>
                        </div>
                        <div className={cx('login-modal-close-btn')} onClick={() => handleClose()}>
                            <img src={images.closeIcon} alt="close icon" className={cx('close-icon')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;

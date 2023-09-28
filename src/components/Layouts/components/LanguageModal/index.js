import classNames from 'classnames/bind';
import styles from './LanguageModal.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const handleCloseMenuSettings = () => {
    const languageModal = document.querySelector('.LanguageModal_wrapper__Zw4ec');

    languageModal.style.display = 'none';
};

function LanguageModal() {
    return (
        <div tabIndex="-1" className={cx('wrapper')}>
            <div className={cx('language-container')}>
                <div className={cx('language-header')}>
                    <i
                        tabIndex="0"
                        aria-label="Quay lại màn hình trước"
                        role="button"
                        onClick={() => handleCloseMenuSettings()}
                    >
                        <img
                            src={images.closeIcon}
                            alt="close icon"
                            style={{ marginLeft: '24px', marginTop: '6px', width: '20px', height: '20px' }}
                            className={cx('language-header-img')}
                        />
                    </i>
                    <p className={cx('language-header-p')}>Ngôn ngữ</p>
                </div>
                <ul role="listbox" aria-labelledby="language-selection-menu-header" className={cx('language-props')}>
                    <li tabIndex="0" role="option" aria-selected>
                        Tiếng Việt (Việt Nam)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        العربية
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        বাঙ্গালি (ভারত)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Cebuano (Pilipinas)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Čeština (Česká republika)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Deutsch
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Ελληνικά (Ελλάδα)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        English
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Español
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Suomi (Suomi)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Filipino (Pilipinas)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Français
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        עברית (ישראל)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        हिंदी
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Magyar (Magyarország)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Bahasa Indonesia (Indonesia)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Italiano (Italia)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        日本語（日本）
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Basa Jawa (Indonesia)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        ខ្មែរ (កម្ពុជា)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        한국어 (대한민국)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Bahasa Melayu (Malaysia)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        မြန်မာ (မြန်မာ)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Nederlands (Nederland)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Polski (Polska)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Português (Brasil)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Română (Romania)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Русский (Россия)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Svenska (Sverige)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        ไทย (ไทย)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Türkçe (Türkiye)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        Українська (Україна)
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        اردو
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        简体中文
                    </li>
                    <li tabIndex="0" role="option" aria-selected>
                        繁體中文
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LanguageModal;

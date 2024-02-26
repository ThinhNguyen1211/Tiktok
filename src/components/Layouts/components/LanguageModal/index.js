import classNames from 'classnames/bind';
import styles from './LanguageModal.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const handleCloseMenuSettings = () => {
    const languageModal = document.querySelector('.LanguageModal_wrapper__Zw4ec');

    languageModal.style.display = 'none';
};

const languageList = [
    { title: 'Tiếng Việt (Việt Nam)', selected: true },
    { title: 'العربية', selected: false },
    { title: 'বাঙ্গালি (ভারত)', selected: false },
    { title: 'Cebuano (Pilipinas)', selected: false },
    { title: 'Čeština (Česká republika)', selected: false },
    { title: 'Deutsch', selected: false },
    { title: 'Ελληνικά (Ελλάδα)', selected: false },
    { title: 'English', selected: false },
    { title: 'Español', selected: false },
    { title: 'Suomi (Suomi)', selected: false },
    { title: 'Français', selected: false },
    { title: 'עברית (ישראל)', selected: false },
    { title: 'हिंदी', selected: false },
    { title: 'Magyar (Magyarország)', selected: false },
    { title: 'Bahasa Indonesia (Indonesia)', selected: false },
    { title: 'Italiano (Italia)', selected: false },
    { title: '日本語（日本', selected: false },
    { title: 'Basa Jawa (Indonesia)', selected: false },
    { title: 'ខ្មែរ (កម្ពុជា)', selected: false },
    { title: '한국어 (대한민국)', selected: false },
    { title: 'Bahasa Melayu (Malaysia)', selected: false },
    { title: 'မြန်မာ (မြန်မာ)', selected: false },
    { title: 'Nederlands (Nederland)', selected: false },
    { title: 'Polski (Polska)', selected: false },
    { title: 'Português (Brasil)', selected: false },
    { title: 'Română (Romania)', selected: false },
    { title: 'Русский (Россия)', selected: false },
    { title: 'Svenska (Sverige)', selected: false },
    { title: 'ไทย (ไทย)', selected: false },
    { title: 'Türkçe (Türkiye)', selected: false },
    { title: 'Українська (Україна)', selected: false },
    { title: 'اردو', selected: false },
    { title: '简体中文', selected: false },
    { title: '繁體中文', selected: false },
];

function LanguageModal() {
    return (
        <div tabIndex="-1" className={cx('wrapper')}>
            <div className={cx('language-container')}>
                <div className={cx('language-header')}>
                    <i tabIndex="0" onClick={() => handleCloseMenuSettings()}>
                        <img
                            src={images.closeIcon}
                            alt="close icon"
                            style={{ marginLeft: '24px', marginTop: '6px', width: '20px', height: '20px' }}
                            className={cx('language-header-img')}
                        />
                    </i>
                    <p className={cx('language-header-p')}>Ngôn ngữ</p>
                </div>
                <ul className={cx('language-props')}>
                    {languageList.map((language, i) => {
                        return (
                            <li key={i} tabIndex="0" role="option" aria-selected>
                                {language.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default LanguageModal;

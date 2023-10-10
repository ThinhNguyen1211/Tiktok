import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
import { useState, useEffect } from 'react';

import images from '~/assets/images';
import storage from '../Layouts/components/storage';

const cx = classNames.bind(styles);

//? fake api
const API = [
    {
        userName: 'Thinhdeptraivodich',
        nickName: 'Thinhdeptraivodichsieucapvippro',
        avatar: images.avatar,
        verified: true,
    },
    {
        userName: 'Thinhdeptraivodich',
        nickName: 'Thinhdeptraivodichsieucapvippro',
        avatar: images.avatar,
        verified: true,
    },
    {
        userName: 'Thinhdeptraivodich',
        nickName: 'Thinhdeptraivodichsieucapvippro',
        avatar: images.avatar,
        verified: true,
    },
    {
        userName: 'Thinhdeptraivodich',
        nickName: 'Thinhdeptraivodichsieucapvippro',
        avatar: images.avatar,
        verified: false,
    },
    {
        userName: 'Thinhdeptraivodich',
        nickName: 'Thinhdeptraivodichsieucapvippro',
        avatar: images.avatar,
        verified: false,
    },
];

function AccountsItem() {
    const [accountsProfile, setAccountsProfile] = useState(API);
    let [isSwitched, setSwitched] = useState(false);

    useEffect(() => {
        const switchBtn = document.querySelector('.switch-btn');
        const accountItems = document.querySelectorAll('.AccountsItem_account-item__2Mm9E');
        const accountItemUserNames = document.querySelectorAll('.AccountsItem_account-item-username__5Sdps');
        const accountItemNickNames = document.querySelectorAll('.AccountsItem_account-item-nickname__4XF0P');
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

        if (storage.get()) {
            accountItems.forEach((item) => {
                item.style.background = 'rgb(37, 37, 37)';
                item.onmouseenter = () => {
                    item.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                item.onmouseleave = () => {
                    item.style.background = 'rgb(37, 37, 37)';
                };
            });
            accountItemUserNames.forEach((userName) => {
                userName.style.color = '#fff';
            });
            accountItemNickNames.forEach((nickName) => {
                nickName.style.color = 'rgba(255, 255, 255, 0.5)';
            });
        } else {
            accountItems.forEach((item) => {
                item.style.background = '#fff';
                item.onmouseenter = () => {
                    item.style.background = '#0000000b';
                };
                item.onmouseleave = () => {
                    item.style.background = '#fff';
                };
            });
            accountItemUserNames.forEach((userName) => {
                userName.style.color = '#000';
            });
            accountItemNickNames.forEach((nickName) => {
                nickName.style.color = 'rgba(22, 24, 35, 0.5)';
            });
        }
    }, [isSwitched]);

    return (
        <div className={cx('wrapper')}>
            {accountsProfile.map((account, i) => {
                return (
                    <li className={cx('account-item')} key={i}>
                        <span shape="circle" style={{ width: '37px', height: '37px' }}>
                            <img
                                src={account.avatar}
                                alt="avatar"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </span>
                        <div>
                            <h4 className={cx('account-item-username')}>
                                {account.userName}{' '}
                                {account.verified ? <img src={images.verifiedIcon} alt="verified icon" /> : ''}
                            </h4>
                            <p className={cx('account-item-nickname')}>{account.nickName}</p>
                        </div>
                    </li>
                );
            })}
        </div>
    );
}

export default AccountsItem;

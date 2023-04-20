import React, { useEffect, useState } from 'react';
import { UserInfo } from '../../data/api/callApi';

export function Header({ userId }) {
    const { userData, isLoading, error } = UserInfo(userId);
    const [name, setName] = useState(null);

    useEffect(() => {
        setName(userData && userData.userInfos.firstName);
    }, [userData, isLoading]);

    if (isLoading) {
        return;
    }

    if (error) {
        return <p>Une erreur est survenue...</p>;
    }

    return (
        <header className='dashboard_content_header'>
            <h1>
                Bonjour <span>{name}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    );
}

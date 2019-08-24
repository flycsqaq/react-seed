/** @format */

import React, {useEffect, Dispatch, useState} from 'react';
import {getUser} from 'service';

interface User {
    name: string;
}

export default () => {
    const [user, setUser]: [User[], Dispatch<User[]>] = useState([] as User[]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser();
            setUser(user.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {user.map(item => (
                <div>{item.name}</div>
            ))}
        </div>
    );
};

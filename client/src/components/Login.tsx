import React, { useState } from 'react';

interface LoginUser {
    username: '',
    password: '',
}

const Login: React.FC = () => {
    const [user, setUser] = useState<LoginUser[]>([]);

    return (
        <div>
            
        </div>
    );
};

export default Login;
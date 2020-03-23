import React from 'react'

const DEFAULT_USER = {
    name: 'Mayank',
    company: 'Auriga',
    location: 'Udaipur',
    project: 'Airmeet'
}

const Auth = React.createContext({
    user: DEFAULT_USER,
    status: 'Connected'
});

export default Auth;
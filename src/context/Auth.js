import React from 'react'

export const CONNECTED_STATUS = {
    CONNECTED: 'Connected',
    NOT_CONNECTED: 'Disconnected'

const DEFAULT_USER = {
    name: 'Mayank',
    company: 'Auriga',
    location: 'Udaipur',
    project: 'Airmeet'
}

const Auth = React.createContext({
    user: DEFAULT_USER,
    status: CONNECTED_STATUS.NOT_CONNECTED
});

export default Auth;

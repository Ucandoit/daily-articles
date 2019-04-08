import * as React from 'react';

const AuthUserContext: React.Context<firebase.User> = React.createContext<firebase.User>(null);

export default AuthUserContext;

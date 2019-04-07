import * as React from 'react';
import { Firebase } from '.';

const FirebaseContext: React.Context<Firebase> = React.createContext<Firebase>(null);

export default FirebaseContext;

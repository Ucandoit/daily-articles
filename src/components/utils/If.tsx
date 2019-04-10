import * as React from 'react';

interface IfProps {
  condition: boolean;
}

const If: React.FunctionComponent<IfProps> = ({ condition, children }): JSX.Element => {
  return <React.Fragment>{condition ? children : null}</React.Fragment>;
};

export default If;

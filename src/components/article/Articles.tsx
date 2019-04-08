import * as React from 'react';
import { withAuthorization } from '../auth';

const Articles: React.FunctionComponent = (): JSX.Element => {
  return <div>Articles</div>;
};

export default withAuthorization(Articles);

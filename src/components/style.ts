import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export const Root = styled.div`
  display: flex;
`;
export const Main = styled.main`
  flex-grow: 1;
  padding: ${theme.spacing.unit * 3}px;
  height: 100vh;
  overflow: auto;
`;

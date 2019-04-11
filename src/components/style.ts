import styled from 'styled-components';
import { createStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import theme from './theme';

export const styles = (theme: Theme): Record<'appBarSpacer', CSSProperties> =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar
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

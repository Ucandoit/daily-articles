import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import theme from '../theme';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export const SignPaper = styled(Paper)`
  margin-top: ${theme.spacing.unit * 8}px;
  margin-left: ${theme.spacing.unit * 3}px;
  margin-right: ${theme.spacing.unit * 3}px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px;

  @media (min-width: ${400 + theme.spacing.unit * 3 * 2}px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
` as typeof Paper;

export const SignAvatar = styled(Avatar)`
  margin: ${theme.spacing.unit}px;
  background-color: ${theme.palette.secondary.main};
` as typeof Avatar;

export const SignForm = styled.form`
  width: 100%;
  margin-top: ${theme.spacing.unit}px;
`;

export const SignButton = styled(Button)`
  && {
    margin-top: ${theme.spacing.unit * 3}px;
  }
` as typeof Button;

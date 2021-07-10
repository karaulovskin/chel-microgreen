import styled  from 'styled-components';

export const StyledButton = styled.button`
  margin: 1em;
  padding: .25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

export const theme = {
  main: "green"
}


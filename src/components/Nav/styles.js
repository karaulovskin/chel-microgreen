import styled from 'styled-components';

export const Root = styled.nav`
    padding: 30px;
`;

export const Row = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
        margin-right: 20px;
        &::marker {
          content: none;
        }
    }
`;

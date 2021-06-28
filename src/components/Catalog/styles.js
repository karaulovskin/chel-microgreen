import styled from 'styled-components';

export const Root = styled.div`
    position: relative;
    padding: 0 30px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: -26px -20px;
`;

export const Item = styled.li`
    width: 25%;
    min-width: 25%;
    padding: 26px 20px;
    text-align: left;
    overflow: hidden;
`;

export const ItemInner = styled.div`
    padding: 30px;
    border: 1px solid #F3F3F3;
`;

export const Img = styled.img`
    display: block;
    max-width: 100%;
`;

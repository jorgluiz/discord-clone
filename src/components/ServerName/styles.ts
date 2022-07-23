import styled from "styled-components";

import { ExpandMore } from 'styled-icons/material';

// Container
export const Container = styled.div`
grid-area: SN;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0 11px 0 16px;
background-color: var(--secondary);

box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
z-index: 2;
`;

// Title
export const Title = styled.div`
font-size: 16px;
font-weight: bold;

color: var(--white);
`;

// ExpandIcon
export const ExpandIcon = styled(ExpandMore)`
width: 28px;
height: bold;

color: var(--white);
cursor: pointer;
`;
import * as React from 'react';
import styled from 'styled-components';
import { ShoppingCartIcon } from '../icons/shopping-cart-icon';
import { colors } from '../../constants/colors';

const HeaderContainer = styled.header`
  background-color: #222;
  padding: 5px 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.h1`
  color: white;
`;

const ShoppingCartButton = styled(ShoppingCartIcon)`
  fill: white;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 5px;
  &:hover {
    background: ${colors.white10};
  }
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <a href="/">
          <HeaderLogo>ISO.com</HeaderLogo>
        </a>
        <a href="/shopping-cart">
          <ShoppingCartButton title="this is a shopping cart" />
        </a>
      </HeaderContainer>
    );
  }
}

export default Header;
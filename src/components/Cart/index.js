import React from "react";
import MaterialIcons from "material-icons-react";

import {
  Container,
  Content,
  BoxColumn,
  BoxRow,
  TextMedium,
  TextLarge,
} from "./styles";
import { color } from "../../globalStyle";

const Cart = ({ cartValue }) => (
  <Container>
    <Content>
      <BoxColumn>
        <TextLarge> {cartValue} Items | Rp. 250,000</TextLarge>
        <TextMedium>Termasuk ongkos kirim</TextMedium>
      </BoxColumn>
      <BoxRow>
        <MaterialIcons icon="shopping_cart" color={color.white} />
        <MaterialIcons icon="keyboard_arrow_right" color={color.white} />
      </BoxRow>
    </Content>
  </Container>
);

export default Cart;

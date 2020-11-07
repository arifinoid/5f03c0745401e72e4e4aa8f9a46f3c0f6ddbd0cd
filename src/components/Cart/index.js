import React from "react";
import MaterialIcons from "material-icons-react";
import { connect } from "react-redux";

import {
  Container,
  Content,
  BoxColumn,
  BoxRow,
  TextMedium,
  TextLarge,
} from "./styles";
import { color } from "../../globalStyle";

const Cart = (props) => {
  const { cartValues, price } = props.cart;

  return (
    <Container>
      <Content>
        <BoxColumn>
          <TextLarge>
            {" "}
            {cartValues} Items |{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: props.cart.currency,
            }).format(price)}
          </TextLarge>
          <TextMedium>Termasuk ongkos kirim</TextMedium>
        </BoxColumn>
        <BoxRow>
          <MaterialIcons icon="shopping_cart" color={color.white} />
          <MaterialIcons icon="keyboard_arrow_right" color={color.white} />
        </BoxRow>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);

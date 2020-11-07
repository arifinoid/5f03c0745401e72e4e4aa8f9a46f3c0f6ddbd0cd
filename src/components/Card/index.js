import React from "react";
import MaterialIcon from "material-icons-react";
import { connect } from "react-redux";

import StarComponent from "../Star";
import {
  Container,
  ImageContainer,
  InnerContainer,
  CardImage,
  CardCaption,
  StarContainer,
  Star,
  Text,
  SellerText,
  CardFooter,
  Button,
} from "./styles";
import { color } from "../../globalStyle";

import { addProduct } from "../../redux/actions/cart";

const CardMenu = (props) => {
  const {
    eatTime,
    image,
    rating,
    price,
    productName,
    seller,
    currency,
  } = props;

  const handleAdd = () => {
    props.addProduct(1, price);
  };

  return (
    <Container style={{ display: props.visibility ? "flex" : "none" }}>
      <InnerContainer>
        <ImageContainer>
          <CardImage src={image} alt={image} />
        </ImageContainer>

        <CardCaption>
          <StarContainer>
            <Star>{rating}</Star>
            <StarComponent rating={rating} />
          </StarContainer>
          <Text>{productName}</Text>
          <SellerText>
            {seller} &bull; Uptown {eatTime}
          </SellerText>
          <CardFooter>
            <Text>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency,
              }).format(price)}
            </Text>
            <Button onClick={handleAdd}>
              <span>ADD</span>
              <MaterialIcon icon="add" color={color.white} size="14px" />
            </Button>
          </CardFooter>
        </CardCaption>
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu);

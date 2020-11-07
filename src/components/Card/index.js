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

const CardMenu = ({ cartValue, setCartValue, eatTime, image, rating }) => {
  const handleAdd = () => {
    setCartValue(cartValue + 1);
  };

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <CardImage src={image} alt={image} />
        </ImageContainer>

        <CardCaption>
          <StarContainer>
            <Star>{rating}</Star>
            <StarComponent rating={rating} />
          </StarContainer>
          <Text>Pizza Pottato Bianca</Text>
          <SellerText>by Kulina &bull; Uptown {eatTime}</SellerText>
          <CardFooter>
            <Text>Rp. 45.000</Text>
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

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(CardMenu);

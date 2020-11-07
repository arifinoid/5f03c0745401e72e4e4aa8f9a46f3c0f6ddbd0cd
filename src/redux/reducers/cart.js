import { ADD_PRODUCT } from "../actions/cart";

const initialState = {
  products: [
    {
      id: 1,
      productName: "Burger Queen",
      seller: "by Kulina",
      price: 35000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/burger.jpg",
      eatTime: "Lunch",
    },
    {
      id: 2,
      productName: "Egg Toast Err",
      seller: "by Kulina",
      price: 15000,
      currency: "IDR",
      rating: 2.5,
      image: "assets/egg-toast.jpg",
      eatTime: "Lunch",
    },
    {
      id: 3,
      productName: "Fried Rice Cak Lontong",
      seller: "by Kulina",
      price: 27000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/fried-rice.jpg",
      eatTime: "Dinner",
    },
    {
      id: 4,
      productName: "Fruit Salad",
      seller: "by Kulina",
      price: 10000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/fruit-salad.jpg",
      eatTime: "Lunch",
    },
    {
      id: 5,
      productName: "Ice Cream Tung-tung",
      seller: "by Kulina",
      price: 5000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/ice-cream.jpg",
      eatTime: "Lunch",
    },
    {
      id: 6,
      productName: "Nuggets Ugetz",
      seller: "by Kulina",
      price: 6500,
      currency: "IDR",
      rating: 4.5,
      image: "assets/nuggets.jpg",
      eatTime: "Dinner",
    },
    {
      id: 7,
      productName: "Pasta Abata",
      seller: "by Kulina",
      price: 15000,
      currency: "IDR",
      rating: 1.5,
      image: "assets/pasta.jpg",
      eatTime: "Dinner",
    },
    {
      id: 8,
      productName: "Pizza Pottato Bianca",
      seller: "by Kulina",
      price: 45000,
      currency: "IDR",
      rating: 3.5,
      image: "assets/pizza.jpg",
      eatTime: "Dinner",
    },
    {
      id: 9,
      productName: "Buryam Sarinah",
      seller: "by Kulina",
      price: 15000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/porridge.jpg",
      eatTime: "Lunch",
    },
    {
      id: 10,
      productName: "Roasted Egg",
      Seller: "by Kulina",
      price: 5000,
      currency: "IDR",
      rating: 4.5,
      image: "assets/roasted-egg.jpg",
      eatTime: "Lunch",
    },
    {
      id: 11,
      productName: "Fresh Vegetables",
      Seller: "by Kulina",
      price: 10000,
      currency: "IDR",
      rating: 3.5,
      image: "assets/vegetables.jpg",
      eatTime: "Lunch",
    },
  ],
  isChartOpen: false,
  currentDate: Date.now(),
  location: "Tokopedia Tower",
  cartValues: 0,
  price: 0,
  currency: "IDR",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { qty, price } = action.payload;
      return {
        ...state,
        cartValues: state.cartValues + qty,
        price: state.price + price,
      };

    default:
      return state;
  }
};

export default cartReducer;

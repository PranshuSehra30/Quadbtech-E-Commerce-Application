import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth1";
import toast from "react-hot-toast";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    if (auth?.token) getCart();
    // let existingCartItem = localStorage.getItem("cart");
    // if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, [auth]);

  const refetchCart = () => {
    if (auth?.token) getCart();
  }

  const getCart = async () => {
    try {
      // Send GET request to the API
      console.log(auth);
      console.log(auth?.token);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/cart`,
        {
          headers: {
            token: auth?.token
          }
        }
      );
      if (response.status === 200) {
        // If the deletion is successful, update the cart state and localStorage
        let myCart = response.data.items;
        setCart(myCart);
        // localStorage.setItem("cart", JSON.stringify(myCart));
        toast.success("Cart fetched successfully");
      } else {
        toast.error("Failed to fetch the cart");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching cart");
    }
  };

  return (
    <CartContext.Provider value={[cart, setCart, refetchCart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

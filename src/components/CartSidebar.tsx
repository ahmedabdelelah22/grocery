import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";

const CartSidebar = () => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const {
    items,
    updateQuantity,
    removeFromCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const deliveryFree = cartTotal > 20 ? 0 : 1.99;
  const grandTotal = cartTotal + deliveryFree;

  return (
    <>
      {/* overlay */}
      <div className="fixed inset-0 bg-black/40 z-50 transition-opacity" 
      // onClick={() => setIsCartOpen(false)}
      >
        {/* sidebar */}
        <div className="fixed right-0 top-0 h-full w-full bg-white max-w-md z-50 shadow-2xl flex flex-col animate-slide-in-right">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-app-border">
            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="size-5" />
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <span className="px-2 py-0.5 text-xs font-semibold bg-app-cream rounded-full">
                {items.length} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl hover:bg-app-cream transition-colors"
            >
              <XIcon className="size-5" />
            </button>
          </div>
          {/* Items */}
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-5">
              <p className="flex text-lg font-medium gap-3">
                <ShoppingBagIcon /> Your cart is empty
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate("/products");
                }}
                className="mt-4 px-4 py-2 bg-app-green-light text-white rounded-lg hover:bg-app-text transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product._id}
                    className="flex items-center gap-4 mb-4 bg-app-cream-dark/60 rounded-xl p-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="size-16 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate text-sm">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {currency}
                        {item.product.price.toFixed(2)} /{item.product.unit}
                      </p>
                      <div className="flex items-center  justify-between  mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product._id,
                                item.quantity - 1,
                              )
                            }
                            className="size-7 rounded-lg bg-white border border-app-border flex-center"
                          >
                            <MinusIcon className="size-3" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product._id,
                                item.quantity + 1,
                              )
                            }
                            className="size-7 rounded-lg bg-white border border-app-border flex-center"
                          >
                            <PlusIcon className="size-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{currency} {(item.product.price * item.quantity).toFixed(2)}</span>
                           <button
                          onClick={() => removeFromCart(item.product._id)}
                          className="p-1 text-app-text-light hover:text-app-error transition-colors"
                        >
                          <Trash2Icon className="size-4 " />
                        </button>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-app-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-app-text-light">Subtotal</span>
                  <span className="font-medium">
                    {currency}
                    {cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-app-text-light">Delivery</span>
                  <span className="font-medium">
                    {deliveryFree === 0 ? (
                      <span className="text-app-success">Free</span>
                    ) : (
                      `${currency}${deliveryFree.toFixed(2)}`
                    )}
                  </span>
                </div>
                {deliveryFree > 0 && (
                  <p className="text-xs text-app-text-light">
                    Free delivery for orders over {currency}20.00!
                  </p>
                )}

                <div className="flex justify-between font-semibold text-base border-t border-app-border pt-3">
                  <span>Total</span>
                  <span>
                    {currency}
                    {grandTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate("/checkout");
                    window.scroll(0, 0);
                  }}
                  className="w-full py-3 bg-app-orange text-white font-semibold rounded-xl hover:bg-app-orange-dark transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  Proceed to Checkout <ArrowRightIcon className="size-4 " />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

import { Plus, Star } from "lucide-react";
import type { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/products/${product._id}`)}
        className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full  object-cover p-4 group-hover:p-2 transition-all duration-300"
          />
          {/* Badges */}
          <div>
            <div className="absolute top-3 left-3 flex flex-wap gap-1.5 ">
              {product.discount > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full">
                  {product.discount}% OFF{" "}
                </span>
              )}
            </div>
          </div>
          {/* info */}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold">{product.name}</h3>
          {/* <p className="text-sm text-app-text-light mt-1">${product.price.toFixed(2)}</p> */}
          {product.rating > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="size-3 text-app-warning fill-app-warning" />
              <span className="text-xs font-medium text-app-text">
                {product.rating}
              </span>
              <span className="text-xs text-app-text-light">
                ({product.reviewCount})
              </span>
            </div>
          )}
          {/* price + Add */}
        <div className="flex  items-center justify-between gap-2 sm:flex-nowrap">
  <div className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
    <span className="whitespace-nowrap font-medium">
      {currency}
      {product.price.toFixed(1)}
    </span>

    <span className="whitespace-nowrap">/{product.unit}</span>

    {product.originalPrice > product.price && (
      <span className="whitespace-nowrap text-xs text-app-text-light line-through">
        {currency}
        {product.originalPrice.toFixed(1)}
      </span>
    )}
  </div>

  <button
    onClick={(e) => {
      e.stopPropagation();
      addToCart(product);
    }}
    className="size-7 shrink-0 rounded-full bg-app-orange text-white flex-center transition-colors hover:bg-app-orange-dark active:scale-95"
  >
    <Plus className="size-3.5" />
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

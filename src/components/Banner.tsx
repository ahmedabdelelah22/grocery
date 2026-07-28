import { XIcon, TruckIcon , ZapIcon} from "lucide-react"; // ✅ ADD TruckIcon import
import { useState } from "react";
 
const Banner = () => {
  // ✅ Initialize state using a function (lazy initialization)
  // This reads sessionStorage ONCE during first render only
  const [isVisible, setIsVisible] = useState(() => {
    const dismissed = sessionStorage.getItem("bannerDismissed");
    return dismissed !== "true"; // ✅ Return initial state
  });

  const handleClose = () => {
    sessionStorage.setItem("bannerDismissed", "true");
    setIsVisible(false);
  };
 
  if (!isVisible) return null;
 
  return (
    <div className="bg-linear-to-r from-emerald-600 via-emerald-700 to-emerald-600 text-white text-xs sm:text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-6"> {/* ✅ FIXED */}
        <div className=" flex-center gap-2 ">
        <TruckIcon className="size-4 shrink-0" /> {/* ✅ NOW IMPORTED */}
        <span className="font medium">
          Free shipping on orders over $50 — Use code <span className="font-bold">SHIP50</span>
        </span>
        </div>
        <span className="hidden sm:inline text-withe/40 ">|</span>
        <div className="hidden sm:flex items-center gap-2">
          <ZapIcon className="size-4 fill-yellow-400 text-yellow-400 shrink-0" /> {/* ✅ FIXED */}
          <span className="font-medium">
           Farm-fresh produce delivered to your door
          </span>
        </div>
      </div>
 
      <button
        onClick={handleClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <XIcon className="size-4" />
      </button>
    </div>
  );
};
 
export default Banner;
 
import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

function CartButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
          9
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;

"use client";
import { CartItemWithProduct } from "@/utils/types";
import { Card } from "../ui/card";
import { FirstColumn, ForthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { id: productId, image, name, company, price } = cartItem.product;

        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn name={name} image={image} productId={productId} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn quantity={amount} id={id} />
            <ForthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;

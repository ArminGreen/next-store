import { Cart } from "@prisma/client";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { createOrderAction } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="SubTotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} isLastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place Order" className="w-full p-2 mt-8" />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  isLastRow,
  className,
}: {
  label: string;
  amount: number;
  isLastRow?: boolean;
  className?: string;
}) {
  return (
    <>
      <p className={cn("flex justify-between text-sm", className)}>
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {isLastRow ? null : <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;

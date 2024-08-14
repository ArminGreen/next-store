import { IconButtons } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
// import Alertdialog from "@/components/global/AlertDialog";
import EmptyList from "@/components/global/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

async function ProductsPage() {
  const items = await fetchAdminProducts();

  if (!items) return <EmptyList />;
  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: productId, name, company, price } = item;
            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link href={`/products/${productId}`}>
                    <Image
                      src={item.image}
                      width={70}
                      height={70}
                      alt={name}
                      className="rounded-sm object-cover h-[50px] w-[70px]"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className="underline tracking-wide text-muted-foreground capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButtons actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
export default ProductsPage;

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButtons actionType="delete" />
    </FormContainer>
  );
}

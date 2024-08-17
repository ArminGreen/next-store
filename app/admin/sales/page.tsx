import SectionTitle from "@/components/global/SectionTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

async function SalesPage() {
  const orders = await fetchAdminOrders();
  return (
    <>
      <SectionTitle text="Orders:" />
      <div>
        <Table>
          <TableCaption>Total Orders:{orders.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const {
                id,
                products,
                shipping,
                tax,
                createdAt,
                orderTotal,
                email,
              } = order;
              return (
                <TableRow key={id}>
                  <TableCell>{email}</TableCell>
                  <TableCell>{products}</TableCell>
                  <TableCell>{formatCurrency(orderTotal)}</TableCell>
                  <TableCell>{formatCurrency(tax)}</TableCell>
                  <TableCell>{formatCurrency(shipping)}</TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
export default SalesPage;

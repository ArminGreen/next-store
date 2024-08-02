import { fetchAllProducts } from "@/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `search=${search}` : "";

  return (
    <>
      {/* Header */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              asChild
              size="icon"
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=grid&${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              variant={layout === "list" ? "default" : "ghost"}
            >
              <Link href={`/products?layout=list&${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* Products */}
      <div>
        {totalProducts === 0 ? (
          <div>
            <h5 className="text-2xl mt-16">
              Sorry, no products matched your search...
            </h5>
            <Button asChild size="lg" className="mt-8">
              <Link href="/products" className="capitalize">
                Return To products
              </Link>
            </Button>
          </div>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;

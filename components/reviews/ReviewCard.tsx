import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Rating from "./Rating";
import Comment from "./Comment";
import Link from "next/link";
type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    image: string;
    name: string;
    id: string;
    product?: boolean;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          {reviewInfo.product ? (
            <Link
              href={`/products/${reviewInfo.id}`}
              className="cursor-pointer"
            >
              <Image
                src={reviewInfo.image}
                alt={reviewInfo.name}
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded-full"
              />
            </Link>
          ) : (
            <Image
              src={reviewInfo.image}
              alt={reviewInfo.name}
              width={48}
              height={48}
              className="w-12 h-12 object-cover rounded-full"
            />
          )}
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;

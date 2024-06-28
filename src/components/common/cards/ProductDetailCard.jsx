import { Card } from "flowbite-react";

export default function ProductDetailCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <Card className="max-w-sm">
      <div>
        <img src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"} alt={title} />
      </div>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title || "no title available"}
        </h5>
        <p>{description || "no description"}</p>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price ? price : "unavialable"}$
        </span>
      </div>
    </Card>
  );
}

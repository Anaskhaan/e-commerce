import { useRouter } from "next/navigation";

export const PurchaseButton = ({ product }: any) => {
  const router = useRouter();

  const handlePurchase = () => {
    router.push(
      `/checkout?name=${encodeURIComponent(product.name)}&price=${
        product.price
      }&image=${encodeURIComponent(product.image)}`
    );
  };

  return (
    <button
      onClick={handlePurchase}
      className='px-6 py-3 bg-blue-600 text-white rounded'>
      Purchase
    </button>
  );
};

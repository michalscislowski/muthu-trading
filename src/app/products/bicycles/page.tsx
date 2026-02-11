import type { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata: Metadata = {
  title: "Bicycles",
  description:
    "High-quality bicycles for adults and children, tailored for businesses catering to diverse customer needs.",
};

const subcategories = [
  {
    name: "Bikes for adults",
    description:
      "Durable and reliable bicycles designed for daily commuting, recreational riding, and fitness. Perfect for retail, rental, and corporate fleet offerings.",
    image: "/images/categories/bicycles/adults.jpg",
  },
  {
    name: "Bikes for children",
    description:
      "Safe, colourful, and age-appropriate bicycles for children of all ages. Built with robust frames and safety features for worry-free riding.",
    image: "/images/categories/bicycles/children.jpeg",
  },
];

export default function BicyclesPage() {
  return (
    <CategoryPageLayout
      title="Bicycles"
      subtitle="Product Category"
      description="Explore our extensive selection of high-quality bicycles tailored for businesses catering to diverse customer needs. Our range includes durable and reliable options for both children and adults, designed for various purposes—from daily commuting to recreational riding. Each model combines safety, comfort, and performance, making them ideal for your retail, rental, or corporate offerings."
      subcategories={subcategories}
      heroImage="/images/categories/bicycles/adults.jpg"
    />
  );
}

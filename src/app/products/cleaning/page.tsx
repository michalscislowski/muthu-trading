import type { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata: Metadata = {
  title: "Cleaning Products",
  description:
    "Professional cleaning solutions including air fresheners, detergents, softeners, floor cleaners, and insecticides.",
};

const subcategories = [
  {
    name: "Insecticides",
    description:
      "Reliable pest management solutions including sprays, traps, and repellents for homes, businesses, and outdoor spaces.",
    image: "/images/categories/cleaning/insecticides.jpeg",
  },
  {
    name: "Dishwashing products",
    description:
      "High-performance dishwashing detergents, tablets, and rinse aids that deliver sparkling clean results every time.",
    image: "/images/categories/cleaning/dishwashing.jpg",
  },
  {
    name: "Surface cleaning products",
    description:
      "Effective surface cleaners for all types — tile, wood, laminate, and stone. Streak-free formulas for professional results.",
    image: "/images/categories/cleaning/surface-cleaning.jpg",
  },
  {
    name: "Laundry softeners",
    description:
      "Premium fabric softeners that leave clothes feeling soft, fresh, and gently fragranced after every wash cycle.",
    image: "/images/categories/cleaning/softeners.webp",
  },
  {
    name: "Detergent and laundry soap",
    description:
      "Powerful detergents and laundry soaps for thorough cleaning performance, available in powder, liquid, and capsule formats.",
    image: "/images/categories/cleaning/detergent.jpg",
  },
  {
    name: "Air fresheners",
    description:
      "Long-lasting air fresheners in sprays, plug-ins, and gel formats to maintain pleasant, inviting environments in any space.",
    image: "/images/categories/cleaning/air-fresheners.jpg",
  },
];

export default function CleaningPage() {
  return (
    <CategoryPageLayout
      title="Cleaning Products"
      subtitle="Product Category"
      description="Explore our diverse selection of cleaning products designed for businesses seeking reliable and effective solutions. From Air Fresheners to maintain a pleasant environment, to Detergents and Laundry Soaps for thorough cleaning, our range covers all essential needs. We also provide Clothes Softeners for added fabric care, Floor Cleaning Products for maintaining clean surfaces, Dishwasher Detergents for efficient dishwashing, and Insecticides to manage pest issues."
      subcategories={subcategories}
      heroImage="/images/categories/cleaning/surface-cleaning.jpg"
    />
  );
}

import type { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata: Metadata = {
  title: "Food Products",
  description:
    "High-quality food products including preserves, coffee, oils, sauces, fresh foods, dairy, and beverages. ISO 22000 certified.",
};

const subcategories = [
  {
    name: "Preserves",
    description:
      "Premium jams, canned goods, and preserved items sourced from trusted Portuguese producers with rigorous quality control.",
    image: "/images/categories/food/preserves.webp",
  },
  {
    name: "Coffee and Infusions",
    description:
      "Expertly curated selection of coffee blends, teas, and herbal infusions from renowned European roasters and plantations.",
    image: "/images/categories/food/coffee.jpg",
  },
  {
    name: "Oils and Vinegars",
    description:
      "Fine Portuguese olive oils, cooking oils, and artisan vinegars — the foundation of Mediterranean culinary excellence.",
    image: "/images/categories/food/oils.jpg",
  },
  {
    name: "Sauces and Condiments",
    description:
      "Flavour-enhancing sauces, seasonings, and condiments that bring authentic Portuguese and international tastes to your shelves.",
    image: "/images/categories/food/sauces.jpg",
  },
  {
    name: "Fresh Foods",
    description:
      "Farm-fresh vegetables, fruits, meats, and fish delivered with temperature-controlled logistics to guarantee peak freshness.",
    image: "/images/categories/food/fresh-foods.jpg",
  },
  {
    name: "Dairy products",
    description:
      "Quality milk, cheese, yoghurt, and dairy items from certified producers, handled with cold-chain precision throughout transport.",
    image: "/images/categories/food/dairy.jpg",
  },
  {
    name: "Beverages and Soft Drinks",
    description:
      "Refreshing non-alcoholic beverages including juices, sodas, and waters from leading Portuguese and European brands.",
    image: "/images/categories/food/beverages.webp",
  },
];

export default function FoodPage() {
  return (
    <CategoryPageLayout
      title="Food"
      subtitle="Product Category"
      description="We are committed to deliver high-quality fresh food. We honour this commitment by selecting meats with the best origins, and by offering the freshest fish and the best-tasting fruits and vegetables. This is because our fresh food undergoes rigorous quality control with regular supplier audits."
      subcategories={subcategories}
      heroImage="/images/fresh-food.jpg"
    />
  );
}

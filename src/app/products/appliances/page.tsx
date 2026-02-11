import type { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata: Metadata = {
  title: "Household Appliances",
  description:
    "Extensive range of household appliances including water pumps, fans, washing machines, TVs, microwaves, and more.",
};

const subcategories = [
  {
    name: "Water pumps",
    description:
      "Reliable water pumps for domestic and commercial use, engineered for efficiency and long-lasting performance in any environment.",
    image: "/images/categories/appliances/water-pumps.jpg",
  },
  {
    name: "Fans",
    description:
      "Standing, desk, and ceiling fans offering powerful airflow and quiet operation. Energy-efficient cooling solutions for every space.",
    image: "/images/categories/appliances/fans.jpg",
  },
  {
    name: "Washing machines",
    description:
      "Energy-efficient washing machines with multiple cycle options, from compact models to large-capacity units for commercial applications.",
    image: "/images/categories/appliances/washing-machines.webp",
  },
  {
    name: "TVs",
    description:
      "Modern LED and Smart TVs in a range of screen sizes, featuring crisp displays and the latest connectivity options.",
    image: "/images/categories/appliances/tvs.webp",
  },
  {
    name: "Microwaves",
    description:
      "Countertop and built-in microwaves with versatile cooking modes, combining convenience with reliable performance.",
    image: "/images/categories/appliances/microwaves.jpeg",
  },
  {
    name: "Freezers",
    description:
      "Chest and upright freezers with excellent energy ratings, designed for optimal food preservation in homes and businesses.",
    image: "/images/categories/appliances/freezers.jpg",
  },
  {
    name: "Heaters",
    description:
      "Portable and fixed heaters for efficient indoor warming — from oil radiators to convection and fan heater models.",
    image: "/images/categories/appliances/heaters.jpeg",
  },
  {
    name: "Small household appliances",
    description:
      "Blenders, toasters, irons, kettles, and more — a comprehensive range of everyday kitchen and home essentials.",
    image: "/images/categories/appliances/small-appliances.jpg",
  },
];

export default function AppliancesPage() {
  return (
    <CategoryPageLayout
      title="Household Appliances"
      subtitle="Product Category"
      description="Discover our extensive range of household appliances, tailored for businesses seeking quality, durability, and efficiency. Whether you're outfitting a retail space, supplying corporate clients, or stocking inventory for commercial needs, our collection includes everything from kitchen essentials to cleaning and home maintenance equipment. Each product is selected for its reliability and performance, ensuring you can meet the demands of your customers and clients. Partner with us to offer top-tier appliances that bring value and satisfaction to any household."
      subcategories={subcategories}
      heroImage="/images/categories/appliances/small-appliances.jpg"
    />
  );
}

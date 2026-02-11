import type { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata: Metadata = {
  title: "Health & Beauty Products",
  description:
    "Diverse range of health and beauty products including dental care, hair care, skincare, perfumes, and personal hygiene essentials.",
};

const subcategories = [
  {
    name: "Dental products",
    description:
      "Toothpaste, toothbrushes, and mouthwash from leading oral care brands — comprehensive dental hygiene for every market.",
    image: "/images/categories/health-beauty/dental.avif",
  },
  {
    name: "Hair dyes",
    description:
      "Professional-grade hair colour treatments and dyes offering a wide spectrum of shades for salon and retail distribution.",
    image: "/images/categories/health-beauty/hair-dyes.avif",
  },
  {
    name: "Hair care",
    description:
      "Specialised treatments, masks, and styling products designed to nourish, protect, and enhance all hair types.",
    image: "/images/categories/health-beauty/hair-care.webp",
  },
  {
    name: "Hair Dressing and depilation products",
    description:
      "Professional grooming tools and hair removal products for both salon professionals and everyday home use.",
    image: "/images/categories/health-beauty/hair-dressing.jpg",
  },
  {
    name: "Deodorants",
    description:
      "Effective antiperspirants and deodorants from trusted European brands, available in sprays, roll-ons, and sticks.",
    image: "/images/categories/health-beauty/deodorants.jpg",
  },
  {
    name: "Shampoos and Conditioners",
    description:
      "Premium hair cleansing and conditioning formulas for every hair type, from daily use to specialised care ranges.",
    image: "/images/categories/health-beauty/shampoos.webp",
  },
  {
    name: "Hand and body creams",
    description:
      "Luxurious moisturisers and nourishing creams for hands and body, enriched with natural ingredients for lasting hydration.",
    image: "/images/categories/health-beauty/creams.webp",
  },
  {
    name: "Perfumes",
    description:
      "An elegant collection of fragrances for men and women — from everyday freshness to signature evening scents.",
    image: "/images/categories/health-beauty/perfumes.jpeg",
  },
  {
    name: "Sanitary Pads",
    description:
      "Reliable personal hygiene products offering comfort and protection, sourced from certified quality manufacturers.",
    image: "/images/categories/health-beauty/sanitary.webp",
  },
  {
    name: "Bath Gel / Hand and Body Wash",
    description:
      "Refreshing shower gels, bath foams, and body washes with a range of fragrances and formulations for all skin types.",
    image: "/images/categories/health-beauty/bath-gel.jpg",
  },
];

export default function HealthBeautyPage() {
  return (
    <CategoryPageLayout
      title="Health & Beauty"
      subtitle="Product Category"
      description="Explore our diverse range of health and beauty products designed to cater to your everyday needs. Whether you're looking for refreshing Perfumes, nourishing Hand and Body Creams, or essential Sanitary Pads and Booties, we've got you covered. Our collection also includes Bath Gels, Toilet and Hand Soaps, and a variety of Shampoos and Conditioners to keep you feeling fresh. Maintain your grooming routine with our Deodorants, Beard and Hair Removal Products, and Hair Treatments. We also offer a selection of Hair Dyes and oral care essentials like Toothpaste, Toothbrushes, and Mouthwash. Find everything you need to stay confident and look your best."
      subcategories={subcategories}
      heroImage="/images/categories/health-beauty/shampoos.webp"
    />
  );
}

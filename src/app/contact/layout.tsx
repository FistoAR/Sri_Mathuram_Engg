import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us | Sri Mathurams Medical Engineering",
  description:
    "Let's build better healthcare spaces together. Contact Sri Mathurams Medical Engineering for enquiries, quotes, and product customisation.",
  canonical: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

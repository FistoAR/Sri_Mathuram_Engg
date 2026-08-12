import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us | Sri Mathurams Medical Engineering Profile",
  description:
    "Learn about Sri Mathurams Medical Engineering, a premier hospital furniture and medical equipment manufacturer operating since 1997.",
  canonical: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SourcePage from "../../components/SourcePage";
import { ALL_ROUTES, hasRoute, metadataFor } from "../../lib/site";
type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return ALL_ROUTES.filter(route => route !== "/").map(route => ({ slug: route.slice(1).split("/") }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = "/" + slug.join("/");
  return hasRoute(route) ? metadataFor(route) : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const route = "/" + slug.join("/");
  if (!hasRoute(route)) notFound();
  return <SourcePage route={route} />;
}

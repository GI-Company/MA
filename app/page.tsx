import type { Metadata } from "next";
import SourcePage from "../components/SourcePage";
import { metadataFor } from "../lib/site";
export const metadata: Metadata = metadataFor("/");
export default function Home() { return <SourcePage route="/" />; }

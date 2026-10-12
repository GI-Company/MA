import Script from "next/script";
import { readPage } from "../lib/site";

/** Trusted, repository-owned HTML rendered through a Next.js Server Component. */
export default function SourcePage({ route }: { route: string }) {
  const page = readPage(route);
  return <>
    <link rel="stylesheet" href={page.isDemo ? "/demo.css" : "/studio.css"} />
    {["salon","contractor","lodge","retail"].some(name => route.startsWith(`/demos/${name}`)) && <link rel="stylesheet" href="/concept.css" />}
    <div className={`site-page ${page.isDemo ? "site-page--demo" : "site-page--studio"} ${page.classes}`.trim()}
      dangerouslySetInnerHTML={{ __html: page.markup }} />
    <Script src={page.isDemo ? "/demo-script.js" : "/studio-script.js"} strategy="afterInteractive" />
  </>;
}

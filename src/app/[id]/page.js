import fs from 'fs';
import path from 'path'; 

import RevealWrapper from "@/components/revealWrapper/revealWrapper";

const dataDirectory = path.join(process.cwd(), 'src', 'presentations');

// Read the subfolders under the "presentations" folder
// and generate the static paths for the pages.
export async function generateStaticParams() {
  return fs.readdirSync(dataDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ( { id: dirent.name }));
}

export default async function Presentation({ params }) {
  const Content = await (await import(`@/presentations/${params.id}/slides.js`)).default;

  return (
    <RevealWrapper>
      <Content />
    </RevealWrapper>
  );
}

import path from 'path';

import readSubfolders from "@/utils/readSubfolders";
import PresentationGrid from '@/components/presentationGrid';

async function getPresentations() {
  const folders = readSubfolders(path.join(process.cwd(), 'src', 'presentations'));

  const presentations = await Promise.all(folders.map(async (folder) => {
    const metadata = await (await import(`@/presentations/${folder.name}/metadata.js`)).default;
    return {
      ...metadata,
      ...folder
    };
  }));

  return presentations;
}

export default async function Home() {
  const presentations = await getPresentations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PresentationGrid presentations={presentations} />
    </main>
  );
}

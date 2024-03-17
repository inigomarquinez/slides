import path from 'path'; 

import RevealWrapper from "@/components/revealWrapper/revealWrapper";
import readSubfolders from '@/utils/readSubfolders';

export async function generateStaticParams() {
  const folders = readSubfolders(path.join(process.cwd(), 'src', 'presentations'));
  return folders.map(folder => ({ id: folder.name }));
}

export default async function Presentation({ params }) {
  const Content = await (await import(`@/presentations/${params.id}/slides.js`)).default;

  return (
    <RevealWrapper>
      <Content />
    </RevealWrapper>
  );
}

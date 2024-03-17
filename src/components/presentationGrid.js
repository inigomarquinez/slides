import PresentationCard from "./presentationCard";

export default function PresentationGrid({ presentations }) {
  return presentations.map((presentation) => (
    <PresentationCard key={presentation.name} presentation={presentation} />
  ));
}

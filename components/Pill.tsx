export default function Pill({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full p-1 px-2 bg-blue-600/50 text-white/70 text-xs mr-2">
      {name}
    </span>
  );
}

export default function ProjectCard({p}){
  return (
    <article className="rounded-2xl border border-neutral-800 p-5 hover:border-neutral-700 transition">
      <h3 className="font-semibold">{p.title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
      <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
        {p.bullets.map((b,i)=><li key={i}>{b}</li>)}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {p.tech.map(t=> <span key={t} className="px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700">{t}</span>)}
      </div>
    </article>
  );
}

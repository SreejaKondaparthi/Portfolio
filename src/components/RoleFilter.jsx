import roles from "../data/roles.json";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

export default function RoleFilter(){
  const [params, setParams] = useSearchParams();
  const selected = params.get("role") || "all";
  const setRole = (r) => {
    const next = new URLSearchParams(params);
    if (r === "all") next.delete("role");
    else next.set("role", r);
    setParams(next);
  };
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button onClick={()=>setRole("all")}
        className={clsx("px-3 py-1 rounded-full border border-neutral-700 text-sm",
        selected==="all" && "bg-neutral-800")}>All</button>
      {roles.map(r=>(
        <button key={r.id} onClick={()=>setRole(r.id)}
          className={clsx("px-3 py-1 rounded-full border border-neutral-700 text-sm",
          selected===r.id && "bg-neutral-800")}>{r.label}</button>
      ))}
    </div>
  );
}

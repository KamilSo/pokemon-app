type StatCardProps = {
  label: string;
  value: string;
  helperText: string;
  helperTone?: "positive" | "neutral";
};

export function StatCard({
  label,
  value,
  helperText,
  helperTone = "neutral",
}: StatCardProps) {
  const helperClassName =
    helperTone === "positive" ? "text-emerald-300" : "text-slate-400";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-4xl font-bold">{value}</p>
      <p className={`mt-2 text-sm ${helperClassName}`}>{helperText}</p>
    </div>
  );
}

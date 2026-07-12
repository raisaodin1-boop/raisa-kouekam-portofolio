"use client";

export function HodixProjectPreview() {
  return (
    <div
      className="relative flex h-52 flex-col justify-between overflow-hidden bg-[#0f2e24] p-5 sm:p-6"
      aria-hidden
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#22c55e]/10 blur-2xl" />
      <div className="absolute -bottom-6 left-4 h-24 w-24 rounded-full bg-[#f59e0b]/10 blur-2xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-lg font-bold tracking-tight text-white">
            HODIX
            <span className="text-[#22c55e]">.</span>
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/50">
            Infrastructure · Trust Score
          </p>
        </div>
        <span className="rounded-full bg-[#f59e0b]/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#fbbf24]">
          Vérifié
        </span>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-[#163828]/80 p-3">
        <p className="text-[11px] font-medium text-white/70">
          Identité Financière
        </p>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-white">15</p>
            <p className="text-[10px] text-white/50">Trust Score / 1000</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[#22c55e]">Bronze</p>
            <p className="text-[10px] text-white/40">Niveau d&apos;identité</p>
          </div>
        </div>
      </div>

      <div className="relative flex gap-2">
        {["Tontines", "Épargne", "KYC"].map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

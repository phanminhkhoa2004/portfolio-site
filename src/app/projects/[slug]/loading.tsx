export default function ProjectDetailLoading() {
  return (
    <div className="relative min-h-screen w-full px-6 pb-20 pt-20 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="h-10 w-48 animate-pulse rounded-full bg-white/10" />
        <div className="h-20 w-full max-w-3xl animate-pulse rounded-3xl bg-white/10" />
        <div className="h-[420px] w-full animate-pulse rounded-[32px] bg-white/10" />
        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-32 animate-pulse rounded-3xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

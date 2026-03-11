import { Skeleton } from '@/components/ui/skeleton';

const ProjectDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero skeleton */}
      <section className="py-24 md:py-32">
        <div className="container-custom max-w-4xl space-y-6">
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full max-w-2xl" />
          <Skeleton className="h-6 w-2/3 max-w-xl" />
          <div className="flex gap-3 pt-4">
            <Skeleton className="h-10 w-24 rounded-2xl" />
            <Skeleton className="h-10 w-24 rounded-2xl" />
            <Skeleton className="h-10 w-24 rounded-2xl" />
          </div>
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-36 rounded-2xl" />
            <Skeleton className="h-12 w-40 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Metrics skeleton */}
      <section className="py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 space-y-4">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-16">
        <div className="container-custom grid lg:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 space-y-4">
              <Skeleton className="h-6 w-40" />
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-12 w-full rounded-xl" />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailSkeleton;

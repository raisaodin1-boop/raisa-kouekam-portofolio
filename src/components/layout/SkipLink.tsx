type SkipLinkProps = {
  label: string;
};

export function SkipLink({ label }: SkipLinkProps) {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:inline-flex focus-visible:min-h-11 focus-visible:min-w-11 focus-visible:items-center focus-visible:justify-center focus-visible:rounded-xl focus-visible:bg-primary focus-visible:px-4 focus-visible:py-3 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {label}
    </a>
  );
}

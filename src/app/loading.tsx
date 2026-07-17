export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-light">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#2B5FD9] border-t-transparent" />
        <p className="text-sm text-[#5A6577]">Loading...</p>
      </div>
    </div>
  );
}

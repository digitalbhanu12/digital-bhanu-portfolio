import { ImageIcon, Play } from "lucide-react";

type Props = {
  label: string;
  kind?: "image" | "video" | "profile";
  className?: string;
};

export function PlaceholderMedia({ label, kind = "image", className = "" }: Props) {
  const Icon = kind === "video" ? Play : ImageIcon;

  return (
    <div
      className={`relative flex min-h-56 items-center justify-center overflow-hidden rounded-lg border border-dashed border-sky-200 bg-gradient-to-br from-white via-sky-50 to-emerald-50 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(16,185,129,0.18),transparent_30%)]" />
      <div className="relative text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
          <Icon className="h-7 w-7 text-skyAccent" />
        </div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        <p className="mt-1 text-xs text-slate-500">Clean placeholder for your own upload</p>
      </div>
    </div>
  );
}

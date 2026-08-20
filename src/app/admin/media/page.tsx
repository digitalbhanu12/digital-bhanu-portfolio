"use client";

import { useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import { imageCategories, videoCategories } from "@/lib/brand";
import { validateUpload } from "@/lib/validation";

export default function AdminMediaPage() {
  const [error, setError] = useState("");
  const [kind, setKind] = useState<"image" | "video">("image");

  return (
    <AdminShell>
      <h1 className="text-3xl font-black">AI Media Uploads</h1>
      <p className="mt-2 text-slate-600">Upload AI-generated images and videos with required metadata and confirmation.</p>
      <form className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <select className="field max-w-xs" value={kind} onChange={(event) => setKind(event.target.value as "image" | "video")}>
          <option value="image">AI-generated image</option>
          <option value="video">AI-generated video</option>
        </select>
        <input className="field" placeholder={kind === "image" ? "Image title" : "Video title"} />
        <textarea className="field min-h-24" placeholder="Short description" />
        <input className="field" placeholder={kind === "image" ? "AI tool used" : "AI video tool used"} />
        <textarea className="field min-h-24" placeholder={kind === "image" ? "Prompt used" : "Prompt or script used"} />
        {kind === "video" ? <input className="field" placeholder="YouTube link option" /> : null}
        {kind === "video" ? <input className="field" placeholder="Video duration" /> : null}
        <select className="field">
          {(kind === "image" ? imageCategories : videoCategories).map((category) => <option key={category}>{category}</option>)}
        </select>
        <input className="field" type="date" />
        <input
          className="field"
          type="file"
          accept={kind === "image" ? ".jpg,.jpeg,.png,.webp" : ".mp4,.webm"}
          onChange={(event) => {
            const file = event.target.files?.[0];
            setError(file ? validateUpload(file, kind) || "" : "");
          }}
        />
        {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
        <label className="flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          <input type="checkbox" required className="mt-1" />
          I confirm that this image or video is AI-generated or that I have permission to publish it.
        </label>
        <button className="w-fit rounded-lg bg-navy px-5 py-3 font-bold text-white">Upload Media</button>
      </form>
    </AdminShell>
  );
}

export const imageRules = {
  maxSizeMb: 8,
  types: ["image/jpeg", "image/png", "image/webp"]
};

export const videoRules = {
  maxSizeMb: 150,
  types: ["video/mp4", "video/webm"]
};

export function validateUpload(file: File, kind: "image" | "video") {
  const rules = kind === "image" ? imageRules : videoRules;
  const maxBytes = rules.maxSizeMb * 1024 * 1024;

  if (!rules.types.includes(file.type)) {
    return `Only ${rules.types.join(", ")} files are allowed.`;
  }

  if (file.size > maxBytes) {
    return `File size must be ${rules.maxSizeMb}MB or less.`;
  }

  return null;
}

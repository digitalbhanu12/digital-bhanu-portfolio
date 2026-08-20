export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  status: "draft" | "published";
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  tool: string;
  prompt: string;
  createdAt: string;
};

export type VideoItem = GalleryItem & {
  duration: string;
  sourceType: "upload" | "youtube";
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
};

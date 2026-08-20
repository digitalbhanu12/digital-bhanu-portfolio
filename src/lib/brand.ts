import type { BlogPost, GalleryItem, Project, VideoItem } from "@/types/content";

export const brand = {
  name: "Digital Bhanu",
  fullName: "Bhanu Bhakta Pokhrel",
  title: "AI Marketing Learner, Content Creator, and Digital Marketing Consultant",
  tagline: "Learn, Create, and Grow with AI",
  location: "Nepal",
  language: "English",
  optionalLanguage: "Nepali and English",
  email: "hello@digitalbhanu.com",
  phone: "Add phone or WhatsApp number",
  whatsappUrl: "https://wa.me/97798XXXXXXXX?text=Hello%20Digital%20Bhanu",
  thankYouVideoUrl: "https://www.youtube.com/shorts/uiEPINpo79g",
  appointmentUrl: "https://appointment.digitalbhanu12.com/",
  footer:
    "© 2026 Digital Bhanu. All rights reserved. Images and videos displayed on this website are AI-generated unless otherwise stated."
};

export const blogCategories = [
  "Artificial Intelligence",
  "Digital Marketing",
  "AI Tools",
  "Content Creation",
  "Website Development",
  "Social Media Marketing",
  "AI Video Creation"
];

export const imageCategories = [
  "AI Portraits",
  "Product Advertisements",
  "Social Media Designs",
  "Futuristic Art",
  "Business Visuals",
  "Marketing Creatives"
];

export const videoCategories = [
  "AI Advertisements",
  "Product Videos",
  "Educational Videos",
  "Cinematic Videos",
  "Social Media Reels",
  "AI Storytelling"
];

export const services = [
  ["AI Content Creation", "Plan and create helpful AI-assisted articles, captions, and campaign ideas."],
  ["AI Image Prompt Creation", "Write clear prompts for portraits, marketing visuals, and creative concepts."],
  ["AI Video Advertisement Creation", "Create short AI-assisted video concepts, scripts, and ad storyboards."],
  ["Social Media Marketing", "Build practical social media plans for consistent online growth."],
  ["Website and Landing Page Creation", "Design fast, focused pages for personal brands and small businesses."],
  ["Digital Marketing Consultation", "Get simple guidance on content, funnels, tools, and online visibility."]
];

export const featuredPosts: BlogPost[] = [
  {
    slug: "beginner-guide-to-ai-marketing",
    title: "A Beginner Guide to AI in Digital Marketing",
    category: "Artificial Intelligence",
    excerpt: "Simple ways beginners and small business owners can use AI tools for research, content, and planning.",
    date: "2026-01-10",
    readingTime: "5 min read",
    tags: ["AI", "Marketing"],
    status: "published"
  },
  {
    slug: "content-ideas-with-ai-tools",
    title: "How to Generate Better Content Ideas with AI Tools",
    category: "Content Creation",
    excerpt: "A practical workflow for turning rough ideas into useful blog, video, and social media topics.",
    date: "2026-01-18",
    readingTime: "4 min read",
    tags: ["Content", "AI Tools"],
    status: "published"
  },
  {
    slug: "ai-video-creation-workflow",
    title: "Simple AI Video Creation Workflow for Beginners",
    category: "AI Video Creation",
    excerpt: "From prompt to script to final video, this starter process keeps AI video creation organized.",
    date: "2026-01-26",
    readingTime: "6 min read",
    tags: ["Video", "Prompts"],
    status: "published"
  }
];

export const imagePlaceholders: GalleryItem[] = [
  {
    id: "image-1",
    title: "AI Portrait Placeholder",
    description: "Upload an original AI-generated portrait for Digital Bhanu.",
    category: "AI Portraits",
    tool: "Add AI tool name",
    prompt: "Add the exact prompt used to create this image.",
    createdAt: "2026-01-01"
  },
  {
    id: "image-2",
    title: "Marketing Creative Placeholder",
    description: "Reserve this space for an AI-generated marketing visual.",
    category: "Marketing Creatives",
    tool: "Add AI tool name",
    prompt: "Add the exact prompt used to create this image.",
    createdAt: "2026-01-01"
  },
  {
    id: "image-3",
    title: "Business Visual Placeholder",
    description: "Upload a clean AI-generated business image or dashboard visual.",
    category: "Business Visuals",
    tool: "Add AI tool name",
    prompt: "Add the exact prompt used to create this image.",
    createdAt: "2026-01-01"
  }
];

export const videoPlaceholders: VideoItem[] = [
  {
    id: "video-1",
    title: "AI Advertisement Placeholder",
    description: "Upload an AI-generated ad video or add a YouTube link.",
    category: "AI Advertisements",
    tool: "Add AI video tool name",
    prompt: "Add the prompt or script used to create this video.",
    createdAt: "2026-01-01",
    duration: "00:30",
    sourceType: "upload"
  },
  {
    id: "video-2",
    title: "Educational Video Placeholder",
    description: "Reserve this space for an AI-generated educational video.",
    category: "Educational Videos",
    tool: "Add AI video tool name",
    prompt: "Add the prompt or script used to create this video.",
    createdAt: "2026-01-01",
    duration: "01:00",
    sourceType: "youtube"
  }
];

export const projects: Project[] = [
  {
    title: "Personal Brand Website Placeholder",
    category: "Website",
    description: "A future project area for a website or landing page created by Digital Bhanu.",
    tools: ["Next.js", "Supabase", "Tailwind CSS"]
  },
  {
    title: "AI Image Campaign Placeholder",
    category: "AI Images",
    description: "A future project area for an AI-generated visual campaign.",
    tools: ["AI image tool", "Prompt writing"]
  },
  {
    title: "Social Media Plan Placeholder",
    category: "Social Media",
    description: "A future project area for a social media or digital marketing plan.",
    tools: ["Content planning", "Analytics"]
  }
];

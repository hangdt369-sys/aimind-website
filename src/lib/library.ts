import { articles, type Article } from "@/lib/articles";

export interface LibraryCategory {
  slug: string;
  label: string;
  vi: string;
  icon: string;
  color: string;
  description: string;
  tags: string[];
  keywords?: string[];
}

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    slug: "psychology",
    label: "Psychology",
    vi: "Tâm lý học",
    icon: "🧠",
    color: "#E85A71",
    description: "Tâm lý học ứng dụng, mô thức nội tâm, gắn bó, cảm xúc và các mối quan hệ.",
    tags: ["Mô thức", "Gắn bó", "Quan hệ", "Gia đình", "Ranh giới", "Cảm xúc", "Tự nhận thức", "Phân biệt mô thức"],
  },
  {
    slug: "neuroscience",
    label: "Neuroscience",
    vi: "Khoa học thần kinh",
    icon: "⚡",
    color: "#7C6FF7",
    description: "Não bộ, hệ thần kinh, tính dẻo thần kinh và cách chúng ảnh hưởng đến hành vi.",
    tags: ["Khoa học thần kinh"],
    keywords: ["não", "thần kinh", "dopamine", "neuroplasticity"],
  },
  {
    slug: "biology",
    label: "Biology",
    vi: "Sinh học",
    icon: "🧬",
    color: "#18B5B0",
    description: "Sinh học con người nhìn từ góc độ cơ thể, hành vi và cảm xúc.",
    tags: [],
    keywords: ["cơ thể", "sinh học", "giấc ngủ", "hormone", "dopamine"],
  },
  {
    slug: "evolution",
    label: "Evolution",
    vi: "Tiến hóa",
    icon: "🦎",
    color: "#E8925A",
    description: "Nguồn gốc tiến hóa của hành vi, phản ứng sinh tồn và nhu cầu gắn bó.",
    tags: ["Gắn bó"],
    keywords: ["tiến hóa", "sinh tồn", "bản năng"],
  },
  {
    slug: "philosophy",
    label: "Philosophy",
    vi: "Triết học",
    icon: "🔭",
    color: "#5B4FD4",
    description: "Những góc nhìn thực dụng về tự nhận thức, ranh giới, đạo đức và ý nghĩa.",
    tags: ["Tự nhận thức", "Ranh giới"],
  },
  {
    slug: "behavioral-science",
    label: "Behavioral Science",
    vi: "Khoa học hành vi",
    icon: "🔄",
    color: "#4CAF50",
    description: "Cách con người hình thành thói quen, lựa chọn và phản ứng trong đời sống.",
    tags: ["Hành vi", "Sự nghiệp"],
    keywords: ["hành vi", "thói quen", "quyết định"],
  },
  {
    slug: "critical-thinking",
    label: "Critical Thinking",
    vi: "Tư duy phản biện",
    icon: "⚖️",
    color: "#FF9800",
    description: "Nhận diện thiên kiến, phân biệt khái niệm và đánh giá bằng chứng rõ ràng hơn.",
    tags: ["Phân biệt mô thức", "Tự nhận thức"],
    keywords: ["thiên kiến", "phân biệt", "bằng chứng"],
  },
  {
    slug: "health",
    label: "Health",
    vi: "Sức khỏe",
    icon: "💚",
    color: "#66BB6A",
    description: "Sức khỏe tinh thần, cảm xúc và hệ thần kinh trong đời sống hằng ngày.",
    tags: ["Cảm xúc", "Khoa học thần kinh"],
    keywords: ["sức khỏe", "stress", "giấc ngủ", "căng thẳng"],
  },
  {
    slug: "ai-and-human",
    label: "AI & Human",
    vi: "AI & Con người",
    icon: "🤖",
    color: "#9C27B0",
    description: "AI đang thay đổi con người như thế nào — và con người nên thích nghi ra sao.",
    tags: [],
    keywords: ["trí tuệ nhân tạo", "công nghệ"],
  },
];

export function getLibraryCategory(slug: string) {
  return LIBRARY_CATEGORIES.find((category) => category.slug === slug);
}

function searchableText(article: Article) {
  return [article.title, article.excerpt, article.tag].join(" ").toLocaleLowerCase("vi");
}

export function getCategoryArticles(slug: string): Article[] {
  const category = getLibraryCategory(slug);
  if (!category) return [];

  return articles.filter((article) => {
    if (category.tags.includes(article.tag)) return true;
    const text = searchableText(article);
    return category.keywords?.some((keyword) => text.includes(keyword.toLocaleLowerCase("vi"))) ?? false;
  });
}

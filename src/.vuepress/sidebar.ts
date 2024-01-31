import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "技术博客",
      icon: "laptop-code",
      prefix: "code/",
      link: "code/",
      children: "structure",
    },
    {
      text: "生活杂谈",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});

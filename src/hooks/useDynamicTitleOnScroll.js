import { useEffect } from "react";

const useDynamicTitleOnScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            document.title = `Apurba Goon | ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useDynamicTitleOnScroll;

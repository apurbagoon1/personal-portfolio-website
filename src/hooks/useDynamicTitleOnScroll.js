import { useEffect } from "react";

const navItems = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const useDynamicTitleOnScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          document.title = `Apurba Goon | ${item.title}`;
          break;
        }
      }
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useDynamicTitleOnScroll;
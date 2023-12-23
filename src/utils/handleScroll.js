export default function handleScroll() {
  document.addEventListener("scroll", handleScroll, { passive: false });
  return () => {
    document.removeEventListener("scroll", handleScroll);
  };
}

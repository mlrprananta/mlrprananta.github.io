export default function Footer() {
  return (
    <footer className="p-10 w-full text-center text-xs text-white/50">
      Built with{" "}
      <a
        className="transition hover:text-blue-600 underline text-white"
        href="https://nextjs.org/"
      >
        Next.js
      </a>{" "}
      &{" "}
      <a
        className="transition hover:text-blue-600 underline text-white"
        href="https://tailwindcss.com/"
      >
        Tailwind CSS
      </a>{" "}
      <span className="text-white">🚀</span>
    </footer>
  );
}

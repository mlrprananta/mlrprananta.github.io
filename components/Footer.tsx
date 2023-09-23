export default function Footer() {
  return (
    <div className="border-t border-white/10 w-full p-10 text-center text-xs text-white/50">
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
    </div>
  );
}

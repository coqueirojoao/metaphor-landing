const sections = ["home", "about", "characters"];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md font-dancing">
      <nav className="max-w-6xl mx-auto px-4 flex justify-center items-center h-14">
        <ul className="flex gap-8 text-2xl font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors duration-300 py-1 text-gray-300 xl:hover:text-red-700"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

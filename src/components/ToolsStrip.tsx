import { tools } from "@/data/tools";

/**
 * Editorial logo-wand van de programma's waar wij mee werken. Logo's staan in
 * grijswaarden en kleuren in bij hover (één nette interactie); tools zonder
 * beschikbaar logo tonen wij als wordmark.
 */
export function ToolsStrip() {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-antraciet/15 sm:grid-cols-3 lg:grid-cols-4">
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="flex h-28 items-center justify-center border-b border-r border-antraciet/15 px-5"
        >
          {tool.logo ? (
            <img
              src={tool.logo}
              alt={tool.name}
              loading="lazy"
              className="h-9 w-auto max-w-[75%] opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ) : (
            <span className="text-center font-heading text-base font-semibold text-antraciet/55">{tool.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

import { Badge, Label } from "@ingenieria-digital/medicatel-ui/components";
import { js } from "js-beautify";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type Language = "javascript" | "typescript";

type CodeBlockProps = {
  title: string;
  code: string;
  language?: Language;
};

function formatWithJsBeautify(code: string): string {
  return js(code, {
    indent_size: 4,
    
    brace_style: "preserve-inline",
  });
}

export function CodeBlock(props: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const formattedCode = formatWithJsBeautify(props.code);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div>
      <Label className="text-white text-xl">{props.title}</Label>
      <div className="relative">
        <Badge
          className="absolute top-3 right-2 bg-slate-700 text-white cursor-pointer"
          onClick={handleCopy}
        >
          {copied ? "¡Copiado!" : "Copiar"}
        </Badge>

        <SyntaxHighlighter
          language={props.language || "typescript"}
          style={vscDarkPlus}
        >
          {formattedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

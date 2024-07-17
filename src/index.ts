export function computeEngineLatexToDesmosLatex(latex: string) {
  return latex
    .replace(/\(/g, "\\left(")
    .replace(/\)/g, "\\right)")
    .replace(/\\bot/g, "1\\lt0")
    .replace(/\\top/g, "1\\gt0")
    .replace(/\\lbrace/g, "\\left\\{")
    .replace(/\\rbrace/g, "\\right\\}")
    .replace(/\\exponentialE/g, " e")
    .replace(/\\l(floor|ceil)/g, "\\operatorname{$1}\\left(")
    .replace(/\\r(floor|ceil)/g, "\\right)")
    .replace(/\\emptyset/g, "\\left\\{\\right\\}")
    .replace(/\\mathrm{d}/g, "d")
    .replace(/\\operatorname{d}/g, "d")
    .replace(/\\left\\left/g, "\\left")
    .replace(/\\right\\right/g, "\\right")
    .replace(/\\!/g, "")
    .replace(/\\,/g, "");
}

// The article uses readable Unicode notation rather than TeX source.
// Give its fenced math the same build-time highlighting as programming languages.
export default {
  name: "swarm-math",
  scopeName: "source.swarm-math",
  patterns: [
    { name: "comment.line.math", match: "\\bper operation\\b" },
    { name: "entity.name.function.math", match: "\\b(?:Binomial|Uniform|Var|sd|E|P|C)\\b" },
    { name: "constant.numeric.math", match: "[0-9]+(?:[.,][0-9]+)*%?|[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]+" },
    { name: "keyword.operator.math", match: "[=+−×·/!~√∫⇒→⁻-]" },
    { name: "keyword.control.math", match: "\\b(?:for|AND)\\b" },
    { name: "variable.parameter.math", match: "\\b(?:[Kknp]|dp)\\b|[ᵏⁿ]" },
  ],
};

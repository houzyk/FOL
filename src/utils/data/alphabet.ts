import Alphabet from "../types/alphabet.types"

const alphabet: Alphabet = {
  existentialQuantifier: "_V_",
  universalQuantifier: "_E_",
  conjunction: "&",
  disjunction: "v",
  conditional: "->",
  biconditional: "<->",
  equality: "=",
  negation: "~",
  _true: "TRUE",
  _false: "FALSE",
  _function: getFunctions(),
  constants: getConstants(),
  variables: getVariables(),
  predicates: getPredicates(),
  parentheses: ["(", ")"]
}

function getFunctions(): Alphabet["_function"] {
  // todo
  return ["f"]
}

function getConstants(): Alphabet["constants"] {
  // todo
  return ["a"]
}

function getVariables (): Alphabet["variables"] {
  // todo
  return ["x"]
}

function getPredicates (): Alphabet["predicates"] {
  // todo
  return ["P"]
}

export default alphabet;

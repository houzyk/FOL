/**
 * @conjunction is the logical conjunction
 * @disjunction is the logical inclusive disjunction
 * @negation is the logical negation
 * @biconditional is the logical biconditional
 * @conditional is the logical material implication
 * @universalQuantifier == 'for all'
 * @exitentialQuantifier == 'for each'
 * @equality is strict equality
 * @_true is the True
 * @_false is the False
 * @_function is the set-theoretic function
 * @variables is the infinite set of variables
 * @predicates is the infinite set of properties
 * @constants is the infinite set of constants
*/

export default interface Alphabet {
  conjunction: string;
  disjunction: string;
  negation: string;
  biconditional: string;
  conditional: string;
  universalQuantifier: string;
  existentialQuantifier: string;
  equality: string;
  _true: string;
  _false: string;
  _function: string[];
  variables: string[];
  predicates: string[];
  constants: string[];
}

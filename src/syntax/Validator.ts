import alphabet from "../utils/data/alphabet";

class Validator {

  static validate (input: string): boolean {
    return this.checkInvalidSyntax(input);
  }

  private static checkInvalidSyntax (input: string): boolean {
    const filter: boolean[ ]= []
    const characters: string[] = input.split("");
    characters.forEach(c => {
      let condition: boolean =
                                c === alphabet._false ||
                                c === alphabet._true ||
                                c === alphabet.biconditional ||
                                c === alphabet.conditional ||
                                c === alphabet.universalQuantifier ||
                                c === alphabet.existentialQuantifier ||
                                c === alphabet.negation ||
                                c === alphabet.equality ||
                                c === alphabet.disjunction ||
                                c === alphabet.conjunction ||
                                alphabet._function.includes(c) ||
                                alphabet.variables.includes(c) ||
                                alphabet.predicates.includes(c) ||
                                alphabet._function.includes(c) ||
                                (c === "(" || c === ")" && alphabet.parentheses.includes(c));
      filter.push(condition);
    });
    return filter.every(f => f === true);
  }
}

export default Validator;

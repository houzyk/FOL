import { Parser } from "../src/syntax/Parser";

const parser: Parser = new Parser;

class Controller {
  constructor () {}

  parser (input: string) {
    parser.parse(input);
  }
}

export default Controller;

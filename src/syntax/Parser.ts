import Validator from "./Validator";

export class Parser {
  constructor() {
    // todo
  }

  public parse (input: string) {
    const commands: string[] = input.split(";");
    commands.forEach(command => Validator.validate(command));
  }
}

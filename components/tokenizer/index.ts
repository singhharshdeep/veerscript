import { AvailableTokens } from "./constants/veerScriptTokens";
import { Token, Tokenizer } from "./types";

export default class TokenizerImpl implements Tokenizer {
  private availableTokens: AvailableTokens;
  private string: String | undefined = undefined;
  private cursor: number;

  constructor(availableTokens: AvailableTokens) {
    this.cursor = 0;
    this.availableTokens = availableTokens;
  }

  initTokenizer(stringToTokenize: String) {
    this.string = stringToTokenize;
    this.cursor = 0;
  }

  isEOF(): boolean {
    if (!this.string) return true;

    return this.cursor === this.string.length;
  }

  hasMoreTokens(): boolean {
    if (!this.string) return true;

    return this.cursor < this.string.length;
  }

  getNextToken(): Token | null {
    // TODO(harsh): throw exception instead
    if (!this.string) return null;

    if (!this.hasMoreTokens()) return null;

    const string = this.string.slice(this.cursor);

    for (const { regex, tokenType } of this.availableTokens) {
      const tokenValue = this.matched(regex, string);

      if (tokenValue === null) {
        continue;
      }

      if (tokenType === null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: tokenValue,
      };
    }

    throw new SyntaxError(`Likhna nai aunda tenu????...Unexpected token: "${string[0]}"`);
  }

  matched(regex: RegExp, string: string) {
    // Attempt to match the regular expression against the string
    const matched = regex.exec(string);
  
    // If no match is found, return null
    if (matched === null) {
      return null;
    }
  
    // If a match is found, update the cursor position
    this.cursor += matched[0].length;
  
    // Return the matched substring
    return matched[0];
  }
}
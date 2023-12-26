import TokenizerImpl from '../../components/tokenizer';
import { availableTokens, TokenTypes } from '../../components/constants/veerScriptTokens';

const tokenizer = new TokenizerImpl(availableTokens);

test("getNextToken with hanji should return token with HANJI_TYPE", () => {
  tokenizer.initTokenizer(`hanji`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.HANJI_TYPE,
    value: "hanji",
  });
});

test("getNextToken with changa fer should return token with CHANGA_FER_TYPE", () => {
  tokenizer.initTokenizer(`changa fer`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.CHANGA_FER_TYPE,
    value: "changa fer",
  });
});

test("getNextToken with lab ju should return token with LAB_JU_TYPE", () => {
  tokenizer.initTokenizer(`lab ju`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.LAB_JU_TYPE,
    value: "lab ju",
  });
});

test("getNextToken with chal eda kr should return token with CHAL_EDA_KR_TYPE", () => {
  tokenizer.initTokenizer(`chal eda kr`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.CHAL_EDA_KR_TYPE,
    value: "chal eda kr",
  });
});

test("getNextToken with bol should return token with BOL_TYPE", () => {
  tokenizer.initTokenizer(`bol`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.BOL_TYPE,
    value: "bol",
  });
});

test("getNextToken with bhonk should return token with BHONK_TYPE", () => {
  tokenizer.initTokenizer(`bhonk`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.BHONK_TYPE,
    value: "bhonk",
  });
});

test("getNextToken with kakh nai should return token with KAKH_NAI_TYPE", () => {
  tokenizer.initTokenizer(`kakh nai`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.KAKH_NAI_TYPE,
    value: "kakh nai",
  });
});

test("getNextToken with je should return token with JE_TYPE", () => {
  tokenizer.initTokenizer(`je`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.JE_TYPE,
    value: "je",
  });
});

test("getNextToken with jan fer should return token with JAN_FER_TYPE", () => {
  tokenizer.initTokenizer(`jan fer`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.JAN_FER_TYPE,
    value: "jan fer",
  });
});

test("getNextToken with chal chadd should return token with CHAL_CHADD_TYPE", () => {
  tokenizer.initTokenizer(`chal chadd`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.CHAL_CHADD_TYPE,
    value: "chal chadd",
  });
});

test("getNextToken with tenu kinni vaar kiha should return token with TENU_KINNI_VAAR_KIHA_TYPE", () => {
  tokenizer.initTokenizer(`tenu kinni vaar kiha`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.TENU_KINNI_VAAR_KIHA_TYPE,
    value: `tenu kinni vaar kiha`,
  });
});

test("getNextToken with a string should return token with STRING_TYPE", () => {
  tokenizer.initTokenizer(`"test"`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.STRING_TYPE,
    value: `"test"`,
  });
});

test("getNextToken with empty string should return null", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.getNextToken()).toBeNull();
});

test("getNextToken with wrong string should throw an exception", () => {
  tokenizer.initTokenizer(`~~~`);

  expect(() => tokenizer.getNextToken()).toThrow(SyntaxError);
});

test("isEOF with normal string should return false", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.isEOF()).toStrictEqual(false);
});

test("isEOF with empty string should return true", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.isEOF()).toStrictEqual(true);
});

test("hasMoreTokens with normal string should return true", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(true);
});

test("hasMoreTokens with empty string should return false", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(false);
});
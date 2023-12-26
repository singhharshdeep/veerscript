export const TokenTypes = {
  NULL_TYPE: null,
  
  HANJI_TYPE: 'hanji',

  CHANGA_FER_TYPE: 'changa fer',

  LAB_JU_TYPE: 'lab ju',

  CHAL_EDA_KR_TYPE: 'chal eda kr',

  BOL_TYPE: 'bol',

  BHONK_TYPE: 'bhonk',

  KAKH_NAI_TYPE: 'kakh nai',

  JE_TYPE: 'je',

  JAN_FER_TYPE: 'jan fer',

  CHAL_CHADD_TYPE: 'chal chadd',

  TENU_KINNI_VAAR_KIHA_TYPE: 'tenu kinni vaar kiha',

  SEMI_COLON_TYPE: ';',

  OPEN_CURLY_BRACE_TYPE: '{',

  CLOSE_CURLY_BRACE_TYPE: '}',

  OPEN_PARANTHESIS_TYPE: '(',

  CLOSED_PARANTHESIS_TYPE: ')',

  COMMA_TYPE: ',',

  NUMBER_TYPE: 'NUMBER',

  IDENTIFIER_TYPE: 'IDENTIFIER',

  SIMPLE_ASSIGNMENT_TYPE: 'SIMPLE_ASSIGNMENT',

  COMPLEX_ASSIGNMENT_TYPE: 'COMPLEX_ASSIGNMENT',

  ADDITIVE_OPERATOR_TYPE: 'ADDITIVE_OPERATOR',

  MULTIPLICATION_OPERATOR_TYPE: 'MULTIPLICATION_OPERATOR',

  RELATIONAL_OPERATOR_TYPE: 'RELATIONAL_OPERATOR',

  EQUALITY_OPERATOR_TYPE: 'EQUALITY_OPERATOR',

  STRING_TYPE: 'STRING',

  BOOLEAN_TYPE: 'BOOLEAN',

  LOGICAL_AND: 'LOGICAL_AND',

  LOGICAL_OR: 'LOGICAL_OR',
};

export const availableTokens = [
  // whitespace
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSE_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARANTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARANTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  // keywords
  { regex: /^\bhanji\b/, tokenType: TokenTypes.HANJI_TYPE },
  { regex: /^\bchanga fer\b/, tokenType: TokenTypes.CHANGA_FER_TYPE },
  { regex: /^\blab ju\b/, tokenType: TokenTypes.LAB_JU_TYPE },
  { regex: /^\bbol\b/, tokenType: TokenTypes.BOL_TYPE },
  { regex: /^\bbhonk\b/, tokenType: TokenTypes.BHONK_TYPE },
  { regex: /^\bchal eda kr\b/, tokenType: TokenTypes.CHAL_EDA_KR_TYPE },
  { regex: /^\bje\b/, tokenType: TokenTypes.JE_TYPE },
  { regex: /^\bjan fer\b/, tokenType: TokenTypes.JAN_FER_TYPE },
  { regex: /^\bchal chadd\b/, tokenType: TokenTypes.CHAL_CHADD_TYPE },
  { regex: /^\bkakh nai\b/, tokenType: TokenTypes.KAKH_NAI_TYPE },
  { regex: /^\btenu kinni vari kiha\b/, tokenType: TokenTypes.TENU_KINNI_VAAR_KIHA_TYPE },

  // Boolean
  { regex: /^\batt\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bsira\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bghaint\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgal nai bni\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR_TYPE},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGNMENT_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGNMENT_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATION_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR_TYPE},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type AvailableTokens = typeof availableTokens;
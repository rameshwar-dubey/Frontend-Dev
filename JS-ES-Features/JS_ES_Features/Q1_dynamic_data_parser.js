'use strict';
// Q1 - Dynamic Data Parser
// Convert mixed API data to Number, Boolean, String forms.
// Skip invalid numbers and separate valid/invalid lists.
// All output via console.log().

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

(function parseData(){
  console.log('--- Q1 Dynamic Data Parser ---');
  const validNumbers = [];
  const invalidEntries = [];

  for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];
    // String conversion
    const asString = String(raw);
    // Boolean conversion (truthy/falsy)
    const asBoolean = Boolean(raw && raw !== 'false'); // treat 'false' string specially
    // Number conversion using Number() and parseFloat
    const num = Number(raw);
    const numParse = parseFloat(raw);

    const isValidNumber = !Number.isNaN(num) && typeof raw !== 'string' || (typeof raw === 'string' && /^\s*-?\d+(\.\d+)?\s*$/.test(raw));
    // Above regex accepts numeric strings like "25", "3.14" but rejects "100px" and " " and "NaN".

    if (isValidNumber) {
      const finalNumber = Number(raw);
      validNumbers.push({index:i, raw, number: finalNumber, boolean: asBoolean, string: asString});
    } else {
      invalidEntries.push({index:i, raw, asString, asBoolean, num, numParse});
    }
  }

  // Detailed report
  console.log('Valid numeric data (' + validNumbers.length + ' items):');
  validNumbers.forEach(v => console.log(`index:${v.index} raw:${v.raw} -> Number:${v.number}, Boolean:${v.boolean}, String:"${v.string}"`));

  console.log('Invalid entries (' + invalidEntries.length + ' items):');
  invalidEntries.forEach(v => console.log(`index:${v.index} raw:${v.raw} -> asString:"${v.asString}", asBoolean:${v.asBoolean}, Number():${v.num}, parseFloat():${v.numParse}`));
  console.log('--- End Q1 ---\n');
})();
'use strict';
// Q9 - JSON Audit: parse entries, detect missing keys, log errors w/ line numbers

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

(function jsonAudit(){
  console.log('--- Q9 JSON Audit ---');
  const clean = [];
  const errors = [];

  for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
      const parsed = JSON.parse(line);
      if (!parsed.user || parsed.age === undefined) {
        throw new Error('Missing keys');
      }
      // convert age to number and filter under 18
      parsed.age = Number(parsed.age);
      if (Number.isNaN(parsed.age)) throw new Error('Invalid age value');
      if (parsed.age < 18) {
        console.log(`User ${parsed.user} is under 18, filtered out.`);
      } else {
        clean.push(parsed);
      }
    } catch (err) {
      console.error(`Line ${i}: Error parsing/validating ->`, err.message);
      errors.push({line:i, raw:line, message:err.message});
    }
  }

  console.log('Clean entries:', clean);
  console.log('Errors:', errors);
  console.log('--- End Q9 ---\n');
})();
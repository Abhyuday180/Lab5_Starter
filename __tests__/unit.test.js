// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => 
{
  test('valid: (858) 555-1234', () => 
  {
    expect(isPhoneNumber('(858) 555-1234')).toBe(true);
  });
  
  test('valid: 858-555-1234', () => 
  {
    expect(isPhoneNumber('858-555-1234')).toBe(true);
  });
  
  test('invalid: no dashes', () => 
  {
    expect(isPhoneNumber('8585551234')).toBe(false);
  });
  
  test('invalid: missing dash after exchange', () => 
  {
    expect(isPhoneNumber('(858) 5551234')).toBe(false);
  });
});
describe('isEmail', () => 
{
  test('valid: simple address', () => 
  {
    expect(isEmail('user@example.com')).toBe(true);
  });

  test('valid: underscore & 3‑letter TLD', () => 
  {
    expect(isEmail('john_doe@domain.org')).toBe(true);
  });
  
  test('invalid: missing domain name', () => {
    expect(isEmail('user@.com')).toBe(false);
  });
  
  test('invalid: no TLD', () => {
    expect(isEmail('john@domain')).toBe(false);
  });
});

describe('isStrongPassword', () => 
{
  test('valid: 4‑char minimum', () => 
  {
    expect(isStrongPassword('Abc1')).toBe(true);
  });
  
  test('valid: letters, digits, underscore', () => 
  {
    expect(isStrongPassword('z_1234567')).toBe(true);
  });
  
  test('invalid: starts with digit', () => 
  {
    expect(isStrongPassword('1abcde')).toBe(false);
  });
  
  test('invalid: > 15 chars', () => 
  {
    expect(isStrongPassword('aVeryVeryLongPassword1')).toBe(false);
  });
});

describe('isDate', () => 
{
  test('valid: single‑digit month & day', () => 
  {
    expect(isDate('1/1/2020')).toBe(true);
  });

  test('valid: double‑digit month & day', () => 
  {
    expect(isDate('12/31/1999')).toBe(true);
  });

  test('invalid: dashes instead of slashes', () => 
  {
    expect(isDate('01-01-2020')).toBe(false);
  });
  
  test('invalid: 2‑digit year', () => 
    {
    expect(isDate('1/1/20')).toBe(false);
  });
});

describe('isHexColor', () => 
{
  test('valid: 3‑digit hex with #', () => 
  {
    expect(isHexColor('#ABC')).toBe(true);
  });
  
  test('valid: 6‑digit hex w/out #', () => 
  {
    expect(isHexColor('abcdef')).toBe(true);
  });
  
  test('invalid: 4‑digit code', () => 
  {
    expect(isHexColor('#FFFF')).toBe(false);
  });
  
  test('invalid: non‑hex chars', () => 
  {
    expect(isHexColor('#GGG')).toBe(false);
  });
});

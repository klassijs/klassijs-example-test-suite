// Load page objects with error handling
let ocr, assertion, search, visualValidation, accessibility;

try {
  ocr = require('../page-objects/ocr');
} catch (error) {
  console.warn('Failed to load OCR page object:', error.message);
  ocr = null;
}

try {
  assertion = require('../page-objects/assertion');
} catch (error) {
  console.warn('Failed to load assertion page object:', error.message);
  assertion = null;
}

try {
  search = require('../page-objects/search');
} catch (error) {
  console.warn('Failed to load search page object:', error.message);
  search = null;
}

try {
  visualValidation = require('../page-objects/visualValidation');
} catch (error) {
  console.warn('Failed to load visual validation page object:', error.message);
  visualValidation = null;
}

try {
  accessibility = require('../page-objects/accessibility');
} catch (error) {
  console.warn('Failed to load accessibility page object:', error.message);
  accessibility = null;
}

const pageObjectMap = {
  '@ocr': ocr,
  '@search': search,
  '@assert': assertion,
  '@a11y': accessibility,
  '@visual': visualValidation
};

module.exports = pageObjectMap;

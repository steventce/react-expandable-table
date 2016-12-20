// Setup a DOM for React to operate on

import jsdom from 'jsdom';

const documentHtml = '<!doctype html><html><body></body></html>';

global.document = jsdom.jsdom(documentHtml);
global.window = document.defaultView;
global.navigator = window.navigator;

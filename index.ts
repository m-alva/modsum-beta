import "reflect-metadata";
import { testModel } from './src/test-web/test-model';
import { testMeta } from './src/test-web/test-meta';

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const json = JSON.stringify({
  TestMeta: testMeta(),
  TestModel: testModel()
},null, 4);
appDiv.innerHTML = `<pre>${json}</prev>`;
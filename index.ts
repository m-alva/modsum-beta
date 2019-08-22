import "reflect-metadata";
import { testModel } from './src/test/test-model';
import { testMeta } from './stc/test/test-meta';

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const json = JSON.stringify({
  TestMeta: testMeta(),
  TestModel: testModel()
},null, 4);
appDiv.innerHTML = `<pre>${json}</prev>`;
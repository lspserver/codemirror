import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';
import 'codemirror/theme/idea.css';

import 'lsp-editor-adapter/lib/codemirror-lsp.css';
import { LspWsConnection, CodeMirrorAdapter } from 'lsp-editor-adapter';

let sample = '';

let modes = {
  python: 'python',
};

let documents = {
  python: 'file.py',
};

let editor = CodeMirror(document.querySelector('.editor'), {
  theme: 'idea',
  lineNumbers: true,
  value: sample,
  gutters: ['CodeMirror-lsp'],
});

document.querySelector('select').addEventListener('change', () => {
  switchSources();
});

let connection;
let adapter;

function switchSources() {
  if (connection) {
    connection.close();
  }
  if (adapter) {
    adapter.remove();
  }

  let value = document.querySelector('select').value.toLowerCase();

  if (typeof modes[value] !== "undefined") {
    editor.setOption('mode', modes[value]);
  }

  editor.setValue('');

  connection = new LspWsConnection({
    serverUri: 'ws://127.0.0.1:49093/' + value,
    languageId: value,
    rootUri: 'file:///usr/src/app/sources',
    documentUri: 'file:///usr/src/app/sources/' + documents[value],
    documentText: () => editor.getValue(),
  }).connect(new WebSocket('ws://127.0.0.1:49093/' + value));

  adapter = new CodeMirrorAdapter(connection, {
    quickSuggestionsDelay: 10,
  }, editor);
}

switchSources();

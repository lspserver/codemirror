# codemirror

[![Build Status](https://github.com/lspserver/codemirror/workflows/CI/badge.svg?branch=main&event=push)](https://github.com/lspserver/codemirror/actions?query=workflow%3ACI)
[![codecov](https://codecov.io/gh/lspserver/codemirror/branch/main/graph/badge.svg?token=FS77A6KD37)](https://codecov.io/gh/lspserver/codemirror)
[![License](https://img.shields.io/github/license/lspserver/codemirror.svg?color=brightgreen)](https://github.com/lspserver/codemirror/blob/main/LICENSE)
[![Tag](https://img.shields.io/github/tag/lspserver/codemirror.svg?color=brightgreen)](https://github.com/lspserver/codemirror/tags)
[![Gitter chat](https://badges.gitter.im/craftslab/lspserver.png)](https://gitter.im/craftslab/lspserver)



## Introduction

*codemirror* is the client of [lspserver](https://github.com/lspserver) written in JavaScript.



## Run

```bash
# Set proxy
yarn config set proxy http://proxy_host:port
yarn config set https-proxy https://proxy_host:port

# Run client
# http://127.0.0.1:4000
git clone https://github.com/lspserver/codemirror.git
cd codemirror
yarn && yarn run start
```



## Docker

```bash
git clone https://github.com/lspserver/codemirror.git

cd codemirror
docker build --no-cache -f Dockerfile -t ghcr.io/lspserver/codemirror:latest .
docker run --rm -p 4000:4000 ghcr.io/lspserver/codemirror:latest
```



## License

Project License can be found [here](LICENSE).



## Reference

- [codemirror-lsp-example](https://github.com/wylieconlon/codemirror-lsp-example)
- [lsp-editor-adapter-example](https://github.com/wylieconlon/lsp-editor-adapter/tree/master/example)

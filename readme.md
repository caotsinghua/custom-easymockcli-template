> .easy-mock.js
```
module.exports = {
  output: "api",
  template: "caotsinghua/custom-easymockcli-template",
  projects: [
    {
      id: "58fef6ac5e43ae5dbea5eb53",
      name: "demo"
    }
  ]
};

```
[详细配置](https://easy-mock.github.io/easy-mock-cli/#/?id=%e9%85%8d%e7%bd%ae%e9%a1%b9)

> api/demo/index.js

```
/** g */
export const getGById = (opts) =>
  instance({
    method: 'get',
    url: convertRESTAPI('/g/{id}', opts),
    opts: opts
  });

/** hh */
export const postTet = (opts) =>
  instance({
    method: 'post',
    url:  '/tet',
    opts: opts
  });
/** 支持接口代理的mock，试试在 url 上加 ?s={数字} */
export const getProxy = (opts) =>
  instance({
    method: 'get',
    url:  '/proxy',
    opts: opts
  });

/** 带随机数据的mock */
export const getMock = (opts) =>
  instance({
    method: 'get',
    url:  '/mock',
    opts: opts
  });

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
export const getQuery = (opts) =>
  instance({
    method: 'get',
    url:  '/query',
    opts: opts
  });

```

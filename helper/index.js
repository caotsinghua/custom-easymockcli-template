const _ =require('lodash');
var convertUrl = exports.convertUrl = function (url) {
    // /restful/:id/:list/{id} -> restful_by_id_list_by_id
    // /restful/:id/:list/{id}.json -> restful_by_id_list_by_id
    const _url=url.replace(/}/g,'').replace(/:|{/g,'by/').split('/').filter(v=>!!v).join('-');
    return _url.split('.')[0];
  };

  exports.convertMethod = function (mock) {
    // 防止重名
    // restful_id_list_id => restful_id_list_id_g
    // or
    // restful_id_list_id => restful_id_list_id_p
    return _.camelCase( mock.method.toLowerCase()+'_'+convertUrl(mock.url));
  };

  exports.joinUrl = function () {
    // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
    var url = [].slice.call(arguments, 0).join('/');
    url = url.replace(/:\//g, '://');
    url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/');
    return url;
  }

  exports.isREST = function (url) {
    return /(:|{|})/.test(url);
  }

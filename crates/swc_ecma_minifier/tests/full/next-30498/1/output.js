class a extends BaseSchema{matches(d,a){let e=!1,b,c;return a&&("object"==typeof a?{excludeEmptyString:e=!1,message:b,name:c}=a:b=a),this.test({name:c||"matches",message:b||string.matches,params:{regex:d},test:a=>isAbsent(a)||""===a&&e|| -1!==a.search(d)})}}(function(){return new a()}).prototype=a.prototype

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../util/util.js');

var _util2 = _interopRequireDefault(_util);

var _search = require('./../../components/search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Goods = function (_wepy$page) {
    _inherits(Goods, _wepy$page);

    function Goods() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Goods);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Goods.__proto__ || Object.getPrototypeOf(Goods)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '商品'
        }, _this.components = {
            search: _search2.default
        }, _this.data = {
            curShow: 0,
            curBlock: '全部',
            goodsList1: [{
                "picture": "../../images/adver1.png",
                "explain": "1875 郎牌郎酒53度老郎酒精品",
                "price": "￥23.00~￥38.00",
                "count": 243
            }],
            goodsList2: [{
                "picture": "../../images/adver1.png",
                "explain": "姜小白 郎牌郎酒53度老郎酒精品",
                "price": "￥33.00~￥38.00",
                "count": 4243
            }, {
                "picture": "../../images/example.png",
                "explain": "江小白 郎牌郎酒53度老郎酒精品",
                "price": "￥15.00~￥28.00",
                "count": 2343
            }, {
                "picture": "../../images/example.png",
                "explain": "郎酒 郎牌郎酒53度老郎酒精品",
                "price": "￥25.00~￥28.00",
                "count": 443
            }],
            goodsList3: [{
                "picture": "../../images/adver1.png",
                "explain": "清酒 郎牌郎酒53度老郎酒精品",
                "price": "￥33.00~￥38.00",
                "count": 2243
            }, {
                "picture": "../../images/example.png",
                "explain": "老白干 郎牌郎酒53度老郎酒精品",
                "price": "￥15.00~￥28.00",
                "count": 1343
            }]
        }, _this.methods = {
            toBlock: function toBlock(arg) {
                this.curBlock = arg;
                if (arg == '全部') {
                    this.curShow = 0;
                } else if (arg == '婚庆类') {
                    this.curShow = 1;
                } else if (arg == '醇香类') {
                    this.curShow = 2;
                } else if (arg == '浓香类') {
                    this.curShow = 3;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Goods, [{
        key: "onLoad",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(option) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Goods;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Goods , 'pages/goods/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkdvb2RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJzZWFyY2giLCJkYXRhIiwiY3VyU2hvdyIsImN1ckJsb2NrIiwiZ29vZHNMaXN0MSIsImdvb2RzTGlzdDIiLCJnb29kc0xpc3QzIiwibWV0aG9kcyIsInRvQmxvY2siLCJhcmciLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7OztBQUNHOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBTztBQUNIQyxvQ0FBd0I7QUFEckIsUyxRQUdQQyxVLEdBQWE7QUFDWEM7QUFEVyxTLFFBR2JDLEksR0FBTztBQUNOQyxxQkFBUyxDQURIO0FBRU5DLHNCQUFVLElBRko7QUFHSEMsd0JBQVksQ0FDWDtBQUNDLDJCQUFXLHlCQURaO0FBRUMsMkJBQVcsbUJBRlo7QUFHQyx5QkFBUyxlQUhWO0FBSUMseUJBQVM7QUFKVixhQURXLENBSFQ7QUFXSEMsd0JBQVksQ0FDWDtBQUNDLDJCQUFXLHlCQURaO0FBRUMsMkJBQVcsa0JBRlo7QUFHQyx5QkFBUyxlQUhWO0FBSUMseUJBQVM7QUFKVixhQURXLEVBT1g7QUFDQywyQkFBVywwQkFEWjtBQUVDLDJCQUFXLGtCQUZaO0FBR0MseUJBQVMsZUFIVjtBQUlDLHlCQUFTO0FBSlYsYUFQVyxFQWFYO0FBQ0MsMkJBQVcsMEJBRFo7QUFFQywyQkFBVyxpQkFGWjtBQUdDLHlCQUFTLGVBSFY7QUFJQyx5QkFBUztBQUpWLGFBYlcsQ0FYVDtBQStCSEMsd0JBQVksQ0FDWDtBQUNDLDJCQUFXLHlCQURaO0FBRUMsMkJBQVcsaUJBRlo7QUFHQyx5QkFBUyxlQUhWO0FBSUMseUJBQVM7QUFKVixhQURXLEVBT1g7QUFDQywyQkFBVywwQkFEWjtBQUVDLDJCQUFXLGtCQUZaO0FBR0MseUJBQVMsZUFIVjtBQUlDLHlCQUFTO0FBSlYsYUFQVztBQS9CVCxTLFFBOENQQyxPLEdBQVU7QUFDTkMsbUJBRE0sbUJBQ0dDLEdBREgsRUFDUTtBQUNiLHFCQUFLTixRQUFMLEdBQWdCTSxHQUFoQjtBQUNBLG9CQUFJQSxPQUFPLElBQVgsRUFBZ0I7QUFDZix5QkFBS1AsT0FBTCxHQUFlLENBQWY7QUFDQSxpQkFGRCxNQUVNLElBQUlPLE9BQU8sS0FBWCxFQUFrQjtBQUN2Qix5QkFBS1AsT0FBTCxHQUFlLENBQWY7QUFDQSxpQkFGSyxNQUVBLElBQUlPLE9BQU8sS0FBWCxFQUFrQjtBQUN2Qix5QkFBS1AsT0FBTCxHQUFlLENBQWY7QUFDQSxpQkFGSyxNQUVBLElBQUlPLE9BQU8sS0FBWCxFQUFrQjtBQUN2Qix5QkFBS1AsT0FBTCxHQUFlLENBQWY7QUFDQTtBQUNEO0FBWkssUzs7Ozs7O21GQWNHUSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuRWtCLGVBQUtDLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgdXRpbCBmcm9tIFwiLi4vLi4vdXRpbC91dGlsXCJcclxuICAgIGltcG9ydCBTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCJcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2RzIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4EnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICBzZWFyY2g6IFNlYXJjaFxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgIFx0Y3VyU2hvdzogMCxcclxuICAgICAgICBcdGN1ckJsb2NrOiAn5YWo6YOoJyxcclxuICAgICAgICAgICAgZ29vZHNMaXN0MTogW1xyXG4gICAgICAgICAgICBcdHtcclxuICAgICAgICAgICAgXHRcdFwicGljdHVyZVwiOiBcIi4uLy4uL2ltYWdlcy9hZHZlcjEucG5nXCIsXHJcbiAgICAgICAgICAgIFx0XHRcImV4cGxhaW5cIjogXCIxODc1IOmDjueJjOmDjumFkjUz5bqm6ICB6YOO6YWS57K+5ZOBXCIsXHJcbiAgICAgICAgICAgIFx0XHRcInByaWNlXCI6IFwi77+lMjMuMDB+77+lMzguMDBcIixcclxuICAgICAgICAgICAgXHRcdFwiY291bnRcIjogMjQzXHJcbiAgICAgICAgICAgIFx0fVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnb29kc0xpc3QyOiBbXHJcbiAgICAgICAgICAgIFx0e1xyXG4gICAgICAgICAgICBcdFx0XCJwaWN0dXJlXCI6IFwiLi4vLi4vaW1hZ2VzL2FkdmVyMS5wbmdcIixcclxuICAgICAgICAgICAgXHRcdFwiZXhwbGFpblwiOiBcIuWnnOWwj+eZvSDpg47niYzpg47phZI1M+W6puiAgemDjumFkueyvuWTgVwiLFxyXG4gICAgICAgICAgICBcdFx0XCJwcmljZVwiOiBcIu+/pTMzLjAwfu+/pTM4LjAwXCIsXHJcbiAgICAgICAgICAgIFx0XHRcImNvdW50XCI6IDQyNDNcclxuICAgICAgICAgICAgXHR9LFxyXG4gICAgICAgICAgICBcdHtcclxuICAgICAgICAgICAgXHRcdFwicGljdHVyZVwiOiBcIi4uLy4uL2ltYWdlcy9leGFtcGxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBcdFx0XCJleHBsYWluXCI6IFwi5rGf5bCP55m9IOmDjueJjOmDjumFkjUz5bqm6ICB6YOO6YWS57K+5ZOBXCIsXHJcbiAgICAgICAgICAgIFx0XHRcInByaWNlXCI6IFwi77+lMTUuMDB+77+lMjguMDBcIixcclxuICAgICAgICAgICAgXHRcdFwiY291bnRcIjogMjM0M1xyXG4gICAgICAgICAgICBcdH0sXHJcbiAgICAgICAgICAgIFx0e1xyXG4gICAgICAgICAgICBcdFx0XCJwaWN0dXJlXCI6IFwiLi4vLi4vaW1hZ2VzL2V4YW1wbGUucG5nXCIsXHJcbiAgICAgICAgICAgIFx0XHRcImV4cGxhaW5cIjogXCLpg47phZIg6YOO54mM6YOO6YWSNTPluqbogIHpg47phZLnsr7lk4FcIixcclxuICAgICAgICAgICAgXHRcdFwicHJpY2VcIjogXCLvv6UyNS4wMH7vv6UyOC4wMFwiLFxyXG4gICAgICAgICAgICBcdFx0XCJjb3VudFwiOiA0NDNcclxuICAgICAgICAgICAgXHR9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdvb2RzTGlzdDM6IFtcclxuICAgICAgICAgICAgXHR7XHJcbiAgICAgICAgICAgIFx0XHRcInBpY3R1cmVcIjogXCIuLi8uLi9pbWFnZXMvYWR2ZXIxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcdFx0XCJleHBsYWluXCI6IFwi5riF6YWSIOmDjueJjOmDjumFkjUz5bqm6ICB6YOO6YWS57K+5ZOBXCIsXHJcbiAgICAgICAgICAgIFx0XHRcInByaWNlXCI6IFwi77+lMzMuMDB+77+lMzguMDBcIixcclxuICAgICAgICAgICAgXHRcdFwiY291bnRcIjogMjI0M1xyXG4gICAgICAgICAgICBcdH0sXHJcbiAgICAgICAgICAgIFx0e1xyXG4gICAgICAgICAgICBcdFx0XCJwaWN0dXJlXCI6IFwiLi4vLi4vaW1hZ2VzL2V4YW1wbGUucG5nXCIsXHJcbiAgICAgICAgICAgIFx0XHRcImV4cGxhaW5cIjogXCLogIHnmb3lubIg6YOO54mM6YOO6YWSNTPluqbogIHpg47phZLnsr7lk4FcIixcclxuICAgICAgICAgICAgXHRcdFwicHJpY2VcIjogXCLvv6UxNS4wMH7vv6UyOC4wMFwiLFxyXG4gICAgICAgICAgICBcdFx0XCJjb3VudFwiOiAxMzQzXHJcbiAgICAgICAgICAgIFx0fVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRvQmxvY2sgKGFyZykge1xyXG4gICAgICAgICAgICBcdHRoaXMuY3VyQmxvY2sgPSBhcmdcclxuICAgICAgICAgICAgXHRpZiAoYXJnID09ICflhajpg6gnKXtcclxuICAgICAgICAgICAgXHRcdHRoaXMuY3VyU2hvdyA9IDBcclxuICAgICAgICAgICAgXHR9ZWxzZSBpZiAoYXJnID09ICflqZrluobnsbsnKSB7XHJcbiAgICAgICAgICAgIFx0XHR0aGlzLmN1clNob3cgPSAxXHJcbiAgICAgICAgICAgIFx0fWVsc2UgaWYgKGFyZyA9PSAn6YaH6aaZ57G7Jykge1xyXG4gICAgICAgICAgICBcdFx0dGhpcy5jdXJTaG93ID0gMlxyXG4gICAgICAgICAgICBcdH1lbHNlIGlmIChhcmcgPT0gJ+a1k+mmmeexuycpIHtcclxuICAgICAgICAgICAgXHRcdHRoaXMuY3VyU2hvdyA9IDNcclxuICAgICAgICAgICAgXHR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgb25Mb2FkKG9wdGlvbil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICB9XHJcbiJdfQ==
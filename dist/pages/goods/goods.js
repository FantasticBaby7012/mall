"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../util/util.js');

var _util2 = _interopRequireDefault(_util);

var _toolbar = require('./../../components/toolbar.js');

var _toolbar2 = _interopRequireDefault(_toolbar);

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
            toolbar: _toolbar2.default
        }, _this.data = {
            isSearch: false,
            hasMore: false
        }, _this.methods = {
            showSearch: function showSearch() {
                // this.isSearch = true
                wx.navigateTo({
                    url: 'search'
                });
            },
            loadMore: function loadMore() {
                this.hasMore = true;
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Goods , 'pages/goods/goods'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbIkdvb2RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b29sYmFyIiwiZGF0YSIsImlzU2VhcmNoIiwiaGFzTW9yZSIsIm1ldGhvZHMiLCJzaG93U2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwibG9hZE1vcmUiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7OztBQUNHOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBTztBQUNIQyxvQ0FBd0I7QUFEckIsUyxRQUdQQyxVLEdBQWE7QUFDWEM7QUFEVyxTLFFBR2JDLEksR0FBTztBQUNIQyxzQkFBVSxLQURQO0FBRUhDLHFCQUFTO0FBRk4sUyxRQUlQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ1E7QUFDVjtBQUNBQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1pDLHlCQUFLO0FBRE8saUJBQWQ7QUFHSCxhQU5LO0FBT05DLG9CQVBNLHNCQU9NO0FBQ1IscUJBQUtOLE9BQUwsR0FBZSxJQUFmO0FBQ0g7QUFUSyxTOzs7Ozs7bUZBV0dPLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRCa0IsZUFBS0MsSTs7a0JBQW5CZixLIiwiZmlsZSI6Imdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0aW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCB1dGlsIGZyb20gXCIuLi8uLi91dGlsL3V0aWxcIlxyXG4gICAgaW1wb3J0IHRvb2xCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhclwiXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kcyBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOBJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgdG9vbGJhcjogdG9vbEJhclxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpc1NlYXJjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc01vcmU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHNob3dTZWFyY2ggKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc1NlYXJjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkTW9yZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc01vcmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgb25Mb2FkKG9wdGlvbil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../util/util.js');

var _util2 = _interopRequireDefault(_util);

var _counter = require('./../../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_wepy$page) {
    _inherits(Cart, _wepy$page);

    function Cart() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Cart);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '购物车'
        }, _this.$props = { "counter1": { "xmlns:v-bind": "", "v-bind:cartNum.once": "cartNum" }, "counter2": { "v-bind:cartNum.once": "cartNum" } }, _this.$events = {}, _this.components = {
            counter1: _counter2.default,
            counter2: _counter2.default
        }, _this.data = {
            cartNum: 1,
            iconType: 'circle'
        }, _this.methods = {
            change: function change() {
                if (this.iconType == 'circle') {
                    this.iconType = 'success';
                } else {
                    this.iconType = 'circle';
                }
            }
        }, _this.event = {}, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Cart, [{
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

    return Cart;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Cart , 'pages/cart/cart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJkYXRhIiwiY2FydE51bSIsImljb25UeXBlIiwibWV0aG9kcyIsImNoYW5nZSIsImV2ZW50Iiwid2F0Y2giLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLE0sR0FBTztBQUNIQyxvQ0FBd0I7QUFEckIsUyxRQUdSQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQVosRUFBZ0UsWUFBVyxFQUFDLHVCQUFzQixTQUF2QixFQUEzRSxFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTEMsdUNBREs7QUFFTEM7QUFGSyxTLFFBSU5DLEksR0FBTztBQUNIQyxxQkFBUyxDQUROO0FBRUhDLHNCQUFVO0FBRlAsUyxRQUlQQyxPLEdBQVU7QUFDVEMsa0JBRFMsb0JBQ0M7QUFDVCxvQkFBRyxLQUFLRixRQUFMLElBQWlCLFFBQXBCLEVBQThCO0FBQzdCLHlCQUFLQSxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsaUJBRkQsTUFFSztBQUNKLHlCQUFLQSxRQUFMLEdBQWdCLFFBQWhCO0FBQ0E7QUFDRDtBQVBRLFMsUUFTVkcsSyxHQUFRLEUsUUFHUkMsSyxHQUFRLEU7Ozs7OzttRkFHS0MsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0JpQixlQUFLQyxJOztrQkFBbEJoQixJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgdXRpbCBmcm9tIFwiLi4vLi4vdXRpbC91dGlsXCJcclxuICAgIGltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvdW50ZXJcIlxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJ1xyXG4gICAgICAgIH1cclxuICAgICAgICRwcm9wcyA9IHtcImNvdW50ZXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjYXJ0TnVtLm9uY2VcIjpcImNhcnROdW1cIn0sXCJjb3VudGVyMlwiOntcInYtYmluZDpjYXJ0TnVtLm9uY2VcIjpcImNhcnROdW1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIFx0Y291bnRlcjE6IENvdW50ZXIsXHJcbiAgICAgICAgXHRjb3VudGVyMjogQ291bnRlclxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYXJ0TnVtOiAxLFxyXG4gICAgICAgICAgICBpY29uVHlwZTogJ2NpcmNsZSdcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBcdGNoYW5nZSAoKSB7XHJcbiAgICAgICAgXHRcdGlmKHRoaXMuaWNvblR5cGUgPT0gJ2NpcmNsZScpIHtcclxuICAgICAgICBcdFx0XHR0aGlzLmljb25UeXBlID0gJ3N1Y2Nlc3MnXHJcbiAgICAgICAgXHRcdH1lbHNle1xyXG4gICAgICAgIFx0XHRcdHRoaXMuaWNvblR5cGUgPSAnY2lyY2xlJ1xyXG4gICAgICAgIFx0XHR9XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50ID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvbkxvYWQob3B0aW9uKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgIH1cclxuIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../../util/util.js');

var _util2 = _interopRequireDefault(_util);

var _swiper = require('./../../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
    _inherits(Detail, _wepy$page);

    function Detail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Detail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '一九八五年武当酒海原浆...'
        }, _this.$props = { "swiper": { "xmlns:v-bind": "", "v-bind:img.once": "imgUrls" } }, _this.$events = {}, _this.components = {
            swiper: _swiper2.default
        }, _this.data = {
            imgUrls: ['../../images/banner2.png', '../../images/banner2.png', '../../images/banner2.png']
        }, _this.methods = {
            toHome: function toHome() {
                wx.redirectTo({
                    url: '../home/index'
                });
            }
        }, _this.event = {
            scroll: function scroll(e) {
                console.log(e);
            }
        }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Detail, [{
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

    return Detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/goods/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzd2lwZXIiLCJkYXRhIiwiaW1nVXJscyIsIm1ldGhvZHMiLCJ0b0hvbWUiLCJ3eCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJldmVudCIsInNjcm9sbCIsImUiLCJjb25zb2xlIiwibG9nIiwid2F0Y2giLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLE0sR0FBTztBQUNIQyxvQ0FBd0I7QUFEckIsUyxRQUdSQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFNBQXJDLEVBQVYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FDUCwwQkFETyxFQUVQLDBCQUZPLEVBR1AsMEJBSE87QUFETixTLFFBT1BDLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDSTtBQUNOQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSDtBQUxLLFMsUUFPVkMsSyxHQUFRO0FBQ0pDLGtCQURJLGtCQUNJQyxDQURKLEVBQ087QUFDUEMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBSEcsUyxRQUtSRyxLLEdBQVEsRTs7Ozs7O21GQUdLQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQm1CLGVBQUtDLEk7O2tCQUFwQnJCLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHV0aWwgZnJvbSBcIi4uLy4uL3V0aWwvdXRpbFwiXHJcbiAgICBpbXBvcnQgU3dpcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N3aXBlclwiXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4gOS5neWFq+S6lOW5tOatpuW9k+mFkua1t+WOn+a1hi4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAkcHJvcHMgPSB7XCJzd2lwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmltZy5vbmNlXCI6XCJpbWdVcmxzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgc3dpcGVyOiBTd2lwZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaW1nVXJsczogW1xyXG4gICAgICAgICAgICAgICcuLi8uLi9pbWFnZXMvYmFubmVyMi5wbmcnLFxyXG4gICAgICAgICAgICAgICcuLi8uLi9pbWFnZXMvYmFubmVyMi5wbmcnLFxyXG4gICAgICAgICAgICAgICcuLi8uLi9pbWFnZXMvYmFubmVyMi5wbmcnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9Ib21lICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL2hvbWUvaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50ID0ge1xyXG4gICAgICAgICAgICBzY3JvbGwgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvbkxvYWQob3B0aW9uKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgIH1cclxuIl19
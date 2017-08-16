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

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '镇酒商城'
        }, _this.$props = { "swiper": { "xmlns:v-bind": "", "v-bind:img.once": "imgUrls" } }, _this.$events = {}, _this.components = {
            swiper: _swiper2.default
        }, _this.data = {
            scrollTop: 0,
            imgUrls: ['../../images/banner1.png', '../../images/banner1.png', '../../images/banner1.png']
        }, _this.methods = {
            toDetail: function toDetail() {
                wx.navigateTo({
                    url: '../goods/detail'
                });
            },
            toTop: function toTop() {
                console.log("ok");
                this.scrollTop = 0;
            },
            scroll: function scroll(e) {
                console.log(this.scrollTop);
            },
            lower: function lower(e) {
                console.log('lower');
            }
        }, _this.event = {
            scroll: function scroll(e) {
                console.log(e);
            }
        }, _this.watch = {
            scroll: function scroll(e) {
                console.log(e);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
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

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3dpcGVyIiwiZGF0YSIsInNjcm9sbFRvcCIsImltZ1VybHMiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1RvcCIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGwiLCJlIiwibG93ZXIiLCJldmVudCIsIndhdGNoIiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQU87QUFDSEMsb0NBQXdCO0FBRHJCLFMsUUFHUkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixTQUFyQyxFQUFWLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNKQztBQURJLFMsUUFHTkMsSSxHQUFPO0FBQ0hDLHVCQUFXLENBRFI7QUFFSEMscUJBQVMsQ0FDUCwwQkFETyxFQUVQLDBCQUZPLEVBR1AsMEJBSE87QUFGTixTLFFBUVBDLE8sR0FBVTtBQUNOQyxvQkFETSxzQkFDTTtBQUNSQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1pDLHlCQUFLO0FBRE8saUJBQWQ7QUFHSCxhQUxLO0FBTU5DLGlCQU5NLG1CQU1HO0FBQ0xDLHdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLHFCQUFLVCxTQUFMLEdBQWlCLENBQWpCO0FBQ0gsYUFUSztBQVVOVSxrQkFWTSxrQkFVRUMsQ0FWRixFQVVLO0FBQ1BILHdCQUFRQyxHQUFSLENBQVksS0FBS1QsU0FBakI7QUFDSCxhQVpLO0FBYU5ZLGlCQWJNLGlCQWFDRCxDQWJELEVBYUk7QUFDTkgsd0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7QUFmSyxTLFFBaUJWSSxLLEdBQVE7QUFDSkgsa0JBREksa0JBQ0lDLENBREosRUFDTztBQUNQSCx3QkFBUUMsR0FBUixDQUFZRSxDQUFaO0FBQ0g7QUFIRyxTLFFBS1JHLEssR0FBUTtBQUNKSixrQkFESSxrQkFDSUMsQ0FESixFQUNPO0FBQ1BILHdCQUFRQyxHQUFSLENBQVlFLENBQVo7QUFDSDtBQUhHLFM7Ozs7OzttRkFLS0ksTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUNrQixlQUFLQyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHV0aWwgZnJvbSBcIi4uLy4uL3V0aWwvdXRpbFwiXHJcbiAgICBpbXBvcnQgU3dpcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N3aXBlclwiXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZWH6YWS5ZWG5Z+OJ1xyXG4gICAgICAgIH1cclxuICAgICAgICRwcm9wcyA9IHtcInN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aW1nLm9uY2VcIjpcImltZ1VybHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgc3dpcGVyOiBTd2lwZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICBpbWdVcmxzOiBbXHJcbiAgICAgICAgICAgICAgJy4uLy4uL2ltYWdlcy9iYW5uZXIxLnBuZycsXHJcbiAgICAgICAgICAgICAgJy4uLy4uL2ltYWdlcy9iYW5uZXIxLnBuZycsXHJcbiAgICAgICAgICAgICAgJy4uLy4uL2ltYWdlcy9iYW5uZXIxLnBuZydcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0b0RldGFpbCAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vZ29vZHMvZGV0YWlsJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Ub3AgKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JvbGxUb3ApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvd2VyIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG93ZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50ID0ge1xyXG4gICAgICAgICAgICBzY3JvbGwgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2F0Y2ggPSB7XHJcbiAgICAgICAgICAgIHNjcm9sbCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvbkxvYWQob3B0aW9uKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgIH1cclxuIl19
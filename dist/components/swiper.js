'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$component) {
	_inherits(Swiper, _wepy$component);

	function Swiper() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Swiper);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			img: Array
		}, _this.data = {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 1000,
			scrollTop: 0
		}, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Swiper, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsImltZyIsIkFycmF5IiwiZGF0YSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzY3JvbGxUb3AiLCJldmVudHMiLCJtZXRob2RzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7Ozs7Ozs7Ozs7O0lBQ3dCQSxNOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLEssR0FBUTtBQUNQQyxRQUFLQztBQURFLEcsUUFHUkMsSSxHQUFPO0FBQ0FDLGtCQUFlLElBRGY7QUFFQUMsYUFBVSxJQUZWO0FBR0FDLGFBQVUsSUFIVjtBQUlBQyxhQUFVLElBSlY7QUFLQUMsY0FBVztBQUxYLEcsUUFRUEMsTSxHQUFTLEUsUUFJVEMsTyxHQUFVLEU7Ozs7OzJCQUlBLENBRVQ7Ozs7RUF0QmtDLGVBQUtDLFM7O2tCQUFwQlosTSIsImZpbGUiOiJzd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHRpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgXHRwcm9wcyA9IHtcclxuICAgIFx0XHRpbWc6IEFycmF5XHJcbiAgICBcdH1cclxuXHQgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVydmFsOiAyMDAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGV2ZW50cyA9IHtcclxuXHJcblx0ICAgIH1cclxuXHJcblx0ICAgIG1ldGhvZHMgPSB7XHJcblx0ICAgICAgXHJcblx0ICAgIH1cclxuXHJcblx0ICAgIG9uTG9hZCAoKSB7XHJcblx0ICAgICAgICBcclxuXHQgICAgfVxyXG4gICAgfVxyXG4iXX0=
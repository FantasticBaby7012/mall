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

var Counter = function (_wepy$component) {
	_inherits(Counter, _wepy$component);

	function Counter() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Counter);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
			cartNum: {
				type: Number,
				default: 1
			}
		}, _this.events = {}, _this.methods = {
			minusNum: function minusNum() {
				if (this.cartNum > 1) {
					this.cartNum--;
				}
			},
			addNum: function addNum() {
				this.cartNum++;
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Counter, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImRhdGEiLCJwcm9wcyIsImNhcnROdW0iLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsImV2ZW50cyIsIm1ldGhvZHMiLCJtaW51c051bSIsImFkZE51bSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0M7Ozs7Ozs7Ozs7OztJQUN3QkEsTzs7Ozs7Ozs7Ozs7Ozs7c0xBQ3BCQyxJLEdBQU8sRSxRQUdQQyxLLEdBQVE7QUFDUEMsWUFBUztBQUNSQyxVQUFLQyxNQURHO0FBRVJDLGFBQVM7QUFGRDtBQURGLEcsUUFNUkMsTSxHQUFTLEUsUUFJVEMsTyxHQUFVO0FBQ1RDLFdBRFMsc0JBQ0c7QUFDUixRQUFJLEtBQUtOLE9BQUwsR0FBZSxDQUFuQixFQUFxQjtBQUNwQixVQUFLQSxPQUFMO0FBQ0E7QUFDRCxJQUxLO0FBTUhPLFNBTkcsb0JBTU87QUFDVCxTQUFLUCxPQUFMO0FBQ0E7QUFSRSxHOzs7OzsyQkFXQSxDQUVUOzs7O0VBM0JtQyxlQUFLUSxTOztrQkFBckJYLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cdCAgICBkYXRhID0ge1xyXG5cdCAgICBcdFxyXG5cdCAgICB9XHJcblx0ICAgIHByb3BzID0ge1xyXG5cdCAgICBcdGNhcnROdW06IHtcclxuXHQgICAgXHRcdHR5cGU6TnVtYmVyLFxyXG5cdCAgICBcdFx0ZGVmYXVsdDogMVxyXG5cdCAgICBcdH1cclxuXHQgICAgfVxyXG5cdCAgICBldmVudHMgPSB7XHJcblxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBtZXRob2RzID0ge1xyXG5cdCAgICBcdG1pbnVzTnVtICgpIHtcclxuICAgICAgICBcdFx0aWYgKHRoaXMuY2FydE51bSA+IDEpe1xyXG4gICAgICAgIFx0XHRcdHRoaXMuY2FydE51bS0tXHJcbiAgICAgICAgXHRcdH1cclxuICAgICAgICBcdH0sXHJcbiAgICAgICAgICAgIGFkZE51bSAoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5jYXJ0TnVtKytcclxuICAgICAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBvbkxvYWQgKCkge1xyXG5cdCAgICAgIFxyXG5cdCAgICB9XHJcbiAgICB9XHJcbiJdfQ==
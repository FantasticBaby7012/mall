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

var toorBar = function (_wepy$component) {
  _inherits(toorBar, _wepy$component);

  function toorBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, toorBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = toorBar.__proto__ || Object.getPrototypeOf(toorBar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      toolBar: [{
        toolText: '首页',
        toolPath: '../../pages/home/index',
        toolClass: 'icon-iconhuidaoshouye'
      }, {
        toolText: '商品',
        toolPath: '../../pages/goods/index',
        toolClass: 'icon-shouqi-01'
      }, {
        toolText: '购物车',
        toolPath: '../../pages/goods/cart',
        toolClass: 'icon-gouwuche-01'
      }, {
        toolText: '我',
        toolPath: '../../pages/goods/me',
        toolClass: 'icon-icongerenzhongxin-01'
      }]
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(toorBar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return toorBar;
}(_wepy2.default.component);

exports.default = toorBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOlsidG9vckJhciIsImRhdGEiLCJ0b29sQmFyIiwidG9vbFRleHQiLCJ0b29sUGF0aCIsInRvb2xDbGFzcyIsImV2ZW50cyIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUDtBQUNDQyxrQkFBVSxJQURYO0FBRUlDLGtCQUFVLHdCQUZkO0FBR0lDLG1CQUFXO0FBSGYsT0FETyxFQU1SO0FBQ0VGLGtCQUFVLElBRFo7QUFFS0Msa0JBQVUseUJBRmY7QUFHS0MsbUJBQVc7QUFIaEIsT0FOUSxFQVdSO0FBQ0VGLGtCQUFVLEtBRFo7QUFFS0Msa0JBQVUsd0JBRmY7QUFHS0MsbUJBQVc7QUFIaEIsT0FYUSxFQWdCUjtBQUNFRixrQkFBVSxHQURaO0FBRUtDLGtCQUFVLHNCQUZmO0FBR0tDLG1CQUFXO0FBSGhCLE9BaEJRO0FBREosSyxRQXlCUEMsTSxHQUFTLEUsUUFJVEMsTyxHQUFVLEU7Ozs7OzZCQUlBLENBRVQ7Ozs7RUFwQ2tDLGVBQUtDLFM7O2tCQUFyQlIsTyIsImZpbGUiOiJ0b29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0b29yQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdG9vbEJhcjogW1xyXG4gICAgICAgIHtcclxuXHQgICAgICAgIHRvb2xUZXh0OiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgdG9vbFBhdGg6ICcuLi8uLi9wYWdlcy9ob21lL2luZGV4JyxcclxuICAgICAgICAgICAgdG9vbENsYXNzOiAnaWNvbi1pY29uaHVpZGFvc2hvdXllJ1xyXG5cdCAgICAgIH0sXHJcblx0ICAgICAge1xyXG5cdCAgICAgICAgdG9vbFRleHQ6ICfllYblk4EnLFxyXG4gICAgICAgICAgICB0b29sUGF0aDogJy4uLy4uL3BhZ2VzL2dvb2RzL2luZGV4JyxcclxuICAgICAgICAgICAgdG9vbENsYXNzOiAnaWNvbi1zaG91cWktMDEnXHJcblx0ICAgICAgfSxcclxuXHQgICAgICB7XHJcblx0ICAgICAgICB0b29sVGV4dDogJ+i0reeJqei9picsXHJcbiAgICAgICAgICAgIHRvb2xQYXRoOiAnLi4vLi4vcGFnZXMvZ29vZHMvY2FydCcsXHJcbiAgICAgICAgICAgIHRvb2xDbGFzczogJ2ljb24tZ291d3VjaGUtMDEnXHJcblx0ICAgICAgfSxcclxuXHQgICAgICB7XHJcblx0ICAgICAgICB0b29sVGV4dDogJ+aIkScsXHJcbiAgICAgICAgICAgIHRvb2xQYXRoOiAnLi4vLi4vcGFnZXMvZ29vZHMvbWUnLFxyXG4gICAgICAgICAgICB0b29sQ2xhc3M6ICdpY29uLWljb25nZXJlbnpob25neGluLTAxJ1xyXG5cdCAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=
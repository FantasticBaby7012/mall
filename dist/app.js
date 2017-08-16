'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    //this.use('requestfix')
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home/index', 'pages/goods/goods', 'pages/goods/index', 'pages/goods/detail', 'pages/cart/cart', 'pages/me/me'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#2c2c2c',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: '#fff'
      },
      "tabBar": {
        "selectedColor": "#4fbd7b",
        "list": [{
          "pagePath": "pages/home/index",
          "text": "首页",
          "iconPath": "images/toolbar/home.png",
          "selectedIconPath": "images/toolbar/home_active.png"
        }, {
          "pagePath": "pages/goods/index",
          "text": "商品",
          "iconPath": "images/toolbar/goods.png",
          "selectedIconPath": "images/toolbar/goods_active.png"
        }, {
          "pagePath": "pages/cart/cart",
          "text": "购物车",
          "iconPath": "images/toolbar/cart.png",
          "selectedIconPath": "images/toolbar/cart_active.png"
        }, {
          "pagePath": "pages/me/me",
          "text": "我",
          "iconPath": "images/toolbar/me.png",
          "selectedIconPath": "images/toolbar/me_active.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQTs7Ozs7QUFnREUsc0JBQWU7QUFBQTs7QUFFYjtBQUZhOztBQUFBLFVBN0NmQSxNQTZDZSxHQTdDTjtBQUNQQyxhQUFPLENBQ0wsa0JBREssRUFFTCxtQkFGSyxFQUdMLG1CQUhLLEVBSUwsb0JBSkssRUFLTCxpQkFMSyxFQU1MLGFBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BVEQ7QUFlUCxnQkFBVTtBQUNSLHlCQUFpQixTQURUO0FBRVIsZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLGtCQURMO0FBRVAsa0JBQVEsSUFGRDtBQUdQLHNCQUFZLHlCQUhMO0FBSVAsOEJBQW9CO0FBSmIsU0FBRCxFQUtMO0FBQ0Qsc0JBQVksbUJBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksMEJBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FMSyxFQVVMO0FBQ0Qsc0JBQVksaUJBRFg7QUFFRCxrQkFBUSxLQUZQO0FBR0Qsc0JBQVkseUJBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FWSyxFQWVMO0FBQ0Qsc0JBQVksYUFEWDtBQUVELGtCQUFRLEdBRlA7QUFHRCxzQkFBWSx1QkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQWZLO0FBRkE7QUFmSCxLQTZDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7QUFBQTtBQUdkOzs7OytCQUVVLENBSVY7Ozs7RUF2RDBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9ob21lL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2dvb2RzL2dvb2RzJyxcclxuICAgICAgJ3BhZ2VzL2dvb2RzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2dvb2RzL2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9jYXJ0L2NhcnQnLFxyXG4gICAgICAncGFnZXMvbWUvbWUnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMmMyYzJjJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xyXG4gICAgfSxcclxuICAgIFwidGFiQmFyXCI6IHtcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzRmYmQ3YlwiLFxyXG4gICAgICBcImxpc3RcIjogW3tcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaG9tZS9pbmRleFwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvdG9vbGJhci9ob21lLnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy90b29sYmFyL2hvbWVfYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvZ29vZHMvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLllYblk4FcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL3Rvb2xiYXIvZ29vZHMucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3Rvb2xiYXIvZ29vZHNfYWN0aXZlLnBuZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY2FydC9jYXJ0XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6LSt54mp6L2mXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy90b29sYmFyL2NhcnQucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL3Rvb2xiYXIvY2FydF9hY3RpdmUucG5nXCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZS9tZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkVwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvdG9vbGJhci9tZS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvdG9vbGJhci9tZV9hY3RpdmUucG5nXCJcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy90aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuXHJcblxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgXHJcbn1cclxuIl19
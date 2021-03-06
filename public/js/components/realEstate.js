webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  adress: '45 Elmstreet',
  city: 'Lakeshore',
  province: 'Ontario',
  rooms: 3,
  price: 2000000,
  floorspace: 2800,
  elevator: false,
  pool: true,
  basement: true,
  gym: true,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
  adress: '30 grandcrescent',
  city: 'Toronto',
  province: 'Ontario',
  rooms: 2,
  price: 800000,
  floorspace: 2100,
  elevator: true,
  pool: true,
  basement: false,
  gym: true,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '58 marine drive',
  city: 'Toronto',
  province: 'Ontario',
  rooms: 2,
  price: 1800000,
  floorspace: 2500,
  elevator: true,
  pool: true,
  basement: false,
  gym: true,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '5899 whitehorn drive',
  city: 'Mississauga',
  province: 'Ontario',
  rooms: 3,
  price: 600000,
  floorspace: 1600,
  elevator: false,
  pool: true,
  basement: true,
  gym: false,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '62 Yorkberry Crescent',
  city: 'Ottawa',
  province: 'Ontario',
  rooms: 3,
  price: 639000,
  floorspace: 2200,
  elevator: false,
  pool: true,
  basement: true,
  gym: true,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '600 Bloor st',
  city: 'Toronto',
  province: 'Ontario',
  rooms: 2,
  price: 402000,
  floorspace: 500,
  elevator: false,
  pool: true,
  basement: false,
  gym: false,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '655 Highglen st',
  city: 'Lakeshore',
  province: 'Ontario',
  rooms: 4,
  price: 998000,
  floorspace: 1300,
  elevator: false,
  pool: false,
  basement: true,
  gym: false,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/1030555/pexels-photo-1030555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '365 Fernhill Avenue',
  city: 'Ottawa',
  province: 'Ontario',
  rooms: 5,
  price: 5200000,
  floorspace: 2300,
  elevator: false,
  pool: true,
  basement: true,
  gym: true,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/534182/pexels-photo-534182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '200 Somerset Drive',
  city: 'Ottawa',
  province: 'Ontario',
  rooms: 2,
  price: 553200,
  floorspace: 1300,
  elevator: true,
  pool: true,
  basement: false,
  gym: true,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '4200 Fieldgate Crescent',
  city: 'Mississauga',
  province: 'Ontario',
  rooms: 3,
  price: 714000,
  floorspace: 1540,
  elevator: false,
  pool: false,
  basement: false,
  gym: true,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/323774/pexels-photo-323774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '632 Shoreline Dr',
  city: 'Lakeshore',
  province: 'Ontario',
  rooms: 3,
  price: 630000,
  floorspace: 1732,
  elevator: false,
  pool: false,
  basement: false,
  gym: true,
  hometype: 'apartment',
  image: 'https://images.pexels.com/photos/302186/pexels-photo-302186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  adress: '700 Shepperd Dr',
  city: 'Toronto',
  province: 'Ontario',
  rooms: 3,
  price: 942300,
  floorspace: 1900,
  elevator: false,
  pool: false,
  basement: true,
  gym: false,
  hometype: 'house',
  image: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
      city: 'All',
      hometype: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      filteredData: _listingsData2.default,
      formsData: '',
      sortby: 'price-asc',
      view: "box",
      search: "",
      elevator: false,
      pool: false,
      basement: false,
      gym: false
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForm = _this.populateForm.bind(_this);
    _this.changeViews = _this.changeViews.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'changeViews',
    value: function changeViews(viewType) {
      this.setState({
        view: viewType
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
        //this.changeViews()
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorspace >= _this3.state.min_floor_space && item.floorspace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;
      });
      if (this.state.city != 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.hometype != 'All') {
        newData = newData.filter(function (item) {
          return item.hometype == _this3.state.hometype;
        });
      }
      if (this.state.sortby == "price-asc") {
        newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      if (this.state.sortby == "price-dsc") {
        newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          if (n != null) {
            return true;
          }
        });
      }
      if (this.state.gym == true) {
        newData = newData.filter(function (item) {
          return item.gym == _this3.state.gym;
        });
      }
      if (this.state.elevator == true) {
        newData = newData.filter(function (item) {
          return item.elevator == _this3.state.elevator;
        });
      }
      if (this.state.pool == true) {
        newData = newData.filter(function (item) {
          return item.pool == _this3.state.pool;
        });
      }
      if (this.state.basement == true) {
        newData = newData.filter(function (item) {
          return item.basement == _this3.state.basement;
        });
      }
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForm',
    value: function populateForm() {
      //cities
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      //prevent repetition of cities
      cities = new Set(cities);
      //make cities an array
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      //hometypes
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.hometype;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();
      //rooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        formsData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content' },
          _react2.default.createElement(_Filter2.default, { globalState: this.state, change: this.change, populateAction: this.populateForm }),
          _react2.default.createElement(_Listings2.default, { globalState: this.state, listingsData: this.state.filteredData, change: this.change, changeViews: this.changeViews })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.city = _this.city.bind(_this);
    _this.homeType = _this.homeType.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "city",
    value: function city() {
      if (this.props.globalState.formsData.cities != undefined) {
        var cities = this.props.globalState.formsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeType",
    value: function homeType() {
      if (this.props.globalState.formsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.formsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.formsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.formsData.bedrooms;

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            " +BR "
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city", className: "title" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", className: "filters neighbourhood", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.city()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "hometype", className: "title" },
            "Type"
          ),
          _react2.default.createElement(
            "select",
            { name: "hometype", className: "filters housetype", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.homeType()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "rooms", className: "title" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            { name: "rooms", className: "filters bedrooms", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "0" },
              "1+ Br"
            ),
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevator"
              ),
              _react2.default.createElement("input", { name: "elevator", type: "checkbox", value: "elevator", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", { name: "pool", type: "checkbox", value: "swimming-pool", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", { name: "basement", type: "checkbox", value: "finished-basement", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "gym", type: "checkbox", value: "gym", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Aspiration"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create Ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Login"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;

      if (listingsData.length == 0 || listingsData == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'No items with the applied filter are currently available'
        );
      }
      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == "box") {
          var divStyle = {
            background: 'url("' + listing.image + '") no-repeat center center',
            backgroundSize: 'cover',
            width: '100%',
            height: 'auto'
            //THIS IS THE BOX VIEW
          };return _react2.default.createElement(
            'div',
            { className: 'col-lg-4', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: divStyle },
                _react2.default.createElement(
                  'span',
                  { className: 'adress' },
                  listing.adress
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-img-grp' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details-grp' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2018'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorspace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                  listing.city,
                  ',',
                  listing.province
                )
              )
            )
          );
        }
        //THIS IS THE LIST VIEW
        return _react2.default.createElement(
          'div',
          { className: 'col-md-12 col-lg-6', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center', backgroundSize: '100% 100%' } },
              _react2.default.createElement(
                'span',
                { className: 'adress' },
                listing.adress
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement('div', { className: 'user-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Nina Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '05/05/2018'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.floorspace,
                        ' ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'view-btn' },
                  'View Listing'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                listing.city,
                ',',
                listing.province
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeViews.bind(null, "list") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeViews.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);
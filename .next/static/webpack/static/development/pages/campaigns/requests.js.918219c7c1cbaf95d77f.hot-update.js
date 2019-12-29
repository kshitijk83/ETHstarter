webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var RequestIndex = function RequestIndex(props) {
  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Header,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Row,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Body;

  var renderRow = function renderRow() {
    return props.requests.map(function (request, index) {
      return __jsx(_components_RequestRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: index,
        id: index,
        approversCount: props.approversCount,
        request: request,
        address: props.address
      });
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("h3", null, "Requests"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    route: "/campaigns/".concat(props.address, "/requests/new")
  }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    primary: true
  }, "Add Request"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"], null, __jsx(Header, null, __jsx(Row, null, __jsx(HeaderCell, null, "ID"), __jsx(HeaderCell, null, "Description"), __jsx(HeaderCell, null, "Amount"), __jsx(HeaderCell, null, "Recipient"), __jsx(HeaderCell, null, "Approval Count"), __jsx(HeaderCell, null, "Approve"), __jsx(HeaderCell, null, "Finalize"))), __jsx(Body, null, renderRow())));
};

RequestIndex.getInitialProps = function _callee(props) {
  var address, campaign, requestCount, approversCount, requests;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          address = props.query.address;
          campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_7__["default"])(address);
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.getRequestsCount().call());

        case 4:
          requestCount = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.approversCount().call());

        case 7:
          approversCount = _context.sent;
          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(requestCount)).fill().map(function (el, index) {
            return campaign.methods.requests(index).call();
          })));

        case 10:
          requests = _context.sent;
          return _context.abrupt("return", {
            address: address,
            requests: requests,
            requestCount: requestCount,
            approversCount: approversCount
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

/***/ })

})
//# sourceMappingURL=requests.js.918219c7c1cbaf95d77f.hot-update.js.map
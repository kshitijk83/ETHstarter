webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var RequestRow = function RequestRow(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell;
  var id = props.id,
      request = props.request,
      approversCount = props.approversCount;
  var readyToFinalize = request.approvalCount > approversCount / 2;

  var onApproveHandler = function onApproveHandler() {
    var campaign, accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onApproveHandler$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__["default"])(props.address);
            setLoading(true);
            _context.prev = 2;
            accounts = _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.approveRequest(props.id).send({
              from: accounts[0]
            }));

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);

          case 10:
            setLoading(false);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 8]]);
  };

  var onFinalizeHandler = function onFinalizeHandler() {
    var campaign, accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onFinalizeHandler$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__["default"])(props.address);
            setLoading(true);
            _context2.prev = 2;
            accounts = _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
            _context2.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.finalizeRequest(props.id).send({
              from: accounts[0]
            }));

          case 6:
            _context2.next = 10;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);

          case 10:
            setLoading(false);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 8]]);
  };

  return __jsx(Row, {
    disabled: request.complete,
    positive: readyToFinalize && !request.complete
  }, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(request.value, "ether")), __jsx(Cell, null, request.recipient), __jsx(Cell, null, "".concat(request.approvalCount, "/").concat(approversCount)), __jsx(Cell, null, request.complete ? null : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    basic: true,
    color: "green",
    onClick: onApproveHandler
  }, "Approve")), __jsx(Cell, null, request.complete ? null : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    basic: true,
    color: "teal",
    onClick: onFinalizeHandler
  }, "Finalize")));
};

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=requests.js.0e7c7b9423e3f9cebb32.hot-update.js.map
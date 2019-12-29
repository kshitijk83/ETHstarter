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
      approveLoading = _useState[0],
      setApproveLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      finalizeLoading = _useState2[0],
      setFinalizeLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      approveErrMsg = _useState3[0],
      setApproveErrMsg = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      finalizeErrMsg = _useState4[0],
      setFinalizeErrMsg = _useState4[1];

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
            setApproveLoading(true);
            setApproveErrMsg("");
            _context.prev = 3;
            accounts = _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.approveRequest(props.id).send({
              from: accounts[0]
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            setApproveErrMsg(_context.t0.message);

          case 12:
            setApproveLoading(false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 9]]);
  };

  var onFinalizeHandler = function onFinalizeHandler() {
    var campaign, accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onFinalizeHandler$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__["default"])(props.address);
            setFinalizeLoading(true);
            setFinalizeErrMsg("");
            _context2.prev = 3;
            accounts = _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
            _context2.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.finalizeRequest(props.id).send({
              from: accounts[0]
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            setFinalizeErrMsg(_context2.t0.message);

          case 12:
            setFinalizeLoading(false);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[3, 9]]);
  };

  return __jsx(Row, {
    disabled: request.complete,
    positive: readyToFinalize && !request.complete
  }, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].utils.fromWei(request.value, "ether")), __jsx(Cell, null, request.recipient), __jsx(Cell, null, "".concat(request.approvalCount, "/").concat(approversCount)), __jsx(Cell, null, request.complete ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: approveLoading,
    basic: true,
    color: "green",
    onClick: onApproveHandler
  }, "Approve"), __jsx("p", null, approveErrMsg))), __jsx(Cell, null, request.complete ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: finalizeLoading,
    basic: true,
    color: "teal",
    onClick: onFinalizeHandler
  }, "Finalize"), __jsx("p", null, finalizeErrMsg))));
};

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=requests.js.9145ec074349d65f6691.hot-update.js.map
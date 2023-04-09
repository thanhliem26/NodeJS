"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveDetailInfoDoctor = exports.getTopDoctorHome = exports.getScheduleByDate = exports.getDetailDoctorById = exports.getAllDoctors = exports.bulkCreateSchedule = void 0;
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var getTopDoctorHome = function getTopDoctorHome(limit) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _index["default"].User.findAll({
                limit: Number(limit),
                where: {
                  roleId: "R2"
                },
                order: [["createdAt", "DESC"]],
                attributes: {
                  exclude: ["password"]
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'genderData',
                  attributes: ['valueEn', 'valueVi']
                }],
                raw: true,
                nest: true
              });
            case 3:
              users = _context.sent;
              resolve({
                errCode: 0,
                data: users
              });
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
exports.getTopDoctorHome = getTopDoctorHome;
var getAllDoctors = function getAllDoctors() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var doctors;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _index["default"].User.findAll({
                where: {
                  roleId: "R2"
                },
                attributes: {
                  exclude: ["password", "image"]
                }
              });
            case 3:
              doctors = _context2.sent;
              resolve({
                errCode: 0,
                data: doctors
              });
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
exports.getAllDoctors = getAllDoctors;
var saveDetailInfoDoctor = function saveDetailInfoDoctor(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var checkExitDoctor, checkEdit, _data$selectedPrice, _data$selectedProvinc, _data$selectedPayment, _data$selectedPrice2, _data$selectedProvinc2, _data$selectedPayment2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(!data.id || !data.contentHTML || !data.contentMarkdown)) {
                _context3.next = 5;
                break;
              }
              resolve({
                errCode: 1,
                message: "Missing parameter"
              });
              _context3.next = 27;
              break;
            case 5:
              _context3.next = 7;
              return _index["default"].Doctorinfor.findOne({
                where: {
                  doctorId: data.id
                }
              });
            case 7:
              checkExitDoctor = _context3.sent;
              _context3.next = 10;
              return _index["default"].Markdown.findOne({
                where: {
                  doctorId: data.id
                }
              });
            case 10:
              checkEdit = _context3.sent;
              if (checkExitDoctor) {
                _context3.next = 16;
                break;
              }
              _context3.next = 14;
              return _index["default"].Doctorinfor.create({
                doctorId: data === null || data === void 0 ? void 0 : data.id,
                priceId: data === null || data === void 0 ? void 0 : (_data$selectedPrice = data.selectedPrice) === null || _data$selectedPrice === void 0 ? void 0 : _data$selectedPrice.value,
                provinceId: data === null || data === void 0 ? void 0 : (_data$selectedProvinc = data.selectedProvince) === null || _data$selectedProvinc === void 0 ? void 0 : _data$selectedProvinc.value,
                paymentId: data === null || data === void 0 ? void 0 : (_data$selectedPayment = data.selectedPayment) === null || _data$selectedPayment === void 0 ? void 0 : _data$selectedPayment.value,
                addressClinic: data === null || data === void 0 ? void 0 : data.addressClinic,
                note: data === null || data === void 0 ? void 0 : data.note
                // nameClinic: nameClinic,
              });
            case 14:
              _context3.next = 18;
              break;
            case 16:
              _context3.next = 18;
              return _index["default"].Doctorinfor.update({
                priceId: data === null || data === void 0 ? void 0 : (_data$selectedPrice2 = data.selectedPrice) === null || _data$selectedPrice2 === void 0 ? void 0 : _data$selectedPrice2.value,
                provinceId: data === null || data === void 0 ? void 0 : (_data$selectedProvinc2 = data.selectedProvince) === null || _data$selectedProvinc2 === void 0 ? void 0 : _data$selectedProvinc2.value,
                paymentId: data === null || data === void 0 ? void 0 : (_data$selectedPayment2 = data.selectedPayment) === null || _data$selectedPayment2 === void 0 ? void 0 : _data$selectedPayment2.value,
                addressClinic: data === null || data === void 0 ? void 0 : data.addressClinic,
                note: data === null || data === void 0 ? void 0 : data.note
                // nameClinic: nameClinic,
              }, {
                where: {
                  doctorId: data.id
                }
              });
            case 18:
              if (!checkEdit) {
                _context3.next = 24;
                break;
              }
              _context3.next = 21;
              return _index["default"].Markdown.update({
                contentHTML: data.contentHTML,
                contentMarkdown: data.contentMarkdown,
                description: data.description,
                doctorId: data.id,
                updateAt: new Date()
              }, {
                where: {
                  doctorId: data.id
                }
              });
            case 21:
              resolve({
                errCode: 0,
                message: "Edit success"
              });
              _context3.next = 27;
              break;
            case 24:
              _context3.next = 26;
              return _index["default"].Markdown.create({
                contentHTML: data.contentHTML,
                contentMarkdown: data.contentMarkdown,
                description: data.description,
                doctorId: data.id
              });
            case 26:
              resolve({
                errCode: 0,
                message: "save info doctor succes"
              });
            case 27:
              _context3.next = 32;
              break;
            case 29:
              _context3.prev = 29;
              _context3.t0 = _context3["catch"](0);
              reject(_context3.t0);
            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 29]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
exports.saveDetailInfoDoctor = saveDetailInfoDoctor;
var getDetailDoctorById = function getDetailDoctorById(idDoctor) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var infoDoctor, IFDT;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              if (idDoctor) {
                _context4.next = 5;
                break;
              }
              resolve({
                errCode: 1,
                message: "Missing parameter!"
              });
              _context4.next = 12;
              break;
            case 5:
              _context4.next = 7;
              return _index["default"].User.findOne({
                where: {
                  id: idDoctor
                },
                attributes: {
                  exclude: ["password"]
                },
                include: [{
                  model: _index["default"].Markdown,
                  attributes: ['contentHTML', 'contentMarkdown', 'description']
                }, {
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['valueEn', 'valueVi']
                }],
                raw: true,
                nest: true
              });
            case 7:
              infoDoctor = _context4.sent;
              _context4.next = 10;
              return _index["default"].Doctorinfor.findOne({
                where: {
                  doctorId: idDoctor
                },
                attributes: {
                  exclude: ["createdAt", "updatedAt"]
                }
              });
            case 10:
              IFDT = _context4.sent;
              resolve({
                errCode: 0,
                data: _objectSpread(_objectSpread({}, infoDoctor), IFDT)
              });
            case 12:
              _context4.next = 17;
              break;
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              reject(_context4.t0);
            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
exports.getDetailDoctorById = getDetailDoctorById;
var bulkCreateSchedule = function bulkCreateSchedule(params) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var data, exitsing, toCreate;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              if (params) {
                _context5.next = 5;
                break;
              }
              resolve({
                errCode: 1,
                errMessage: "Missing required param!"
              });
              _context5.next = 16;
              break;
            case 5:
              if (!(params && params.length > 0)) {
                _context5.next = 16;
                break;
              }
              data = params.map(function (item) {
                var result = _objectSpread(_objectSpread({}, item), {}, {
                  maxNumber: Number(MAX_NUMBER_SCHEDULE),
                  timeType: item.time
                });
                delete result.time;
                return result;
              });
              _context5.next = 9;
              return _index["default"].Schedule.findAll({
                where: {
                  doctorId: data[0].doctorId,
                  date: data[0].date
                },
                attributes: ['timeType', 'date', 'doctorId', 'maxNumber']
              });
            case 9:
              exitsing = _context5.sent;
              exitsing = exitsing.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  date: (0, _moment["default"])(item.date).format("YYYY-MM-DD HH:mm:ss")
                });
              });
              toCreate = _lodash["default"].differenceWith(data, exitsing, function (a, b) {
                return (a === null || a === void 0 ? void 0 : a.timeType) === (b === null || b === void 0 ? void 0 : b.timeType) && (a === null || a === void 0 ? void 0 : a.date) === (b === null || b === void 0 ? void 0 : b.date);
              });
              if (!(toCreate && toCreate.length > 0)) {
                _context5.next = 15;
                break;
              }
              _context5.next = 15;
              return _index["default"].Schedule.bulkCreate(data);
            case 15:
              resolve({
                errCode: 0,
                message: "Ok"
              });
            case 16:
              resolve(true);
              _context5.next = 22;
              break;
            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](0);
              reject(_context5.t0);
            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 19]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
exports.bulkCreateSchedule = bulkCreateSchedule;
var getScheduleByDate = function getScheduleByDate(doctorId, date) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              if (!doctorId || !date) {
                resolve({
                  errCode: 1,
                  message: 'Missing parameter'
                });
              }
              _context6.next = 4;
              return _index["default"].Schedule.findAll({
                where: {
                  doctorId: doctorId,
                  date: date
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'timeData',
                  attributes: ['valueEn', 'valueVi']
                }],
                raw: true,
                nest: true
              });
            case 4:
              data = _context6.sent;
              resolve({
                errCode: 0,
                data: data
              });
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              reject(_context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
exports.getScheduleByDate = getScheduleByDate;
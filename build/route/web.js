"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _application = require("express/lib/application");
var HomaPage = _interopRequireWildcard(require("../controllers/homeController"));
var UserController = _interopRequireWildcard(require("../controllers/userController"));
var AllcodeController = _interopRequireWildcard(require("../controllers/allCodeController"));
var DoctorController = _interopRequireWildcard(require("../controllers/doctorController"));
var PatientController = _interopRequireWildcard(require("../controllers/PatientionController"));
var SpecialtyController = _interopRequireWildcard(require("../controllers/specialtyController"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initWebRoute = function initWebRoute(app) {
  router.get('/', HomaPage.getHomePage);
  router.get('/crud', HomaPage.getCRUD);
  router.post('/post-crud', HomaPage.postCRUD);
  router.get('/get-crud', HomaPage.displayCRUD);
  router.get('/edit-crud', HomaPage.updateUser);
  router.post('/put-crud', HomaPage.putCRUD);
  router.get('/delete-user', HomaPage.deleteCRUD);

  //resful API

  //handle table users
  router.post('/api/login', UserController.handleLogin);
  router.get('/api/get-all-user', UserController.handleGetAllUser);
  router.post('/api/create-user', UserController.handleCreateUser);
  router.put('/api/edit-user', UserController.handleEditUser);
  router["delete"]('/api/delete-user', UserController.handleDeleteUser);

  //handle table allcodes
  router.get('/api/allcodes', AllcodeController.getAllCodes);
  router.get('/api/top-doctor-home', DoctorController.getTopDocTor);
  router.get('/api/get-all-doctors', DoctorController.getAllDortors);
  router.post('/api/save-info-doctor', DoctorController.postInfoDoctor);
  router.post('/api/bulk-create-schedule', DoctorController.postBulkCreateSchedule);

  //markdown
  router.get('/api/get-detail-doctor-by-id', DoctorController.getDetailDoctorById);
  router.get('/api/get-schedule-by-date', DoctorController.getScheduleByDate);
  //

  router.post('/api/patient-book-appoinment', PatientController.postBookingAppointment);
  router.post('/api/verify-book-appoinment', PatientController.postVerifyBookingAppointment);
  router.post('/api/create-new-specialty', SpecialtyController.createSpecialty);
  router.get('/api/get-all-Specialty', SpecialtyController.getAllSpecialty);
  return app.use("/", router);
};
var _default = initWebRoute;
exports["default"] = _default;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./src/styles/global.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./src/styles/global.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500&family=Roboto:wght@100;500;700&display=swap\\\");\\r\\n\\r\\n* {\\r\\n  padding: 0px;\\r\\n  margin: 0px;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  font-family: \\\"Roboto\\\";\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  max-width: 1440px;\\r\\n}\\r\\n.cabecalho {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 30px;\\r\\n  max-width: 1440px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n.cabecalho .menu {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 100%;\\r\\n}\\r\\n.cabecalho nav li a {\\r\\n  font-weight: bold;\\r\\n  color: #ffffff;\\r\\n  font-size: 20px;\\r\\n  /* 10 determina o espaço de altura\\r\\n         20 determina o espaço do lado */\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 50px;\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\n.cabecalho nav li a:hover {\\r\\n  background-color: #d5011d;\\r\\n}\\r\\n\\r\\n.body .imagem-fundo {\\r\\n  background-color: red;\\r\\n  position: absolute;\\r\\n  align-items: center;\\r\\n  z-index: -1;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n  justify-content: center;\\r\\n  display: flex;\\r\\n}\\r\\n.imagem-fundo .estadio {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.imagem-fundo::after {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: linear-gradient(\\r\\n    90deg,\\r\\n    rgba(0, 0, 0, 1) 0%,\\r\\n    rgba(0, 0, 0, 0.8015405991498161) 50%,\\r\\n    rgba(0, 0, 0, 1) 100%\\r\\n  );\\r\\n}\\r\\n\\r\\n.body .menu nav ul {\\r\\n  background-color: #000000;\\r\\n  color: #ffffff;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.conteudo {\\r\\n    max-width: 1440px;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    /* vh : como se pegasse o tamanho da janela total do usuário e colocasse os elementos de acordo com o tamanho da janela de visualização */\\r\\n    /* 132 representa o tamanho do menu */\\r\\n    height: calc(100vh - 132px);\\r\\n    padding: 0 30px 30px;\\r\\n}\\r\\n\\r\\n.conteudo .titulo{\\r\\n    max-width: 500px;\\r\\n}\\r\\n\\r\\n.conteudo .imagem {\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.conteudo .texto p {\\r\\n    color: #a8adb7;\\r\\n    width: 85%;\\r\\n    font-size: 18px;\\r\\n    margin: 30px 0;\\r\\n    padding-left: 60px;\\r\\n}\\r\\n\\r\\n.conteudo .texto .titulo p {\\r\\n  font-weight: 700;\\r\\n  font-size: 40px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n@media (max-width: 1220px) {\\r\\n    body {\\r\\n      background-color: blueviolet;\\r\\n    }\\r\\n  \\r\\n    .imagem-fundo {\\r\\n      display: none;\\r\\n    }\\r\\n  \\r\\n    .conteudo {\\r\\n      /* wrap vai dizer: se não tem espaço na tela ao invés de ficar com o scroll, simplesmente jogue esses elementos pra baixo */\\r\\n      flex-wrap: wrap;\\r\\n      justify-content: center;\\r\\n      height: auto;\\r\\n      gap: 30px;\\r\\n    }\\r\\n  \\r\\n    .conteudo .imagem  {\\r\\n      max-width: 50%;\\r\\n      align-items: center;\\r\\n    }\\r\\n  \\r\\n    /* .container.informacoes {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      flex-direction: column;\\r\\n    } */\\r\\n  \\r\\n    .conteudo .texto {\\r\\n      color: #ffffff;\\r\\n      text-align: center;\\r\\n    }\\r\\n  \\r\\n   \\r\\n  }\\r\\n  \\r\\n  @media (max-width: 500px){\\r\\n      body{\\r\\n          background-color: yellow;\\r\\n      }\\r\\n      .cabecalho {\\r\\n          flex-wrap: wrap;\\r\\n          justify-content: center;\\r\\n          gap: 10px;\\r\\n          width: 100vw;\\r\\n      }\\r\\n  \\r\\n      .conteudo .imagem-titulo{\\r\\n          max-width: 75%;\\r\\n      }\\r\\n  \\r\\n      .conteudo .texto{\\r\\n          color: #07070e;\\r\\n      }\\r\\n  \\r\\n  }\\r\\n  \\r\\n\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf;wCACsC;EACtC,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP;;;;;GAKC;AACH;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yIAAyI;IACzI,qCAAqC;IACrC,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;IACI;MACE,4BAA4B;IAC9B;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,2HAA2H;MAC3H,eAAe;MACf,uBAAuB;MACvB,YAAY;MACZ,SAAS;IACX;;IAEA;MACE,cAAc;MACd,mBAAmB;IACrB;;IAEA;;;;OAIG;;IAEH;MACE,cAAc;MACd,kBAAkB;IACpB;;;EAGF;;EAEA;MACI;UACI,wBAAwB;MAC5B;MACA;UACI,eAAe;UACf,uBAAuB;UACvB,SAAS;UACT,YAAY;MAChB;;MAEA;UACI,cAAc;MAClB;;MAEA;UACI,cAAc;MAClB;;EAEJ\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500&family=Roboto:wght@100;500;700&display=swap\\\");\\r\\n\\r\\n* {\\r\\n  padding: 0px;\\r\\n  margin: 0px;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n  font-family: \\\"Roboto\\\";\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  max-width: 1440px;\\r\\n}\\r\\n.cabecalho {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 30px;\\r\\n  max-width: 1440px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n.cabecalho .menu {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 100%;\\r\\n}\\r\\n.cabecalho nav li a {\\r\\n  font-weight: bold;\\r\\n  color: #ffffff;\\r\\n  font-size: 20px;\\r\\n  /* 10 determina o espaço de altura\\r\\n         20 determina o espaço do lado */\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 50px;\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\n.cabecalho nav li a:hover {\\r\\n  background-color: #d5011d;\\r\\n}\\r\\n\\r\\n.body .imagem-fundo {\\r\\n  background-color: red;\\r\\n  position: absolute;\\r\\n  align-items: center;\\r\\n  z-index: -1;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n  justify-content: center;\\r\\n  display: flex;\\r\\n}\\r\\n.imagem-fundo .estadio {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.imagem-fundo::after {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: linear-gradient(\\r\\n    90deg,\\r\\n    rgba(0, 0, 0, 1) 0%,\\r\\n    rgba(0, 0, 0, 0.8015405991498161) 50%,\\r\\n    rgba(0, 0, 0, 1) 100%\\r\\n  );\\r\\n}\\r\\n\\r\\n.body .menu nav ul {\\r\\n  background-color: #000000;\\r\\n  color: #ffffff;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.conteudo {\\r\\n    max-width: 1440px;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    /* vh : como se pegasse o tamanho da janela total do usuário e colocasse os elementos de acordo com o tamanho da janela de visualização */\\r\\n    /* 132 representa o tamanho do menu */\\r\\n    height: calc(100vh - 132px);\\r\\n    padding: 0 30px 30px;\\r\\n}\\r\\n\\r\\n.conteudo .titulo{\\r\\n    max-width: 500px;\\r\\n}\\r\\n\\r\\n.conteudo .imagem {\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.conteudo .texto p {\\r\\n    color: #a8adb7;\\r\\n    width: 85%;\\r\\n    font-size: 18px;\\r\\n    margin: 30px 0;\\r\\n    padding-left: 60px;\\r\\n}\\r\\n\\r\\n.conteudo .texto .titulo p {\\r\\n  font-weight: 700;\\r\\n  font-size: 40px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n@media (max-width: 1220px) {\\r\\n    body {\\r\\n      background-color: blueviolet;\\r\\n    }\\r\\n  \\r\\n    .imagem-fundo {\\r\\n      display: none;\\r\\n    }\\r\\n  \\r\\n    .conteudo {\\r\\n      /* wrap vai dizer: se não tem espaço na tela ao invés de ficar com o scroll, simplesmente jogue esses elementos pra baixo */\\r\\n      flex-wrap: wrap;\\r\\n      justify-content: center;\\r\\n      height: auto;\\r\\n      gap: 30px;\\r\\n    }\\r\\n  \\r\\n    .conteudo .imagem  {\\r\\n      max-width: 50%;\\r\\n      align-items: center;\\r\\n    }\\r\\n  \\r\\n    /* .container.informacoes {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      flex-direction: column;\\r\\n    } */\\r\\n  \\r\\n    .conteudo .texto {\\r\\n      color: #ffffff;\\r\\n      text-align: center;\\r\\n    }\\r\\n  \\r\\n   \\r\\n  }\\r\\n  \\r\\n  @media (max-width: 500px){\\r\\n      body{\\r\\n          background-color: yellow;\\r\\n      }\\r\\n      .cabecalho {\\r\\n          flex-wrap: wrap;\\r\\n          justify-content: center;\\r\\n          gap: 10px;\\r\\n          width: 100vw;\\r\\n      }\\r\\n  \\r\\n      .conteudo .imagem-titulo{\\r\\n          max-width: 75%;\\r\\n      }\\r\\n  \\r\\n      .conteudo .texto{\\r\\n          color: #07070e;\\r\\n      }\\r\\n  \\r\\n  }\\r\\n  \\r\\n\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxrSEFBa0gsSUFBSSwyQkFBMkIsSUFBSSxvQkFBb0IsV0FBVyxtQkFBbUIsa0JBQWtCLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLDhCQUE4QixLQUFLLFdBQVcscUJBQXFCLEtBQUssZUFBZSx3QkFBd0IsS0FBSyxnQkFBZ0Isb0JBQW9CLHFDQUFxQyxvQkFBb0Isd0JBQXdCLHFCQUFxQixLQUFLLHNCQUFzQixvQkFBb0IsMEJBQTBCLG1CQUFtQixLQUFLLHlCQUF5Qix3QkFBd0IscUJBQXFCLHNCQUFzQiw4R0FBOEcsMEJBQTBCLHVCQUF1QixLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSyw2QkFBNkIsNEJBQTRCLHlCQUF5QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCLDhCQUE4QixvQkFBb0IsS0FBSyw0QkFBNEIsbUJBQW1CLG9CQUFvQixLQUFLLDhCQUE4QixtQkFBbUIsb0JBQW9CLG9CQUFvQix5QkFBeUIsYUFBYSxjQUFjLCtKQUErSixLQUFLLDRCQUE0QixnQ0FBZ0MscUJBQXFCLG9CQUFvQixvQkFBb0IsMEJBQTBCLEtBQUssbUJBQW1CLDBCQUEwQix1QkFBdUIsc0JBQXNCLDRCQUE0QixvT0FBb08sNkJBQTZCLEtBQUssMEJBQTBCLHlCQUF5QixLQUFLLDJCQUEyQix1QkFBdUIsS0FBSyw0QkFBNEIs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Q0FBa0MseUJBQXlCLDhCQUE4QixTQUFTLHlDQUF5Qyx3QkFBd0IsOEJBQThCLGlDQUFpQyxVQUFVLGtDQUFrQyx5QkFBeUIsNkJBQTZCLFNBQVMsb0JBQW9CLHNDQUFzQyxlQUFlLHVDQUF1QyxXQUFXLHNCQUFzQiw4QkFBOEIsc0NBQXNDLHdCQUF3QiwyQkFBMkIsV0FBVyx5Q0FBeUMsNkJBQTZCLFdBQVcsaUNBQWlDLDZCQUE2QixXQUFXLGFBQWEsbUNBQW1DO0FBQ3BuUjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9kYzgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzMwMDs1MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxufVxcclxcbi5jYWJlY2FsaG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4uY2FiZWNhbGhvIC5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uY2FiZWNhbGhvIG5hdiBsaSBhIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAvKiAxMCBkZXRlcm1pbmEgbyBlc3Bhw6dvIGRlIGFsdHVyYVxcclxcbiAgICAgICAgIDIwIGRldGVybWluYSBvIGVzcGHDp28gZG8gbGFkbyAqL1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5jYWJlY2FsaG8gbmF2IGxpIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDExZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHkgLmltYWdlbS1mdW5kbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmltYWdlbS1mdW5kbyAuZXN0YWRpbyB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VtLWZ1bmRvOjphZnRlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAwJSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjgwMTU0MDU5OTE0OTgxNjEpIDUwJSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSAubWVudSBuYXYgdWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGV1ZG8ge1xcclxcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIHZoIDogY29tbyBzZSBwZWdhc3NlIG8gdGFtYW5obyBkYSBqYW5lbGEgdG90YWwgZG8gdXN1w6FyaW8gZSBjb2xvY2Fzc2Ugb3MgZWxlbWVudG9zIGRlIGFjb3JkbyBjb20gbyB0YW1hbmhvIGRhIGphbmVsYSBkZSB2aXN1YWxpemHDp8OjbyAqL1xcclxcbiAgICAvKiAxMzIgcmVwcmVzZW50YSBvIHRhbWFuaG8gZG8gbWVudSAqL1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzJweCk7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGV1ZG8gLnRpdHVsb3tcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRldWRvIC5pbWFnZW0ge1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRldWRvIC50ZXh0byBwIHtcXHJcXG4gICAgY29sb3I6ICNhOGFkYjc7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRldWRvIC50ZXh0byAudGl0dWxvIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjIwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5pbWFnZW0tZnVuZG8ge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuY29udGV1ZG8ge1xcclxcbiAgICAgIC8qIHdyYXAgdmFpIGRpemVyOiBzZSBuw6NvIHRlbSBlc3Bhw6dvIG5hIHRlbGEgYW8gaW52w6lzIGRlIGZpY2FyIGNvbSBvIHNjcm9sbCwgc2ltcGxlc21lbnRlIGpvZ3VlIGVzc2VzIGVsZW1lbnRvcyBwcmEgYmFpeG8gKi9cXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgIGdhcDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5jb250ZXVkbyAuaW1hZ2VtICB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC8qIC5jb250YWluZXIuaW5mb3JtYWNvZXMge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9ICovXFxyXFxuICBcXHJcXG4gICAgLmNvbnRldWRvIC50ZXh0byB7XFxyXFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgICBib2R5e1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5jYWJlY2FsaG8ge1xcclxcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAuY29udGV1ZG8gLmltYWdlbS10aXR1bG97XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogNzUlO1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgIC5jb250ZXVkbyAudGV4dG97XFxyXFxuICAgICAgICAgIGNvbG9yOiAjMDcwNzBlO1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRIQUE0SDs7QUFFNUg7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7d0NBQ3NDO0VBQ3RDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUDs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5SUFBeUk7SUFDekkscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSTtNQUNFLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLDJIQUEySDtNQUMzSCxlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixTQUFTO0lBQ1g7O0lBRUE7TUFDRSxjQUFjO01BQ2QsbUJBQW1CO0lBQ3JCOztJQUVBOzs7O09BSUc7O0lBRUg7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO0lBQ3BCOzs7RUFHRjs7RUFFQTtNQUNJO1VBQ0ksd0JBQXdCO01BQzVCO01BQ0E7VUFDSSxlQUFlO1VBQ2YsdUJBQXVCO1VBQ3ZCLFNBQVM7VUFDVCxZQUFZO01BQ2hCOztNQUVBO1VBQ0ksY0FBYztNQUNsQjs7TUFFQTtVQUNJLGNBQWM7TUFDbEI7O0VBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbn1cXHJcXG4uY2FiZWNhbGhvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLmNhYmVjYWxobyAubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmNhYmVjYWxobyBuYXYgbGkgYSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgLyogMTAgZGV0ZXJtaW5hIG8gZXNwYcOnbyBkZSBhbHR1cmFcXHJcXG4gICAgICAgICAyMCBkZXRlcm1pbmEgbyBlc3Bhw6dvIGRvIGxhZG8gKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FiZWNhbGhvIG5hdiBsaSBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTAxMWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2R5IC5pbWFnZW0tZnVuZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5pbWFnZW0tZnVuZG8gLmVzdGFkaW8ge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlbS1mdW5kbzo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMSkgMCUsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC44MDE1NDA1OTkxNDk4MTYxKSA1MCUsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHkgLm1lbnUgbmF2IHVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRldWRvIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiB2aCA6IGNvbW8gc2UgcGVnYXNzZSBvIHRhbWFuaG8gZGEgamFuZWxhIHRvdGFsIGRvIHVzdcOhcmlvIGUgY29sb2Nhc3NlIG9zIGVsZW1lbnRvcyBkZSBhY29yZG8gY29tIG8gdGFtYW5obyBkYSBqYW5lbGEgZGUgdmlzdWFsaXphw6fDo28gKi9cXHJcXG4gICAgLyogMTMyIHJlcHJlc2VudGEgbyB0YW1hbmhvIGRvIG1lbnUgKi9cXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMycHgpO1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRldWRvIC50aXR1bG97XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZXVkbyAuaW1hZ2VtIHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZXVkbyAudGV4dG8gcCB7XFxyXFxuICAgIGNvbG9yOiAjYThhZGI3O1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZXVkbyAudGV4dG8gLnRpdHVsbyBwIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuaW1hZ2VtLWZ1bmRvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmNvbnRldWRvIHtcXHJcXG4gICAgICAvKiB3cmFwIHZhaSBkaXplcjogc2UgbsOjbyB0ZW0gZXNwYcOnbyBuYSB0ZWxhIGFvIGludsOpcyBkZSBmaWNhciBjb20gbyBzY3JvbGwsIHNpbXBsZXNtZW50ZSBqb2d1ZSBlc3NlcyBlbGVtZW50b3MgcHJhIGJhaXhvICovXFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICBnYXA6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuY29udGV1ZG8gLmltYWdlbSAge1xcclxcbiAgICAgIG1heC13aWR0aDogNTAlO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAvKiAuY29udGFpbmVyLmluZm9ybWFjb2VzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfSAqL1xcclxcbiAgXFxyXFxuICAgIC5jb250ZXVkbyAudGV4dG8ge1xcclxcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxyXFxuICAgICAgYm9keXtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuY2FiZWNhbGhvIHtcXHJcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgLmNvbnRldWRvIC5pbWFnZW0tdGl0dWxve1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDc1JTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAuY29udGV1ZG8gLnRleHRve1xcclxcbiAgICAgICAgICBjb2xvcjogIzA3MDcwZTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./src/styles/global.css\n"));

/***/ })

});
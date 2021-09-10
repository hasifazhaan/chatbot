/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const get=__webpack_require__(/*! ./response.js */ \"./response.js\")\t\t//getting ans from response.js file\r\nlet area=document.querySelector(\"#tx\")\t\t\t\t\t\r\nconst input=document.querySelector(\"#ur\");\t\t\t\t\t//getting the data from html(index.html)\r\nconst sub=document.querySelector(\"#bt\");    //send button\r\nconst clear=document.querySelector(\"#cl\")   //clear button\r\nvar k=0;\r\n\r\nfunction submit_on()\r\n{\r\n\tlet message=input.value;\t\t\t\t\t\t\t\r\n\tinput.value=\" \";\r\n\tarea.value+=`>${message}\\n`;\r\n\tlet ans=get(message);\r\n\tsetTimeout(() =>{\r\n\t\t\t\t\t\tif(ans=='flip')\r\n\t\t\t\t\t\t{\tarea.value +=`OK dude!\\n`\r\n\t\t\t\t\t\t\tsetTimeout(() =>{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t//for flip\r\n\t\t\t\t\t\t\t\t\t\t\t\tk+=360;\r\n\t\t\t\t\t\t\t\t\t\t\t\tarea.style.transform = \"rotatex(\" + k +\"deg)\";\r\n\t\t\t\t\t\t\t\t\t\t\t\tarea.style.transitionDuration = \"3.2s\";\r\n\t\t\t\t\t\t\t\t\t\t\t},800)\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tif(ans==\"home\")\t\t\t\t\t\t\t\t\t\t\t\t\t\t//home point\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tvar height=\r\n\t\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\t\t$(document).ready(()=>\r\n\t\t\t\t\t\t\t\t\t{\t\t\r\n\t\t\t\t\t\t\t\t\t\t$(\".arrow\").show();\r\n\t\t\t\t\t\t\t\t\t\t$(\".arrow\").animate({\"top\": \"2px\"});\r\n\t\t\t\t\t\t\t\t\t\t$(\".arrow_mid\").animate({\"height\":\"90px\"});\r\n\t\t\t\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\t\t\t\t$(\".arrow\").hide();\r\n\t\t\t\t\t\t\t\t\t\t},2000);\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t},100)\r\n\t\t\t\t\t\t\t\treturn\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tif(ans==' ')\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tarea.value+=` ${ans}\\n`\r\n\t\t\t\t\t\t\t\tarea.value+=`here are some result from google\\n`;\t\t\t\t\t\t\t//google result\r\n\t\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\twindow.open(\"https://www.google.com/search?q=\"+message, \"_blank\"); \r\n\t\t\t\t\t\t\t\t },3000);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\telse{\r\n\t\t\t\t\t\t\t\tarea.value+=` ${ans}\\n`\t\t\t\t\t\t\t\t\t\t\t\t\t//basic function\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},350);\r\n\r\n\t\r\n}\r\n\r\nsub.addEventListener(\"click\",submit_on,true);     //click event\r\ninput.addEventListener(\"keyup\",e =>{\r\n\tif(e.key===\"Enter\")\t\t\t\t\t\t\t//enter click\r\n\t\tsubmit_on();\r\n\r\n})\r\n\r\nclear.addEventListener(\"click\",(e)=>\r\n\t{\r\n\t\tarea.value=\" \";\t\t\t\t\t\t//clear button\r\n\t});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./response.js":
/*!*********************!*\
  !*** ./response.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (message)=>{\r\n\tmessage=message.toLowerCase()\r\n\tconsole.log(message);\r\n\t\tswitch(message)\r\n\t\t{\r\n\t\t\tcase ' hii':\r\n\t\t\tcase ' hello':\r\n\t\t\t\treturn `hello how may i help u?`;\r\n\t\t\tcase' thanks':\r\n\t\t\tcase' thankyou':\r\n\t\t\t\treturn` glad to help`;\r\n\t\t\tcase' wow':\r\n\t\t\tcase' bravo':\r\n\t\t\t\treturn`thankyou`;\r\n\t\t\tcase ' how are you':\r\n\t\t\t\treturn `doing good,what about u?`;\r\n\t\t\tcase ' fine':\r\n\t\t\t\treturn` glad to hear`\r\n\t\t\tcase ' ok':\r\n\t\t\tcase ' k':\r\n\t\t\t\treturn` k`;\r\n\t\t\tdefault:\r\n\t\t\tif(message.includes(\"bye\"))\r\n\t\t\t\treturn`sayonara`\r\n\t\t\tif(message.includes(\"your name\"))\r\n\t\t\t\treturn(`my name is Rahul\\n naam to suna hoga`);\r\n\t\t\tif(message.includes(\"born\")||message.includes(\"age\"))\r\n\t\t\t\treturn `i was born on(06/mar/2020)`;\r\n\t\t\tif(message.includes(\"todays date\"))\r\n\t\t\t{\r\n\t\t\t\tvar d=Date();\r\n\t\t\t\treturn` date:${d}`\r\n\t\t\t}\r\n\t\t\tif(message.includes(\"do a flip\"))\r\n\t\t\t{\r\n\t\t\t\treturn('flip');\r\n\t\t\t}\r\n\t\t\tif(message.includes(\"home\"))\r\n\t\t\t{\r\n\t\t\t\treturn(\"home\");\r\n\t\t\t}\r\n\t\t\tif(message.includes(\"what can\")&&message.includes(\"do\"))\r\n\t\t\t{\r\n\t\t\t\treturn(`I can talk to u \\ndo a flip\\nor u can ask me anything`)\r\n\t\t\t}\r\n\t\t\tif(message.includes(\"who are\"))\r\n\t\t\t{\r\n\t\t\t\t$(document).ready(()=>\r\n\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t$(\"#imge\").animate({\"height\":\"300px\",\"width\":\"300px\"});\r\n\t\t\t\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\t\t\t\t $(\"#imge\").animate({\"height\":\"30px\" ,\"width\":\"30px\"}); \r\n\t\t\t\t\t\t\t\t\t\t},3000)\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\treturn(`I am your virtual assistant ^-^`);\r\n\t\t\t}\r\n\t\t\treturn' ';\r\n\t\t}\r\n}\n\n//# sourceURL=webpack:///./response.js?");

/***/ })

/******/ });
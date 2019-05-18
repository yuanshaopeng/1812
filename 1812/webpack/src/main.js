//打包入口文件
import {div} from "./js/m2.js";
import $ from "jquery";
import "./css/index.css";
import "./css/index.scss";
import lo from "./img/lo.png"
$("body").html(div);
let img = new Image();
img.src = lo;
div.appendChild(img);
// document.body.appendChild(div);
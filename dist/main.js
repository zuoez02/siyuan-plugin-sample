"use strict";const l=require("siyuan");class e extends l.Plugin{constructor(){super()}onload(){this.el=document.createElement("button"),this.el.innerText="Hello World",l.clientApi.addToolbarRight(this.el),console.log("plugin load")}onunload(){console.log("plugin unload")}}module.exports=e;
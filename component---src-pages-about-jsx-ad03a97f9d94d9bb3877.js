webpackJsonp([0x83323ebd9d39],{393:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(68),f=r(c),s=n(69),p=r(s),d=n(49),b=r(d),m=n(16),y=r(m);n(712);var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"about-container md-grid mobile-fix"},i.default.createElement(f.default,{className:"md-grid md-cell--8"},i.default.createElement("div",{className:"about-wrapper"},i.default.createElement("img",{src:y.default.userAvatar,className:"about-img",alt:y.default.userName}),i.default.createElement(p.default,null,i.default.createElement("p",{className:"about-text md-body-1"},y.default.userDescription)),i.default.createElement(b.default,{labeled:!0,config:y.default}))))},t}(l.Component);t.default=h,e.exports=t.default},712:function(e,t){},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(90),f=r(c);n(89);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.default.createElement(f.default,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},t.prototype.render=function(){var e=this.props.config.userLinks;return e?i.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(l.Component);t.default=s,e.exports=t.default},89:function(e,t){},405:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),c=n(23),f=r(c),s=n(393),p=r(s),d=n(16),b=r(d),m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"about-container"},i.default.createElement(f.default,null,i.default.createElement("title",null,"About | "+b.default.siteTitle),i.default.createElement("link",{rel:"canonical",href:b.default.siteUrl+"/about/"})),i.default.createElement(p.default,null))},t}(l.Component);t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-ad03a97f9d94d9bb3877.js.map
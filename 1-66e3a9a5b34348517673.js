(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(e,t){e.exports={blogPostDir:"sample-posts",siteTitle:"Nigel Schuster",siteTitleAlt:"Nigel Schuster",siteUrl:"https://www.nigel-schuster.de",pathPrefix:"/",fixedFooter:!1,siteDescription:"Homepage/Blog of Nigel Schuster. This will mostly talk about various Software Engineering topics, such as Operating Systems or Machine Learning.",siteRss:"/rss.xml",siteFBAppID:"2019311021727351",siteGATrackingID:"UA-113900394-1",disqusShortname:"nigel-schuster-blog",postDefaultCategoryID:"Tech",userName:"Nigel Schuster",userLocation:"New York City, NY",userAvatar:"https://avatars1.githubusercontent.com/u/7909844",userDescription:"Just another software engineer in the city. Interested in everything ranging from Operating Systems to Machine Learning and Frontend Development. Also huge fan of compilers and good language design.",userLinks:[{label:"GitHub",url:"https://github.com/Neitsch",iconClassName:"fa fa-github"},{label:"LinkedIn",url:"https://www.linkedin.com/in/nigelschuster/",iconClassName:"fa fa-linkedin"},{label:"AngelList",url:"https://angel.co/nigel-schuster/",iconClassName:"fa fa-angellist"},{label:"Email",url:"mailto:nigel.schusters+website@googlemail.com",iconClassName:"fa fa-envelope"},{label:"Search",url:"/search",iconClassName:"fa fa-search"}],copyright:"Copyright © 2018. Nigel Schuster"}},222:function(e,t,n){"use strict";n(595),n(596),n(34);var a=n(7),r=n.n(a),i=n(0),s=n.n(i),o=n(164),l=n.n(o),c=(n(599),n(600)),u=n.n(c),p=n(251),m=(n(622),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config;return s.a.createElement("div",{className:"toolbar-actions"},s.a.createElement("div",{className:"userlinks-container"},s.a.createElement(p.a,{config:e})))},t}(i.Component)),f=n(200),h=n.n(f),g=n(10),d=n.n(g),E=n(156),b=n.n(E),y=(n(623),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=b.a.siteRss,t=this.props.userLinks,n=b.a.copyright,a=b.a.fixedFooter;return n?s.a.createElement("footer",{className:a?"footer footer-fixed":"footer"},t?s.a.createElement(p.a,{config:b.a,labeled:!0}):null,s.a.createElement("div",{className:"notice-container"},s.a.createElement("div",{className:"copyright"},s.a.createElement("h4",null,n)),s.a.createElement("div",{className:"rss"},s.a.createElement(d.a,{to:e},s.a.createElement(h.a,{flat:!0,secondary:!0,iconClassName:"fa fa-rss"},"Subscribe"))),s.a.createElement("div",{className:"based-on"},s.a.createElement("h4",null,"Thank you to ",s.a.createElement("a",{href:"https://github.com/Vagr9K"},"Vagr9K")," for the theme.")))):null},t}(i.Component)),v=(n(70),n(171)),N=n.n(v);var T=function(e){var t=[{primaryText:"Home",leftIcon:s.a.createElement(N.a,null,"home"),component:d.a,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,leftIcon:s.a.createElement(N.a,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",leftIcon:s.a.createElement(N.a,null,"person"),component:d.a,to:"/about/"}),t},w=(n(624),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.config,a=e.LocalTitle,r="About"!==a;return s.a.createElement(u.a,{drawerTitle:n.siteTitle,toolbarTitle:a,contentClassName:"main-content",navItems:T(n),mobileDrawerType:u.a.DrawerTypes.TEMPORARY,tabletDrawerType:u.a.DrawerTypes.TEMPORARY,desktopDrawerType:u.a.DrawerTypes.TEMPORARY,toolbarActions:s.a.createElement(m,{config:n})},s.a.createElement("div",{className:"main-container"},t),s.a.createElement(y,{userLinks:r}))},t}(i.Component));n(625),n(626);n.d(t,"a",function(){return k});var k=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=b.a.pathPrefix?b.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags"===n)a="Tags";else if("categories"===n)a="Categories";else if("about"===n)a="About";else if(n.includes("articles"))a="Article";else if(n.includes("tags")){a="Tagged in "+e(n.replace("tags","").replace("/","").replace("-"," "))}else if(n.includes("categories")){a=""+e(n.replace("categories","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return s.a.createElement(w,{config:b.a,LocalTitle:this.getLocalTitle()},s.a.createElement("div",null,s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:b.a.siteDescription})),e))},t}(s.a.Component)},251:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),s=n.n(i),o=n(200),l=n.n(o),c=(n(520),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return s.a.createElement(l.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},n.render=function(){return this.props.config.userLinks?s.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component));t.a=c},520:function(e,t,n){},622:function(e,t,n){},623:function(e,t,n){},624:function(e,t,n){},625:function(e,t,n){},626:function(e,t,n){}}]);
//# sourceMappingURL=1-66e3a9a5b34348517673.js.map
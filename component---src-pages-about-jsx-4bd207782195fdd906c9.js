(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(161),c=a.n(l),m=a(165),s=a.n(m),p=a(170),u=a.n(p),E=a(252),d=a(154),f=a.n(d),g=(a(629),a(23),a(73),a(232)),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,Object.assign({addiitionalJsonLD:[{"@context":"http://schema.org","@type":"Person",name:f.a.userName,url:f.a.siteUrl,image:f.a.userAvatar,email:f.a.userLinks.find(function(e){return"Email"===e.label}).url,sameAs:f.a.userLinks.filter(function(e){return!!e.external}).map(function(e){return e.url})}]},this.props)))},t}(i.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"about-container md-grid mobile-fix"},o.a.createElement(s.a,{className:"md-grid md-cell--8"},o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("img",{src:f.a.userAvatar,className:"about-img",alt:f.a.userName}),o.a.createElement(u.a,null,o.a.createElement("p",{className:"about-text md-body-1"},f.a.userDescription)),o.a.createElement(E.a,{labeled:!0,config:f.a}))),o.a.createElement(h,null))},t}(i.Component),b=a(222),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(b.a,{location:this.props.location},o.a.createElement("div",{className:"about-container"},o.a.createElement(c.a,null,o.a.createElement("title",null,"About | "+f.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:f.a.siteUrl+"/about/"})),o.a.createElement(y,null)))},t}(i.Component);t.default=w},232:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(161),c=a.n(l),m=a(154),s=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,i=this.props,l=i.postNode,m=i.postPath,p=i.postSEO,u=i.addiitionalJsonLD;if(p){var E=l.frontmatter;e=E.title,t=E.description?E.description:l.excerpt,a=E.cover,n=s.a.siteUrl+s.a.pathPrefix+m,r=l.frontmatter.tags.join(",")}else e=s.a.siteTitle,t=s.a.siteDescription,a=s.a.siteLogo;var d="/"===s.a.pathPrefix?"":s.a.pathPrefix;a=s.a.siteUrl+d+a;var f=s.a.siteUrl+s.a.pathPrefix,g=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),r?o.a.createElement("meta",{property:"keywords",content:r}):null,o.a.createElement("meta",{name:"author",content:s.a.userName}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g.concat(u))),o.a.createElement("meta",{property:"og:url",content:p?n:f}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a})))},t}(i.Component);t.a=p},629:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-about-jsx-4bd207782195fdd906c9.js.map
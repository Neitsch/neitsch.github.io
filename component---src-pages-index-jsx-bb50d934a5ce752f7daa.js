(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(161),s=a.n(l),c=a(233),m=a(232),p=a(222),d=a(154),u=a.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(p.a,{location:this.props.location},o.a.createElement("div",{className:"index-container"},o.a.createElement(s.a,null,o.a.createElement("title",null,u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:""+u.a.siteUrl})),o.a.createElement(m.a,{postEdges:e}),o.a.createElement(c.a,{postEdges:e})))},t}(o.a.Component);t.default=f;var h="721224472"},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(201),s=a.n(l),c=a(10),m=a.n(c),p=a(227),d=a.n(p),u=(a(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return o.a.createElement(m.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+s.a.kebabCase(e)},o.a.createElement(d.a,{label:e,className:"post-preview-tags"}))}))},t}(i.Component));t.a=u},174:function(e,t,a){},190:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(33),o=a.n(i),l=a(228),s=a.n(l),c=a(0),m=a.n(c),p=a(165),d=a.n(p),u=a(168),f=a.n(u),h=a(200),E=a.n(h),g=a(183),v=a.n(g),y=a(170),w=a.n(y),b=a(171),x=a.n(b),N=a(10),R=a.n(N),T=a(191),k=a.n(T),z=a(173),L=(a(192),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(o()(o()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t,n=t?162:225;return m.a.createElement(d.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},m.a.createElement(R.a,{style:{textDecoration:"none"},to:e.path},m.a.createElement(k.a,{style:{height:n+"px"},className:"post-preview-cover"},m.a.createElement(s.a,{sizes:e.cover.childImageSharp.sizes}),m.a.createElement(T.MediaOverlay,null,m.a.createElement(f.a,{title:e.title},m.a.createElement(E.a,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),m.a.createElement(f.a,{expander:a,avatar:m.a.createElement(v.a,{icon:m.a.createElement(x.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),m.a.createElement(w.a,{expandable:a},e.excerpt,m.a.createElement(z.a,{tags:e.tags})))},t}(c.Component));t.a=L},191:function(e,t,a){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var n=i(a(225)),r=i(a(226));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,t.Media=n.default,t.MediaOverlay=r.default},192:function(e,t,a){},232:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(161),s=a.n(l),c=a(154),m=a.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,i=this.props,l=i.postNode,c=i.postPath,p=i.postSEO,d=i.addiitionalJsonLD;if(p){var u=l.frontmatter;e=u.title,t=u.description?u.description:l.excerpt,a=u.cover,n=m.a.siteUrl+m.a.pathPrefix+c,r=l.frontmatter.tags.join(",")}else e=m.a.siteTitle,t=m.a.siteDescription,a=m.a.siteLogo;var f="/"===m.a.pathPrefix?"":m.a.pathPrefix;a=m.a.siteUrl+f+a;var h=m.a.siteUrl+m.a.pathPrefix,E=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return p&&E.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),r?o.a.createElement("meta",{property:"keywords",content:r}):null,o.a.createElement("meta",{name:"author",content:m.a.userName}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E.concat(d))),o.a.createElement("meta",{property:"og:url",content:p?n:h}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a})))},t}(i.Component);t.a=p},233:function(e,t,a){"use strict";a(70);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(190),s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(l.a,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-jsx-bb50d934a5ce752f7daa.js.map
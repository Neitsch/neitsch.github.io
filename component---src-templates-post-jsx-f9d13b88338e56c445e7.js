(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t);a(206);var n=a(8),r=a.n(n),o=a(43),i=a.n(o),s=a(0),l=a.n(s),c=a(174),m=a.n(c),p=a(501),u=a.n(p),d=a(180),E=a.n(d),h=a(175),f=a.n(h),g=a(178),y=a.n(g),v=a(192),N=a.n(v),b=a(181),w=a.n(b),x=a(364),C=a.n(x),S=a(260),z=(a(531),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=e.userAvatar,a=e.userName,n=e.userLocation,r=e.userDescription,o=e.userLinks,i=e.userTwitter,s=this.props.expanded,c=l.a.createElement(S.a,{config:this.props.config,labeled:s});return t||a||n||r?l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12 user-info"},l.a.createElement(y.a,{expander:!s,avatar:t&&l.a.createElement(N.a,{src:t,role:"presentation"}),title:a&&a,subtitle:i?l.a.createElement(Follow,{username:i,options:{count:"none"}}):"Author"}),l.a.createElement(E.a,{expandable:!s},n&&l.a.createElement(C.a,{label:n,iconBefore:!0},l.a.createElement(w.a,{iconClassName:"fa fa-map-marker"})),l.a.createElement("p",null,r&&r),c)):o?l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12 user-info"},c):null},t}(s.Component)),k=a(532),D=a.n(k),P=a(534),T=a.n(P),A=a(166),_=a.n(A),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(i()(i()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.postNode,a=e.expanded;if(!_.a.disqusShortname)return null;var n=t.frontmatter,r=_.a.siteUrl+_.a.pathPrefix+t.fields.slug;return l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12"},l.a.createElement(y.a,{title:"Comments",avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,null,"comment")}),expander:!a}),l.a.createElement(E.a,{expandable:!a},l.a.createElement(D.a,{shortname:_.a.disqusShortname,identifier:n.title,title:n.title,url:r,onNewComment:this.notifyAboutComment})),l.a.createElement(T.a,{toasts:this.state.toasts,onDismiss:this.onSnackbarDismiss}))},t}(s.Component),I=a(182),R=a(237),U=a.n(R),B=(a(542),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.mobile?180:350;return l.a.createElement("div",{style:{height:a+"px"},className:"md-grid md-cell--9 post-cover"},l.a.createElement(U.a,{outerWrapperClassName:"cover_image_wrapper",style:{width:"100%"},sizes:t.frontmatter.cover.childImageSharp.sizes}))},t}(s.Component)),F=a(12),j=a.n(F),O=a(211),W=a.n(O),q=(a(543),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode,t=e.frontmatter;return l.a.createElement("div",{className:"post-info"},l.a.createElement(y.a,{avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+t.date,subtitle:e.timeToRead+" min read"}),l.a.createElement(j.a,{className:"category-link",to:"/categories/"+W.a.kebabCase(t.category)},l.a.createElement(y.a,{avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,{iconClassName:"fa fa-folder-open"})}),title:"In category",subtitle:t.category})))},t}(s.Component)),J=a(875),M=a(876),H=a(877),Q=a(878),G=a(879),K=a(880),V=a(881),X=a(882),Y=a(883),Z=a(884),$=a(885),ee=a(886),te=a(887),ae=a(888),ne=a(889),re=a(890),oe=a(891),ie=a(892),se=(a(544),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,o=_.a.siteUrl+_.a.pathPrefix+a,i=n?36:48,s=function(e){return e>0?e:""};return l.a.createElement("div",{className:"social-links"},l.a.createElement(J.a,{url:o,title:r.title},l.a.createElement(M.a,{round:!0,size:i}),l.a.createElement(H.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(Q.a,{url:o,title:r.title},l.a.createElement(G.a,{round:!0,size:i})),l.a.createElement(K.a,{url:o},l.a.createElement(V.a,{round:!0,size:i}),l.a.createElement(X.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(Y.a,{url:o,quote:t.excerpt},l.a.createElement(Z.a,{round:!0,size:i}),l.a.createElement($.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(ee.a,{url:o,title:r.title,description:t.excerpt},l.a.createElement(te.a,{round:!0,size:i}),l.a.createElement(ae.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(ne.a,{url:o},l.a.createElement(re.a,{round:!0,size:i})),l.a.createElement(oe.a,{body:o,subject:r.title},l.a.createElement(ie.a,{round:!0,size:i})))},t}(s.Component)),le=(a(590),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode.fields;return l.a.createElement("div",{className:"post-suggestions md-grid md-cell--12"},l.a.createElement(j.a,{to:e.prevSlug,className:"post-suggestion"},l.a.createElement(w.a,{forceFontSize:!0,forceSize:64,className:"secondary-color arrow-nav"},"arrow_back"),l.a.createElement("div",{className:"headline-container hide-on-mobile"},l.a.createElement("h2",{className:"md-body-2 secondary-color"},"Previous"),l.a.createElement("h6",{className:"md-headline secondary-color"},e.prevTitle))),l.a.createElement(j.a,{to:e.nextSlug,className:"post-suggestion"},l.a.createElement("div",{className:"headline-container"},l.a.createElement("h2",{className:"md-body-2 secondary-color"},"Next"),l.a.createElement("h6",{className:"md-headline secondary-color"},e.nextTitle)),l.a.createElement(w.a,{forceFontSize:!0,forceSize:64,className:"secondary-color arrow-nav"},"arrow_forward")))},t}(s.Component)),ce=a(319),me=a(232);a(624),a(625);a.d(t,"default",function(){return pe}),a.d(t,"pageQuery",function(){return ue});var pe=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.state.mobile,t=this.props.pageContext.slug,a=!e,n=e?"post-overlap-mobile":"post-overlap",r=this.props.data.markdownRemark,o=r.frontmatter;return o.id||(o.id=t),o.category_id||(o.category_id=_.a.postDefaultCategoryID),l.a.createElement(me.a,{location:this.props.location},l.a.createElement("div",{className:"post-page md-grid md-grid--no-spacing"},l.a.createElement(m.a,null,l.a.createElement("title",null,o.title+" | "+_.a.siteTitle),l.a.createElement("link",{rel:"canonical",href:""+_.a.siteUrl+o.id})),l.a.createElement(ce.a,{postPath:t,postNode:r,postSEO:!0}),l.a.createElement(B,{postNode:r,mobile:e}),l.a.createElement("div",{className:"md-grid md-cell--9 post-page-contents mobile-fix "+n},l.a.createElement(u.a,{className:"md-grid md-cell md-cell--12 post"},l.a.createElement(E.a,{className:"post-body"},l.a.createElement("h1",{className:"md-display-2 post-header"},o.title),l.a.createElement(q,{postNode:r}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),l.a.createElement("div",{className:"post-meta"},l.a.createElement(I.a,{tags:o.tags}),l.a.createElement(se,{postPath:t,postNode:r,mobile:this.state.mobile}))),l.a.createElement(z,{className:"md-grid md-cell md-cell--12",config:_.a,expanded:a}),l.a.createElement(L,{postNode:r,expanded:a})),l.a.createElement(le,{postNode:r})))},t}(l.a.Component),ue="1390830422"},182:function(e,t,a){"use strict";a(57);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(211),l=a.n(s),c=a(12),m=a.n(c),p=a(236),u=a.n(p),d=(a(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return i.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return i.a.createElement(m.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+l.a.kebabCase(e)},i.a.createElement(u.a,{label:e,className:"post-preview-tags"}))}))},t}(o.Component));t.a=d},183:function(e,t,a){},319:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(174),l=a.n(s),c=a(166),m=a.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,o=this.props,s=o.postNode,c=o.postPath,p=o.postSEO;if(p){var u=s.frontmatter;e=u.title,t=u.description?u.description:s.excerpt,a=u.cover,n=m.a.siteUrl+m.a.pathPrefix+c,r=s.frontmatter.tags.join(",")}else e=m.a.siteTitle,t=m.a.siteDescription,a=m.a.siteLogo;var d="/"===m.a.pathPrefix?"":m.a.pathPrefix;a=m.a.siteUrl+d+a;var E=m.a.siteUrl+m.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return p&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:a}),r?i.a.createElement("meta",{property:"keywords",content:r}):null,i.a.createElement("meta",{name:"author",content:m.a.userName}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:p?n:E}),p?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:a}))},t}(o.Component);t.a=p},531:function(e,t,a){},542:function(e,t,a){},543:function(e,t,a){},544:function(e,t,a){},590:function(e,t,a){},624:function(e,t,a){},625:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-f9d13b88338e56c445e7.js.map
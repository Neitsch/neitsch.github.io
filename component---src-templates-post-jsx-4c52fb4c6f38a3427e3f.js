(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t);a(208);var n=a(8),r=a.n(n),o=a(43),i=a.n(o),s=a(0),l=a.n(s),c=a(175),m=a.n(c),p=a(505),u=a.n(p),d=a(181),E=a.n(d),h=a(176),f=a.n(h),g=a(179),v=a.n(g),y=a(194),N=a.n(y),b=a(182),w=a.n(b),x=a(365),C=a.n(x),S=a(263),z=(a(534),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config,t=e.userAvatar,a=e.userName,n=e.userLocation,r=e.userDescription,o=e.userLinks,i=e.userTwitter,s=this.props.expanded,c=l.a.createElement(S.a,{config:this.props.config,labeled:s});return t||a||n||r?l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12 user-info"},l.a.createElement(v.a,{expander:!s,avatar:t&&l.a.createElement(N.a,{src:t,role:"presentation"}),title:a&&a,subtitle:i?l.a.createElement(Follow,{username:i,options:{count:"none"}}):"Author"}),l.a.createElement(E.a,{expandable:!s},n&&l.a.createElement(C.a,{label:n,iconBefore:!0},l.a.createElement(w.a,{iconClassName:"fa fa-map-marker"})),l.a.createElement("p",null,r&&r),c)):o?l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12 user-info"},c):null},t}(s.Component)),k=a(535),T=a.n(k),D=a(537),P=a.n(D),A=a(167),_=a.n(A),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(i()(i()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.postNode,a=e.expanded;if(!_.a.disqusShortname)return null;var n=t.frontmatter,r=_.a.siteUrl+_.a.pathPrefix+t.fields.slug;return l.a.createElement(f.a,{className:"md-grid md-cell md-cell--12"},l.a.createElement(v.a,{title:"Comments",avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,null,"comment")}),expander:!a}),l.a.createElement(E.a,{expandable:!a},l.a.createElement(T.a,{shortname:_.a.disqusShortname,identifier:n.title,title:n.title,url:r,onNewComment:this.notifyAboutComment})),l.a.createElement(P.a,{toasts:this.state.toasts,onDismiss:this.onSnackbarDismiss}))},t}(s.Component),I=a(184),R=a(240),U=a.n(R),B=(a(544),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.mobile?180:350;return l.a.createElement("div",{style:{height:a+"px"},className:"md-grid md-cell--9 post-cover"},l.a.createElement(U.a,{outerWrapperClassName:"cover_image_wrapper",style:{width:"100%"},sizes:t.frontmatter.cover.childImageSharp.sizes}))},t}(s.Component)),F=a(12),j=a.n(F),O=a(213),W=a.n(O),q=(a(545),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode,t=e.frontmatter;return l.a.createElement("div",{className:"post-info"},l.a.createElement(v.a,{avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+t.date,subtitle:e.timeToRead+" min read"}),l.a.createElement(j.a,{className:"category-link",to:"/categories/"+W.a.kebabCase(t.category)},l.a.createElement(v.a,{avatar:l.a.createElement(N.a,{icon:l.a.createElement(w.a,{iconClassName:"fa fa-folder-open"})}),title:"In category",subtitle:t.category})))},t}(s.Component)),J=a(890),M=a(892),H=a(893),Q=a(894),G=a(895),K=a(896),V=a(897),X=a(898),Y=a(899),Z=a(900),$=a(901),ee=a(902),te=a(903),ae=a(904),ne=a(905),re=a(906),oe=a(907),ie=a(908),se=a(909),le=(a(561),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,o=_.a.siteUrl+_.a.pathPrefix+a,i=n?36:48,s=function(e){return e>0?e:""};return null!=window&&"share"in window.navigator?l.a.createElement("div",{className:"social-links"},l.a.createElement(J.a,{onClick:function(){return navigator.share({title:r.title,text:t.excerpt,url:o})},secondary:!0,swapTheming:!0,flat:!0},"Share")):l.a.createElement("div",{className:"social-links"},l.a.createElement(M.a,{url:o,title:r.title},l.a.createElement(H.a,{round:!0,size:i}),l.a.createElement(Q.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(G.a,{url:o,title:r.title},l.a.createElement(K.a,{round:!0,size:i})),l.a.createElement(V.a,{url:o},l.a.createElement(X.a,{round:!0,size:i}),l.a.createElement(Y.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(Z.a,{url:o,quote:t.excerpt},l.a.createElement($.a,{round:!0,size:i}),l.a.createElement(ee.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(te.a,{url:o,title:r.title,description:t.excerpt},l.a.createElement(ae.a,{round:!0,size:i}),l.a.createElement(ne.a,{url:o},function(e){return l.a.createElement("div",{className:"share-count"},s(e))})),l.a.createElement(re.a,{url:o},l.a.createElement(oe.a,{round:!0,size:i})),l.a.createElement(ie.a,{body:o,subject:r.title},l.a.createElement(se.a,{round:!0,size:i})))},t}(s.Component)),ce=(a(607),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode.fields;return l.a.createElement("div",{className:"post-suggestions md-grid md-cell--12"},l.a.createElement(j.a,{to:e.prevSlug,className:"post-suggestion"},l.a.createElement(w.a,{forceFontSize:!0,forceSize:64,className:"secondary-color arrow-nav"},"arrow_back"),l.a.createElement("div",{className:"headline-container hide-on-mobile"},l.a.createElement("h2",{className:"md-body-2 secondary-color"},"Previous"),l.a.createElement("h6",{className:"md-headline secondary-color"},e.prevTitle))),l.a.createElement(j.a,{to:e.nextSlug,className:"post-suggestion"},l.a.createElement("div",{className:"headline-container"},l.a.createElement("h2",{className:"md-body-2 secondary-color"},"Next"),l.a.createElement("h6",{className:"md-headline secondary-color"},e.nextTitle)),l.a.createElement(w.a,{forceFontSize:!0,forceSize:64,className:"secondary-color arrow-nav"},"arrow_forward")))},t}(s.Component)),me=a(321),pe=a(234);a(640),a(641);a.d(t,"default",function(){return ue}),a.d(t,"pageQuery",function(){return de});var ue=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.state.mobile,t=this.props.pageContext.slug,a=!e,n=e?"post-overlap-mobile":"post-overlap",r=this.props.data.markdownRemark,o=r.frontmatter;return o.id||(o.id=t),o.category_id||(o.category_id=_.a.postDefaultCategoryID),l.a.createElement(pe.a,{location:this.props.location},l.a.createElement("div",{className:"post-page md-grid md-grid--no-spacing"},l.a.createElement(m.a,null,l.a.createElement("title",null,o.title+" | "+_.a.siteTitle),l.a.createElement("link",{rel:"canonical",href:""+_.a.siteUrl+o.id})),l.a.createElement(me.a,{postPath:t,postNode:r,postSEO:!0}),l.a.createElement(B,{postNode:r,mobile:e}),l.a.createElement("div",{className:"md-grid md-cell--9 post-page-contents mobile-fix "+n},l.a.createElement(u.a,{className:"md-grid md-cell md-cell--12 post"},l.a.createElement(E.a,{className:"post-body"},l.a.createElement("h1",{className:"md-display-2 post-header"},o.title),l.a.createElement(q,{postNode:r}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),l.a.createElement("div",{className:"post-meta"},l.a.createElement(I.a,{tags:o.tags}),l.a.createElement(le,{postPath:t,postNode:r,mobile:this.state.mobile}))),l.a.createElement(z,{className:"md-grid md-cell md-cell--12",config:_.a,expanded:a}),l.a.createElement(L,{postNode:r,expanded:a})),l.a.createElement(ce,{postNode:r})))},t}(l.a.Component),de="1390830422"},184:function(e,t,a){"use strict";a(57);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(213),l=a.n(s),c=a(12),m=a.n(c),p=a(239),u=a.n(p),d=(a(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return i.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return i.a.createElement(m.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+l.a.kebabCase(e)},i.a.createElement(u.a,{label:e,className:"post-preview-tags"}))}))},t}(o.Component));t.a=d},185:function(e,t,a){},321:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),s=a(175),l=a.n(s),c=a(167),m=a.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,o=this.props,s=o.postNode,c=o.postPath,p=o.postSEO;if(p){var u=s.frontmatter;e=u.title,t=u.description?u.description:s.excerpt,a=u.cover,n=m.a.siteUrl+m.a.pathPrefix+c,r=s.frontmatter.tags.join(",")}else e=m.a.siteTitle,t=m.a.siteDescription,a=m.a.siteLogo;var d="/"===m.a.pathPrefix?"":m.a.pathPrefix;a=m.a.siteUrl+d+a;var E=m.a.siteUrl+m.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:E,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return p&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:E,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:a}),r?i.a.createElement("meta",{property:"keywords",content:r}):null,i.a.createElement("meta",{name:"author",content:m.a.userName}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:p?n:E}),p?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:a}))},t}(o.Component);t.a=p},534:function(e,t,a){},544:function(e,t,a){},545:function(e,t,a){},561:function(e,t,a){},607:function(e,t,a){},640:function(e,t,a){},641:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-4c52fb4c6f38a3427e3f.js.map
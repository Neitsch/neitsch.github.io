(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(161),l=n.n(s),c=n(233),d=n(222),u=n(154),m=n.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location},o.a.createElement("div",{className:"tag-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,'Posts tagged as "'+e+'" | '+m.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:m.a.siteUrl+"/tags/"+e})),o.a.createElement(c.a,{postEdges:t})))},t}(o.a.Component),f="219564964"},173:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(201),l=n.n(s),c=n(10),d=n.n(c),u=n(227),m=n.n(u),p=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postNode;return o.a.createElement("div",{className:"post-tag-container"},e.frontmatter.tags&&e.frontmatter.tags.map(function(e){return o.a.createElement(d.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+l.a.kebabCase(e)},o.a.createElement(m.a,{label:e,className:"post-preview-tags"}))}))},t}(i.Component));t.a=p},174:function(e,t,n){},190:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(33),o=n.n(i),s=n(228),l=n.n(s),c=n(0),d=n.n(c),u=n(165),m=n.n(u),p=n(168),f=n.n(p),h=n(200),g=n.n(h),E=n(183),v=n.n(E),y=n(170),w=n.n(y),b=n(171),k=n.n(b),N=n(10),z=n.n(N),M=n(191),R=n.n(M),x=n(173),C=(n(192),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,a=t?162:225;return d.a.createElement(m.a,{key:e.fields.slug,raise:!0,className:"md-grid md-cell md-cell--12"},d.a.createElement(z.a,{style:{textDecoration:"none"},to:e.fields.slug},d.a.createElement(R.a,{style:{height:a+"px"},className:"post-preview-cover"},d.a.createElement(l.a,{sizes:e.frontmatter.cover.childImageSharp.sizes}),d.a.createElement(M.MediaOverlay,null,d.a.createElement(f.a,{title:e.frontmatter.title},d.a.createElement(g.a,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),d.a.createElement(f.a,{expander:n,avatar:d.a.createElement(v.a,{icon:d.a.createElement(k.a,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.frontmatter.date,subtitle:e.timeToRead+" min read"}),d.a.createElement(w.a,{expandable:n},e.excerpt,d.a.createElement(x.a,{postNode:e})))},t}(c.Component));t.a=C},191:function(e,t,n){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var a=i(n(225)),r=i(n(226));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.Media=a.default,t.MediaOverlay=r.default},192:function(e,t,n){},233:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(190),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return console.log("Props"),console.log(this.props),o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},this.props.queryData.allMarkdownRemark.edges.map(function(e){return o.a.createElement(s.a,{key:e.node.id,postInfo:e.node})})))},t}(o.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-621aaa25a0c32e58d1cd.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3938:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});n(7294);var s=n(1664);function a(e){return"/"===e?"/":"/[page]"}var i=n(5893),r=function(e){return(0,i.jsxs)("div",{className:"text-xl flex justify-between py-5 uppercase",children:[e.previous&&(0,i.jsx)("div",{children:(0,i.jsx)(s.default,{href:a(e.previous),as:e.previous,children:(0,i.jsx)("a",{children:"\u2190 Newer Posts"})})}),e.next&&(0,i.jsx)("div",{className:"text-right ml-auto",children:(0,i.jsx)(s.default,{href:a(e.next),as:e.next,children:(0,i.jsx)("a",{children:"Older Posts \u2192"})})})]})},c=function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"p-5 md:p-0 grid grid-cols-1 xl:grid-cols-2 gap-5 items-start ",children:e.posts.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(e.slug),passHref:!0,children:(0,i.jsxs)("section",{className:"relative block group h-80 cursor-pointer",children:[(0,i.jsx)("span",{className:"absolute inset-0 border-2 border-black border-dashed"}),(0,i.jsxs)("div",{className:"relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2",children:[(0,i.jsxs)("div",{className:"px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute",children:[(0,i.jsxs)("h2",{className:"font-semibold mb-2 mt-5  uppercase",children:["#",e.category]}),(0,i.jsx)("h2",{className:"mt-4 text-2xl font-medium",children:e.title})]}),(0,i.jsxs)("div",{className:"absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative",children:[(0,i.jsx)("h2",{className:"mt-4 text-2xl font-medium",children:e.title}),(0,i.jsx)("p",{className:"mt-4",children:e.description.substring(0,150)}),(0,i.jsx)("p",{className:"mt-8 font-bold",children:"Read more"})]})]})]})}),(0,i.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(e.slug),passHref:!0,children:(0,i.jsxs)("a",{className:"hidden",children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("h2",{children:e.description})]})}),(0,i.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(e.slug),passHref:!0,children:(0,i.jsx)("a",{className:"hidden",children:(0,i.jsxs)("h1",{children:[e.category," ",e.title]})})}),(0,i.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(e.slug),passHref:!0,children:(0,i.jsx)("a",{className:"hidden",children:(0,i.jsx)("h1",{children:e.title})})})]},e.slug)}))}),(0,i.jsx)(r,{previous:e.pagination.previous,next:e.pagination.next})]})}},290:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});n(7294);var s=n(9008),a=n(1163),i=n(457);function r(e){return e.replace(/\/?$/,"/")}var c=n(5893),o=function(e){var t=(0,a.useRouter)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.default,{children:[(0,c.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,c.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,c.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,c.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon"),(0,c.jsx)("title",{children:"".concat(e.title," | ").concat(i.X.site_name)}),(0,c.jsx)("meta",{name:"description",content:e.description?e.description:i.X.description},"description"),(0,c.jsx)("meta",{name:"author",content:"Crypto Basket"},"author"),e.canonical&&(0,c.jsx)("link",{rel:"canonical",href:e.canonical},"canonical"),(0,c.jsx)("meta",{property:"og:title",content:"".concat(e.title," Live Price Chart & News | ").concat(i.X.site_name)},"og:title"),(0,c.jsx)("meta",{property:"og:description",content:e.description?e.description:i.X.description},"og:description"),(0,c.jsx)("meta",{property:"og:locale",content:"en"},"og:locale"),(0,c.jsx)("meta",{property:"og:site_name",content:i.X.site_name},"og:site_name"),e.post&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("meta",{property:"og:type",content:"article"},"og:type"),(0,c.jsx)("meta",{property:"og:image",content:"".concat(e.post.image.replace("cdn://",i.X.cdn))},"og:image"),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,c.jsx)("meta",{property:"article:published_time",content:new Date(e.post.date).toISOString()},"article:published_time"),(0,c.jsx)("meta",{property:"article:modified_time",content:new Date(e.post.date).toISOString()},"article:modified_time"),(0,c.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'\n          {\n            "description": "'.concat(e.description?e.description:i.X.description,'",\n            "author": {\n              "@type": "Person",\n              "name": "Crypto Basket"\n            },\n            "@type": "BlogPosting",\n            "url": "').concat(i.X.url).concat(t.basePath).concat(r(t.asPath),'",\n            "publisher": {\n              "@type": "Organization",\n              "logo": {\n                "@type": "ImageObject",\n                "url": "').concat(i.X.url).concat(t.basePath,'/logo.png"\n              },\n              "name": "Crypto Basket"\n            },\n            "headline": "').concat(e.title," Live Price Chart & News | ").concat(i.X.site_name,'",\n            "image": ["').concat(e.post.image.replace("cdn://",i.X.cdn),'"],\n            "datePublished": "').concat(new Date(e.post.date).toISOString(),'",\n            "dateModified": "').concat(new Date(e.post.date).toISOString(),'",\n            "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "').concat(i.X.url).concat(t.basePath).concat(r(t.asPath),'"\n            },\n            "@context": "http://schema.org"\n          }')}},"ldjson")]})]})})}},3639:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o}});n(7294);var s=n(3938),a=n(290),i=n(1076),r=n(457),c=n(5893),o=!0;t.default=function(e){return(0,c.jsx)(i.o,{meta:(0,c.jsx)(a.h,{title:"Latest Crypto Blockchain Projects ",description:r.X.description}),children:(0,c.jsx)(s.T,{posts:e.posts,pagination:e.pagination})})}},1076:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});n(7294);var s=n(1664),a=n(5893),i=function(e){return(0,a.jsxs)("div",{className:"px-5 py-5 mx-auto container",children:[e.meta,(0,a.jsxs)("div",{className:"flex flex-col flex-wrap md:flex-row items-center justify-between py-6 ",children:[(0,a.jsx)("div",{className:"relative flex flex-col md:flex-row",children:(0,a.jsx)(s.default,{href:"/",children:(0,a.jsx)("div",{className:"flex items-center mb-5 font-bold text-gray-900 lg:w-auto text-sm md:text-2xl cursor-pointer",children:"CRYPTOBASKET"})})}),(0,a.jsx)("div",{className:"inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end",children:(0,a.jsx)("nav",{className:"flex flex-wrap items-center space-x-4 text-sm md:text-lg font-semibold  sm:space-x-6  cursor-pointer",children:(0,a.jsx)(s.default,{href:"/about/",children:"ABOUT"})})})]}),(0,a.jsx)("div",{className:"py-5 lg:py-20",children:e.children})]})}},457:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var s={site_name:"Crypto Basket",title:"Crypto Basket",description:"Open Source Blockchain & Cryptocurrency Projects Directory.",pagination_size:10,url:"https://cryptobasket.org",cdn:"https://cdn.cryptobasket.org/"}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3639)}])}},function(e){e.O(0,[814,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
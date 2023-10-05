import{_ as a,C as e,o as t,c as i,H as r,w as l,k as c,a as o,Q as h}from"./chunks/framework.bc643b65.js";const n=JSON.parse('{"title":"微信小程序中路由跳转的方式有哪些？区别？","description":"","frontmatter":{"createTime":"2022/10/09","tag":"westore"},"headers":[],"relativePath":"interview-question/微信小程序中路由跳转的方式有哪些？.md","filePath":"s/前端面试题/小程序/微信小程序中路由跳转的方式有哪些？.md","lastUpdated":1696495218000}'),s={name:"interview-question/微信小程序中路由跳转的方式有哪些？.md"},b=c("h1",{id:"微信小程序中路由跳转的方式有哪些-区别",tabindex:"-1"},[o("微信小程序中路由跳转的方式有哪些？区别？ "),c("a",{class:"header-anchor",href:"#微信小程序中路由跳转的方式有哪些-区别","aria-label":'Permalink to "微信小程序中路由跳转的方式有哪些？区别？"'},"​")],-1),d=h('<h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>微信小程序拥有web网页和Application共同的特征，我们的页面都不是孤立存在的，而是通过和其他页面进行交互，来共同完成系统的功能 在微信小程序中，每个页面可以看成是一个 pageModel，pageModel 全部以栈的形式进行管理</p><h2 id="二、有哪些" tabindex="-1">二、有哪些 <a class="header-anchor" href="#二、有哪些" aria-label="Permalink to &quot;二、有哪些&quot;">​</a></h2><h3 id="常见的微信小程序页面跳转方式有如下" tabindex="-1">常见的微信小程序页面跳转方式有如下 <a class="header-anchor" href="#常见的微信小程序页面跳转方式有如下" aria-label="Permalink to &quot;常见的微信小程序页面跳转方式有如下&quot;">​</a></h3><ul><li>wx.navigateTo(Object)</li><li>wx.redirectTo(Object)</li><li>wx.switchTab(Object)</li><li>wx.navigateBack(Object)</li><li>wx.reLaunch(Object)</li></ul><h3 id="wx-navigateto-object" tabindex="-1">wx.navigateTo(Object) <a class="header-anchor" href="#wx-navigateto-object" aria-label="Permalink to &quot;wx.navigateTo(Object)&quot;">​</a></h3><p>wx.navigateTo()用于保留当前页面、跳转到应用内的某个页面，使用 wx.navigateBack可以返回到原页面 对于页面不是特别多的小程序，通常推荐使用 wx.navigateTo进行跳转， 以便返回原页面，以提高加载速度。当页面特别多时，则不推荐使用</p><h4 id="参数表如下所示" tabindex="-1">参数表如下所示 <a class="header-anchor" href="#参数表如下所示" aria-label="Permalink to &quot;参数表如下所示&quot;">​</a></h4><p><img src="/assets/navigateTo.ef6b3c6c.webp" alt="图片"></p><h4 id="流程图如下" tabindex="-1">流程图如下 <a class="header-anchor" href="#流程图如下" aria-label="Permalink to &quot;流程图如下&quot;">​</a></h4><p><img src="/assets/navigateTo2.9313f831.webp" alt="图片"></p><h3 id="wx-redirectto-object" tabindex="-1">wx.redirectTo(Object) <a class="header-anchor" href="#wx-redirectto-object" aria-label="Permalink to &quot;wx.redirectTo(Object)&quot;">​</a></h3><p>重定向，当页面过多时，被保留页面会挤占微信分配给小程序的内存，或是达到微信所限制的 10 层页面栈的情况下，我们应该考虑选择 wx.redirectTo wx.redirectTo()用于关闭当前页面，跳转到应用内的某个页面 这样的跳转，可以避免跳转前页面占据运行内存，但返回时页面需要重新加载，增加了返回页面的显示时间</p><h4 id="参数表如下所示-1" tabindex="-1">参数表如下所示 <a class="header-anchor" href="#参数表如下所示-1" aria-label="Permalink to &quot;参数表如下所示&quot;">​</a></h4><p><img src="/assets/redirectTo.c90c3013.webp" alt="图片"></p><h4 id="流程图如下所示" tabindex="-1">流程图如下所示 <a class="header-anchor" href="#流程图如下所示" aria-label="Permalink to &quot;流程图如下所示&quot;">​</a></h4><p><img src="/assets/redirectTo2.27a1548f.webp" alt="图片"></p><h3 id="wx-switchtab-object" tabindex="-1">wx.switchTab(Object) <a class="header-anchor" href="#wx-switchtab-object" aria-label="Permalink to &quot;wx.switchTab(Object)&quot;">​</a></h3><p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p><h4 id="参数表如下所示-2" tabindex="-1">参数表如下所示 <a class="header-anchor" href="#参数表如下所示-2" aria-label="Permalink to &quot;参数表如下所示&quot;">​</a></h4><p><img src="/assets/switchTab.0ec86212.webp" alt="图片"></p><h3 id="wx-navigateback-object" tabindex="-1">wx.navigateBack(Object) <a class="header-anchor" href="#wx-navigateback-object" aria-label="Permalink to &quot;wx.navigateBack(Object)&quot;">​</a></h3><p>wx.navigateBack() 用于关闭当前页面，并返回上一页面或多级页面，开发者可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层则设置对象的delta属性即可</p><h4 id="参数表如下" tabindex="-1">参数表如下 <a class="header-anchor" href="#参数表如下" aria-label="Permalink to &quot;参数表如下&quot;">​</a></h4><p><img src="/assets/navigateBack.6ea783e1.webp" alt="图片"></p><h3 id="wx-relaunch-object" tabindex="-1">wx.reLaunch(Object) <a class="header-anchor" href="#wx-relaunch-object" aria-label="Permalink to &quot;wx.reLaunch(Object)&quot;">​</a></h3><p>关闭所有页面，打开到应用内的某个页面，返回的时候跳到首页</p><h4 id="参数表如下所示-3" tabindex="-1">参数表如下所示 <a class="header-anchor" href="#参数表如下所示-3" aria-label="Permalink to &quot;参数表如下所示&quot;">​</a></h4><p><img src="/assets/reLaunch.80219266.webp" alt="图片"></p><h4 id="流程图如下所示-1" tabindex="-1">流程图如下所示 <a class="header-anchor" href="#流程图如下所示-1" aria-label="Permalink to &quot;流程图如下所示&quot;">​</a></h4><p><img src="/assets/reLaunch2.bec3bce4.webp" alt="图片"></p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><h3 id="关于上述五种跳转方式-做下总结" tabindex="-1">关于上述五种跳转方式，做下总结 <a class="header-anchor" href="#关于上述五种跳转方式-做下总结" aria-label="Permalink to &quot;关于上述五种跳转方式，做下总结&quot;">​</a></h3><ul><li>navigateTo 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页</li><li>redirectTo 关闭当前页面，跳转到应用内的某个页面</li><li>switchTab 跳转到 tabBar 页面，同时关闭其他非 tabBar 页面</li><li>navigateBack 返回上一页面</li><li>reLanch 关闭所有页面，打开到应用内的某个页面</li></ul><h3 id="其中关于它们的页面栈的关系如下" tabindex="-1">其中关于它们的页面栈的关系如下 <a class="header-anchor" href="#其中关于它们的页面栈的关系如下" aria-label="Permalink to &quot;其中关于它们的页面栈的关系如下&quot;">​</a></h3><ul><li>avigateTo 新页面入栈</li><li>redirectTo 当前页面出栈，新页面入栈</li><li>navigateBack 页面不断出栈，直到目标返回页，新页面入栈</li><li>switchTab 页面全部出栈，只留下新的 Tab 页面</li><li>reLanch 页面全部出栈，只留下新的页面</li></ul>',36);const u=a(s,[["render",function(a,c,o,h,n,s){const u=e("ArticleMetadata"),w=e("ClientOnly");return t(),i("div",null,[b,r(w,null,{default:l((()=>[r(u)])),_:1}),d])}]]);export{n as __pageData,u as default};

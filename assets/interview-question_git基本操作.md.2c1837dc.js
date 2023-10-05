import{_ as s,C as n,o as a,c as l,H as e,w as p,k as o,a as t,Q as r}from"./chunks/framework.bc643b65.js";const i=JSON.parse('{"title":"git 本地仓库上的操作&gitignore","description":"","frontmatter":{"createTime":"2022/10/23","tag":"git"},"headers":[],"relativePath":"interview-question/git基本操作.md","filePath":"s/前端面试题/git/git基本操作.md","lastUpdated":1696495218000}'),c={name:"interview-question/git基本操作.md"},g=o("h1",{id:"git-本地仓库上的操作-gitignore",tabindex:"-1"},[t("git 本地仓库上的操作&gitignore "),o("a",{class:"header-anchor",href:"#git-本地仓库上的操作-gitignore","aria-label":'Permalink to "git 本地仓库上的操作&gitignore"'},"​")],-1),y=r('<h2 id="git-本地仓库上的操作" tabindex="-1">git 本地仓库上的操作 <a class="header-anchor" href="#git-本地仓库上的操作" aria-label="Permalink to &quot;git 本地仓库上的操作&quot;">​</a></h2><ol><li>查看本地仓库关联的远程仓库：git remote；在克隆完每个远程仓库后，远程仓库默认为origin;加上-v的参数后，会显示远程仓库的url地址；</li><li>添加远程仓库，一般会取一个简短的别名：git remote add [remote-name] [url]，比如：git remote add example git://github.com/example/example.git;</li><li>从远程仓库中抓取本地仓库中没有的更新：git fetch [remote-name]，如git fetch origin;使用fetch只是将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。如果设置了某个分支关联到远程仓库的某个分支的话，可以使用git pull来拉去远程分支的数据，然后将远端分支自动合并到本地仓库中的当前分支；</li><li>将本地仓库某分支推送到远程仓库上：git push [remote-name] [branch-name]，如git push origin master；如果想将本地分支推送到远程仓库的不同名分支：git push remote-name local-branch:remote-branch，如git push origin serverfix:awesomebranch;如果想删除远程分支：git push [romote-name] :remote-branch，如git push origin :serverfix。这里省略了本地分支，也就相当于将空白内容推送给远程分支，就等于删掉了远程分支。</li><li>查看远程仓库的详细信息：git remote show origin；</li><li>修改某个远程仓库在本地的简称：git remote rename [old-name] [new-name]，如 git remote rename origin org；</li><li>移除远程仓库：git remote rm [remote-name]；</li></ol><h2 id="gitignore" tabindex="-1">gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;gitignore&quot;">​</a></h2><p>一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。如下例：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"># 此为注释 – 将被 Git 忽略</span></span>\n<span class="line"><span style="color:#E1E4E8;"># 忽略所有 .a 结尾的文件</span></span>\n<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.a</span></span>\n<span class="line"><span style="color:#E1E4E8;"># 但 lib.a 除外</span></span>\n<span class="line"><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">lib.a</span></span>\n<span class="line"><span style="color:#E1E4E8;"># 仅仅忽略项目根目录下的 </span><span style="color:#79B8FF;">TODO</span><span style="color:#E1E4E8;"> 文件，不包括 subdir</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">TODO</span></span>\n<span class="line"><span style="color:#F97583;">/</span><span style="color:#79B8FF;">TODO</span></span>\n<span class="line"><span style="color:#E1E4E8;"># 忽略 build</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> 目录下的所有文件</span></span>\n<span class="line"><span style="color:#E1E4E8;">build</span><span style="color:#F97583;">/</span></span>\n<span class="line"><span style="color:#E1E4E8;"># 会忽略 doc</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">notes.txt 但不包括 doc</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">server</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">arch.txt</span></span>\n<span class="line"><span style="color:#E1E4E8;">doc</span><span style="color:#6A737D;">/*.txt</span></span>\n<span class="line"><span style="color:#6A737D;"># 忽略 doc/ 目录下所有扩展名为 txt 的文件</span></span>\n<span class="line"><span style="color:#6A737D;">doc/**/</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># 此为注释 – 将被 Git 忽略</span></span>\n<span class="line"><span style="color:#24292E;"># 忽略所有 .a 结尾的文件</span></span>\n<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.a</span></span>\n<span class="line"><span style="color:#24292E;"># 但 lib.a 除外</span></span>\n<span class="line"><span style="color:#D73A49;">!</span><span style="color:#24292E;">lib.a</span></span>\n<span class="line"><span style="color:#24292E;"># 仅仅忽略项目根目录下的 </span><span style="color:#005CC5;">TODO</span><span style="color:#24292E;"> 文件，不包括 subdir</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">TODO</span></span>\n<span class="line"><span style="color:#D73A49;">/</span><span style="color:#005CC5;">TODO</span></span>\n<span class="line"><span style="color:#24292E;"># 忽略 build</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> 目录下的所有文件</span></span>\n<span class="line"><span style="color:#24292E;">build</span><span style="color:#D73A49;">/</span></span>\n<span class="line"><span style="color:#24292E;"># 会忽略 doc</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">notes.txt 但不包括 doc</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">server</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">arch.txt</span></span>\n<span class="line"><span style="color:#24292E;">doc</span><span style="color:#6A737D;">/*.txt</span></span>\n<span class="line"><span style="color:#6A737D;"># 忽略 doc/ 目录下所有扩展名为 txt 的文件</span></span>\n<span class="line"><span style="color:#6A737D;">doc/**/</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',5);const E=s(c,[["render",function(s,o,t,r,i,c){const E=n("ArticleMetadata"),m=n("ClientOnly");return a(),l("div",null,[g,e(m,null,{default:p((()=>[e(E)])),_:1}),y])}]]);export{i as __pageData,E as default};

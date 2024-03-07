import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as s}from"./app-Jwvw-d82.js";const a={},l=s(`<p>总所周知，随着JDK的持续更新，很多时候我们需要随时切换我们的Java环境变量，以适应多个项目中不同的JDK版本。</p><p>那如何做到快速的切换呢？</p><hr><p>桌面新建一个swith.bat文件。</p><p>拷贝以下代码到文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@echo off
%1 start &quot;&quot; mshta vbscript:CreateObject(&quot;Shell.Application&quot;).ShellExecute(&quot;cmd.exe&quot;,&quot;/c &quot;&quot;%~s0&quot;&quot; ::&quot;,&quot;&quot;,&quot;runas&quot;,1)(window.close)&amp;&amp;exit

echo 请选择jdk的版本（8、11、17、graalvm）：

set /p var=&quot;&quot;

if %var% == 8 (
  setx JAVA_HOME D:\\jdk\\jdk1.8.0_162 /m
) else if %var% == 11 (
  setx JAVA_HOME D:\\jdk\\jdk-11.0.2 /m
) else if %var% == 17 (
  setx JAVA_HOME D:\\jdk\\jdk-17.0.1 /m
) else if %var% == graalvm (
  setx JAVA_HOME D:\\jdk\\graalvm-ce-java17-22.1.0 /m
) else (
  echo 输入错误，即将退出
)
pause

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要修改其中对应JDK的目录！</p><p>由于原有的jdk8安装的后在C:\\ProgramData\\Oracle\\Java 下生成了配置文件，并且该配置文件大于环境变量的配置，所以需要删除。</p></div>`,7),d=[l];function t(v,r){return i(),n("div",null,d)}const u=e(a,[["render",t],["__file","如何在windows快速切换JDK版本.html.vue"]]);export{u as default};

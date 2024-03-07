import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as r}from"./app-Jwvw-d82.js";const p={},c=r('<hr><p>title: JVM内存不断增长的处理过程 editLink: false order: 1 category:</p><ul><li>运维 tag:</li><li>JAVA</li></ul><hr><h2 id="问题情况" tabindex="-1"><a class="header-anchor" href="#问题情况" aria-hidden="true">#</a> 问题情况：</h2><p>最近接到一个旧的项目维护，同事说有个奇怪的Bug就是该项目每运行几天就会导致定时任务无法执行，需要重启才行。 然后反应的内存问题是从启动时的3-4G一路增长到8G多。</p><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路：</h2><p>接手的第一反应可能是什么地方的代码导致了内存泄漏？</p><p>通过下面的命令查看jvm的gc情况，发现内存是正常的 <code>jstats gcutil</code></p><p>保险起见，又使用 <code>jmap -heap pid</code> 查看了堆内存的占比，感觉没啥问题。</p><p>这个时候就奇了怪了，堆内存一切正常，那对外内存使用情况呢？</p><p>通过开始内存详情查看 <code>jcmd pid VM.native_memory detail scale=MB</code></p><p>发现thread占用超出的正常范围，动不动就是1G以上。</p><p><strong>这个时候就找到问题点了，jvm线程使用异常</strong></p><p>掏出arthas的jvm命令，惊奇的发现，thread中的线程数量居然有1200+。随着观察的时间越久，这个数量还会继续增加。</p><p>寻找项目代码中的线程使用地方，有个位置在不断的开销新的线程，而原先的线程并没有让其终止执行。</p><p>修复该BUG，重新部署。解决！！！</p>',17),d=[c];function o(i,_){return a(),t("div",null,d)}const n=e(p,[["render",o],["__file","JVM内存不断增长的处理过程.html.vue"]]);export{n as default};

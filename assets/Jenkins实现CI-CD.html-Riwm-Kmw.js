import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,f as s}from"./app-Jwvw-d82.js";const d={},l=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>拉取最新的docker镜像 <code>docker pull jenkins/jenkins</code></p><p>启动 <code>docker run -d --name jenkins -p 10008:8080 -v /home/jenkins_home:/var/jenkins_home jenkins/jenkins:latest;</code></p><p>浏览器打开ip:10008</p><p>输入命令行打印内容 <code>docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword</code></p><p>等待初始化完成即可。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>工具设置中安装nodejs、Pipeline Utility Steps插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    agent any
    
    stages {
        stage(&#39;拉取分支代码&#39;) {
            steps {
                git branch: &#39;Branch_dev&#39;, credentialsId: &#39;823302a2-c1b4-4e39-a76a-7c1cefd5e4c5&#39;, url: &#39;http://192.168.5.199:90/iot/gaizhoubigscreen&#39;
            }
        }
        stage(&#39;编译代码&#39;) {
            steps {
                nodejs(&#39;node20&#39;) {
                    sh &#39;npm install&#39;
                    sh &#39;npm run build-production&#39;
                    archiveArtifacts artifacts: &#39;dist/&#39;, followSymlinks: false
                }
            }
        }
        stage(&#39;部署&#39;) {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: &#39;company-121&#39;,
                            verbose: false,
                            transfers: [
                                sshTransfer(
                                    cleanRemote: true,
                                    // excludes: &#39;dist/config.js&#39;, 
                                    remoteDirectory: &#39;/home/gz/gaizhouscreen&#39;, 
                                    sourceFiles: &#39;dist/**&#39;,
                                    execCommand: &#39;cd /home/gz/gaizhouscreen &amp;&amp; cp -r dist/* .&#39;
                                )
                            ], 
                        )
                    ]
                )
                echo &#39;Credentials SUCCESS&#39;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[l];function r(c,v){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","Jenkins实现CI-CD.html.vue"]]);export{u as default};

---
title: Jenkins实现CI-CD
editLink: false
order: 3
category:
  - 运维
tag:
  - Jenkins
---

## 安装
拉取最新的docker镜像
`docker pull jenkins/jenkins`

启动
`docker run -d --name jenkins -p 10008:8080 -v /home/jenkins_home:/var/jenkins_home jenkins/jenkins:latest;`

浏览器打开ip:10008

输入命令行打印内容
`docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword`

等待初始化完成即可。
## 配置
工具设置中安装nodejs、Pipeline Utility Steps插件

```
pipeline {
    agent any
    
    stages {
        stage('拉取分支代码') {
            steps {
                git branch: 'Branch_dev', credentialsId: '823302a2-c1b4-4e39-a76a-7c1cefd5e4c5', url: 'http://192.168.5.199:90/iot/gaizhoubigscreen'
            }
        }
        stage('编译代码') {
            steps {
                nodejs('node20') {
                    sh 'npm install'
                    sh 'npm run build-production'
                    archiveArtifacts artifacts: 'dist/', followSymlinks: false
                }
            }
        }
        stage('部署') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'company-121',
                            verbose: false,
                            transfers: [
                                sshTransfer(
                                    cleanRemote: true,
                                    // excludes: 'dist/config.js', 
                                    remoteDirectory: '/home/gz/gaizhouscreen', 
                                    sourceFiles: 'dist/**',
                                    execCommand: 'cd /home/gz/gaizhouscreen && cp -r dist/* .'
                                )
                            ], 
                        )
                    ]
                )
                echo 'Credentials SUCCESS'
            }
        }
    }
}
```

---
title: 如何在windows快速切换JDK版本
editLink: false
order: 1
category:
  - 运维
tag:
  - JAVA
---

总所周知，随着JDK的持续更新，很多时候我们需要随时切换我们的Java环境变量，以适应多个项目中不同的JDK版本。

那如何做到快速的切换呢？

--- 
桌面新建一个swith.bat文件。

拷贝以下代码到文件中。
```
@echo off
%1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c ""%~s0"" ::","","runas",1)(window.close)&&exit

echo 请选择jdk的版本（8、11、17、graalvm）：

set /p var=""

if %var% == 8 (
  setx JAVA_HOME D:\jdk\jdk1.8.0_162 /m
) else if %var% == 11 (
  setx JAVA_HOME D:\jdk\jdk-11.0.2 /m
) else if %var% == 17 (
  setx JAVA_HOME D:\jdk\jdk-17.0.1 /m
) else if %var% == graalvm (
  setx JAVA_HOME D:\jdk\graalvm-ce-java17-22.1.0 /m
) else (
  echo 输入错误，即将退出
)
pause

```

::: warning

需要修改其中对应JDK的目录！
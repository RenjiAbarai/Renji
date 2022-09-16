# jenkins



## 安装jenkins

```bash
# 创建文件夹/data/jenkins_home 配置一下权限 不然有可能启动失败
docker run --name jenkins -d -p 10086:8080 -p 50000:50000 /
		-v /data/jenkins_home:/var/jenkins_home /
		-v /etc/localtime:/etc/localtime /
		--env JAVA_OPTS="-Xms1024m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=512m" /
		--restart always -u root /
		jenkins/jenkins:lts

```



## 迁移已有的配置文件

```bash
# 迁移步骤为：
# 1）先关闭新老服务器jenkins，确保迁移时新老机器的jenkins都处于关闭状态。
# 2）将老服务器jenkins主目录下的config.xml文件以及jobs、users、workspace、plugins四个目录拷贝到新机器的jenkins主目录下。
# 3）重启新服务器jenkins。

# 老服务执行, targetIp:新服务ip
# 拷贝全部
rsync -e "ssh -p22" -avpgolr /data/jenkins_home/ root@targetIp:/data/jenkins_home/
# 或者
rsync -e "ssh -p22" -avpgolr /data/jenkins_home/config.xml root@targetIp:/data/jenkins_home/
rsync -e "ssh -p22" -avpgolr --delete /data/jenkins_home/users/ root@targetIp:/data/jenkins_home/users/
rsync -e "ssh -p22" -avpgolr --delete /data/jenkins_home/plugins/ root@targetIp:/data/jenkins_home/plugins/
rsync -e "ssh -p22" -avpgolr --delete /data/jenkins_home/jobs/ root@targetIp:/data/jenkins_home/jobs/
rsync -e "ssh -p22" -avpgolr --delete /data/jenkins_home/workspace/ root@targetIp:/data/jenkins_home/workspace/
```



## 批量删除历史构建

```go
// 项目管理 ----》 脚本命令行 ---》放入下面的脚本
def jobName = "QA/cms"  // 删除的项目名称
def maxNumber = 1200    // 保留的最小编号，意味着小于该编号的构建都将被删除
Jenkins.instance.getItemByFullName(jobName).builds.findAll {
  it.number <= maxNumber
}.each {
  it.delete()
}
```


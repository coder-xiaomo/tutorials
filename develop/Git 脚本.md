
```bash
# 本地设置多远端
git clone git@git.only4.work:coder-xiaomo/tutorials.git
git remote add github  git@github.com:coder-xiaomo/tutorials.git
git remote add gitee   git@gitee.com:coder-xiaomo/tutorials.git
git remote add gitcode git@gitcode.com:coder-xiaomo/tutorials.git

git remote add all           git@git.only4.work:coder-xiaomo/tutorials.git
git remote set-url --add all git@github.com:coder-xiaomo/tutorials.git
git remote set-url --add all git@gitee.com:coder-xiaomo/tutorials.git
git remote set-url --add all git@gitcode.com:coder-xiaomo/tutorials.git

# 拉取全部仓库代码
git fetch --all
git pull --all

```

`.git/config` 文件部分配置如下：

```
[branch "main"]
	remote = all
	merge = refs/heads/main

[remote "origin"]
	url = git@git.only4.work:coder-xiaomo/tutorials.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[remote "github"]
	url = git@github.com:coder-xiaomo/tutorials.git
	fetch = +refs/heads/*:refs/remotes/github/*
	pushurl = git@github.com:coder-xiaomo/tutorials.git
[remote "gitee"]
	url = git@gitee.com:coder-xiaomo/tutorials.git
	fetch = +refs/heads/*:refs/remotes/gitee/*
[remote "gitcode"]
	url = git@gitcode.com:coder-xiaomo/tutorials.git
	fetch = +refs/heads/*:refs/remotes/gitcode/*
[remote "all"]
	url = git@git.only4.work:coder-xiaomo/tutorials.git
	fetch = +refs/heads/*:refs/remotes/all/*
	url = git@github.com:coder-xiaomo/tutorials.git
	url = git@gitee.com:coder-xiaomo/tutorials.git
	url = git@gitcode.com:coder-xiaomo/tutorials.git

```
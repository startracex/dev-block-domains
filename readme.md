# dev-block-domains

该项目收集了开发搜索常用关键词时高频出现的网站，这些网站的某些设置可能阻碍开发学习、故障排查，或带来糟糕体验，因此有必要进行屏蔽

## 如何进行屏蔽

添加下列参数到搜索关键词之后

```
-site:segmentfault.com -site:blog.csdn.net -site:wenku.csdn.net -site:download.csdn.net -site:huaweicloud.csdn.net -site:blog.gitcode.com -site:www.jianshu.com -site:www.51cto.com -site:blog.51cto.com -site:zhuanlan.zhihu.com -site:www.zhihu.com -site:www.imooc.com -site:www.docin.com -site:developer.baidu.com -site:cloud.tencent.com -site:nodejs.cn -site:p2hp.com -site:chartjs.cn -site:fenxianglu.cn -site:www.trae.com.cn
```

## 屏蔽规则

本章列出的域名可能符合以下任一情况：

- 含大量明显遮挡内容的广告、登录弹窗等
- 含大量需付费、登录或其他操作才能查看的内容
- 含大量爬取文章或错误内容
- 推广内容

## 贡献

若您是这些网站的所有者，或发现网站已改善上述问题，可发起合并请求，从 `domains.js` 中移除所指定的域，每个一级域名仅通过一次。

若发现符合屏蔽规则的新网站，可将域名添加至 `domains.js` 并发起合并请求。添加时请准确确认子域，避免误加可能有用的其他域名；域名过多时，可添加其一级域名。

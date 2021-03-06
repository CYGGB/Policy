## 自签 CA 证书

 发布时间：2019-05-12 00:00:00
 更新时间：2021-02-18 04:15:21
 文章作者：ZHUANGZHUANG

小白壮壮又要水一篇博客啦

最近比较无聊，看到有大佬自签了 Surge/Quantumult 用于 HTTPS 解密的 CA 证书，可以自定义证书的`名称`、`有效期` (需求不大的话还是一键生成最方便)。就也想动手自己搞一个，就上网查了一下教程，先上一张效果图：

![效果图](images/4071209656.jpg)

------

### 准备工具：

- OpenSSL
- Surge/Quantumult

### 开始折腾：

```bash
# 创建文件夹
mkdir zhuangzhuang

# 进入文件夹
cd zhuangzhuang
```

**Bash**

*复制*

```bash
# 生成ca密钥
openssl genrsa -out ca.key 2048
```

**Bash**

*复制*

```bash
# 生成CA证书
openssl req -x509 -new -nodes -key ca.key -subj "/C=CN/ST=Beijing/L=Beijing/O=ZHUANGZHUANG/OU=ZHUANGZHUANG/CN=ZHUANGZHUANG/emailAddress=mail@zhuangzhuang.ml" -days 36500 -out ca.crt
```

**Bash**

*复制*

| 国家或地区   | C            | CN                   |
| ------------ | ------------ | -------------------- |
| 省/市/自治区 | ST           | Beijing              |
| 所在地       | L            | Beijing              |
| 组织         | O            | ZHUANGZHUANG         |
| 组织单位     | OU           | ZHUANGZHUANG         |
| 通用名称     | CN           | ZHUANGZHUANG         |
| 电子邮件地址 | emailAddress | mail@zhuangzhuang.ml |
| 有效期（天） | -days        | 36500                |

------

﻿﻿﻿﻿﻿﻿﻿‌﻿﻿‌﻿﻿‌﻿‌﻿‌﻿﻿‍﻿﻿﻿﻿﻿‌﻿﻿‌﻿﻿﻿‌﻿﻿﻿‌﻿‌﻿﻿‍﻿﻿‌﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿﻿‌﻿﻿‍﻿﻿﻿﻿﻿‌﻿‌﻿﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‍﻿﻿﻿﻿﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿‌﻿﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿﻿‌﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿﻿﻿﻿‍﻿﻿﻿‌﻿‌﻿﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‍﻿﻿﻿﻿﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿﻿﻿﻿‌﻿﻿‌﻿﻿‌﻿‍﻿﻿﻿﻿﻿‌﻿﻿﻿‌﻿﻿﻿﻿﻿﻿﻿‌﻿‍﻿‌﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿﻿﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‍﻿﻿‌﻿‌﻿‌﻿﻿‌﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿‌﻿‌﻿﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿﻿‌﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿﻿﻿﻿‍﻿﻿﻿‌﻿‌﻿﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿﻿‌﻿‌﻿﻿﻿﻿﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿﻿‌﻿﻿‍﻿﻿﻿﻿﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿‌﻿‌﻿﻿‍﻿‌﻿﻿‌﻿‌﻿‌﻿﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿﻿﻿‍﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿‌﻿﻿﻿‌﻿﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿﻿‌﻿﻿‌﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿﻿﻿﻿‍﻿﻿﻿‌﻿‌﻿﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿﻿﻿‍﻿﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‍﻿﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‍﻿﻿﻿﻿﻿﻿﻿﻿﻿‌﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿﻿‍﻿‌﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿‌﻿﻿﻿﻿‍﻿‌﻿﻿﻿﻿﻿‌﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿‌﻿﻿﻿﻿‍﻿‌﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿﻿﻿﻿﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿‌﻿﻿﻿﻿‌﻿‌﻿﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿﻿‌﻿﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿‌﻿﻿﻿‌﻿‌﻿﻿‌﻿‍﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‌﻿‍﻿‌﻿﻿﻿‌﻿‌﻿‌﻿﻿﻿‍﻿‌﻿﻿﻿‌﻿‌﻿‌﻿‌﻿﻿‍﻿‌﻿‌﻿﻿‌﻿﻿﻿﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿‌﻿‌﻿‌﻿‍﻿‌﻿﻿﻿﻿‌﻿﻿‌﻿‌﻿‍﻿‌﻿﻿﻿‌﻿﻿﻿‌﻿﻿‍﻿‌﻿﻿﻿‌﻿﻿﻿‌﻿‌

**其他注意事项：[iOS 13 和 macOS 10.15 中的可信证书应满足的要求](https://support.apple.com/zh-cn/HT210176)**

> 如果需要更多自定义内容（比如颁发时间，我实在是搞不定了），建议使用[在线工具](http://www.ssleye.com/self_sign.html)生成，将生成的`证书明文`、`私钥明文`分别保存在 ca.crt 、 ca.key 中，执行以下命令转换为 PKCS12 格式（也可以用[在线工具](http://www.ssleye.com/jks_pkcs12.html)转换）

一份在线工具签发证书的参考:

![img](images/1960284273.jpg)

------

```bash
# 将CA转换成p12格式，并指定密码 （ZHUANGZHUANG）
openssl pkcs12 -export -clcerts -in ./ca.crt -inkey ca.key -out ca.p12 -password pass:ZHUANGZHUANG
```

**Bash**

*复制*

```bash
# 将p12格式的证书Base64编码
base64 ca.p12

# Base64一行不能超过76字符，超过则添加回车换行符。如果因为换行的原因，不能安装证书，可以使用 -w 参数
base64 -w 0 ca.p12
```

**Bash**

*复制*

打开 Surge/Quantumult，将密码和所得到的 BASE64 编码复制到相应位置，安装即可

```ini
[MITM]

# P12密码
ca-passphrase = ZHUANGZHUANG

# base64编码过的P12文件
ca-p12 = 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
```

**Ini**

*复制*

**注：此时得到的证书已经可以正常使用，若提示：未签名，先使用 Quantumult 安装证书**

相关链接：[Surge MitM 证书的创建和配置](http://scm.zoomquiet.top/data/20161106124704/index.html)
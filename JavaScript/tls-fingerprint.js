/**
 * Sub-Store 脚本
 * 为节点添加 tls 证书指纹 by Peng-YM
 * 示例
 * #fingerprint=...
 */
function operator(proxies) {
    const { fingerprint } = $arguments;
    proxies.forEach(proxy => {
        proxy['tls-fingerprint'] = fingerprint;
    });
    return proxies;
}
function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "wowhead.com") || dnsDomainIs(host, ".wowhead.com")) {
        return "PROXY 35.209.28.77:4245";
    }
    return "DIRECT";
}


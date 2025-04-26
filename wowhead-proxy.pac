function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "wowhead.com") || 
        dnsDomainIs(host, ".wowhead.com") ||
        dnsDomainIs(host, "zamimg.com") ||
        dnsDomainIs(host, ".zamimg.com") ||
        dnsDomainIs(host, "zamnetwork.com") ||
        dnsDomainIs(host, ".zamnetwork.com") ||
        dnsDomainIs(host, "fanbyte.com") ||
        dnsDomainIs(host, ".fanbyte.com")) {
        return "PROXY 35.209.28.77:4245";
    }
    return "DIRECT";
}


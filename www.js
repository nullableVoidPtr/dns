var WWW_HOSTS = [
	{
		v4: IP("107.191.56.244"),
		v6: "2001:19f0:5800:1abc:5400:5ff:fe39:cc80",
	},
];

function makeWWW(hosts) {
	return ["@", "WWW"].map(function(name) {
		return hosts.map(function(host) {
			return [
				A(name, host.v4, TTL(300)),
				
			].concat(
				("v6" in host) ? [AAAA(name, host.v6, TTL(300))] : []
			);
		});
	});
}

function makeCNAMEs(names) {
	return names.map(function(name) {
		return CNAME(name, "nullablevo.id.au.")
	});
}

function includeWWW() {
	return [
		makeWWW(WWW_HOSTS),
		makeCNAMEs(["matrix", "openpgpkey"])
	];
}




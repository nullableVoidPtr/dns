var DSP_VULTR = NewDnsProvider("vultr-ns");
var REG_MONITOR = NewRegistrar("doh");

require("./www.js");
require("./mx.js");
require("./proofs.js");

D("nullablevo.id.au", REG_MONITOR, DnsProvider(DSP_VULTR),
	DefaultTTL(3600),
	// NAMESERVER("ns1.vultr.com."),
	// NAMESERVER("ns2.vultr.com."),
	includeWWW(),
	includeMX(),
	includeProofs(),
END);


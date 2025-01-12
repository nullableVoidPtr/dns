function includeMX() {
	return [
		MX("@", 10, "mail.protonmail.ch.", TTL(300)),
		MX("@", 20, "mailsec.protonmail.ch.", TTL(300)),
		TXT("@", "protonmail-verification=5ddeebbcb1c8caf34e16729365676c438f47d4c0"),
		TXT("@", "v=spf1 include:_spf.protonmail.ch mx ~all"),
		TXT("_dmarc", "v=DMARC1; p=quarantine"),
		CNAME("protonmail._domainkey", "protonmail.domainkey.dx3fdz4xpl744tdzocjy5fv2bkmvlbn7yyal6dk3b6agzk652ncta.domains.proton.ch."),
		CNAME("protonmail2._domainkey", "protonmail2.domainkey.dx3fdz4xpl744tdzocjy5fv2bkmvlbn7yyal6dk3b6agzk652ncta.domains.proton.ch."),
		CNAME("protonmail3._domainkey", "protonmail3.domainkey.dx3fdz4xpl744tdzocjy5fv2bkmvlbn7yyal6dk3b6agzk652ncta.domains.proton.ch."),
	];
}


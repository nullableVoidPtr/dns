var DISCORD_PROOF = TXT("_discord", "dh=fe501c89e86d8120dde5b2a76863d509edd7501d");
var BLUESKY_PROOF = TXT("_atproto", "did=did:plc:s7gexla24yem3av6eymtsjax");
var KEYOXIDE_PROOF = TXT("@", "openpgp4fpr:1fd1e8d7aebc15d4197a038c277951c61e11fe1b");

function includeProofs() {
	return [
		DISCORD_PROOF,
		BLUESKY_PROOF,
		KEYOXIDE_PROOF,
	];
}

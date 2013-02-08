function hsy(id, ctxt) {
	var tpl = document.getElementById(id).innerHTML;
	tpl = tpl.replace(/{{\s+(\w+)\s+}}/g, function(match, vr) { return ctxt[vr]; });
	return tpl;
};

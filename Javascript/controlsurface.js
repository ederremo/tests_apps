function c_mail(formId, email) {
	var exp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.forms[formId].elements[email].value;
	alert(email);
	if(exp.test(address) == false) {
		alert('Invalid email address');
		return false;
	}
	return true;
}

function c_capitalize(event) {
	var d = document;
	var obj = d.all ? event.srcElement : event.target;
	var elements = obj.value.split(/[ -]/);
	var val = '';
	var sep = new Array();
	var id = 0;
	for (var i=0; i < obj.value.length; i++) {
		if (obj.value[i] == ' ' || obj.value[i] == '-')
			sep[id++] = obj.value[i];
	}
	id = 0;	
	for (var i=0; i < elements.length; i++) {
		val+=elements[i].substring(0,1).toUpperCase() + elements[i].substring(1,elements[i].length).toLowerCase();
		i < elements.length-1 ? val+= sep[id++]:false;
	}
	obj.value = val;
}

function c_int(event) {
	var k = event.which || event.keyCode;
	var c = new Array();
	c[224] = 48; c[38] = 49; c[233] = 50; c[34] = 51; c[39] = 52; c[40] = 53; c[45] = 54; c[232] = 55; c[95] = 56; c[231] = 57;
	if(d.all) {
		if(k!=8 && k!=13 && k!=9) {
			if(k==224 || k==38 || k==233 || k==34 || k==39 || k==40 || k==45 || k==232 || k==95 || k==231) {
				 event.returnValue = f;
				 d.selection.createRange().text = String.fromCharCode(c[k]);
			} else if(k > 47 && k < 58) {
				event.returnValue = t;
			} else {
				event.returnValue = f;
			}
		}
	} else {
		if(k!=8 && k!=13 && k!=9 && k!=0) {
			if(k==224 || k==38 || k==233 || k==34 || k==39 || k==40 || k==45 || k==232 || k==95 || k==231) {
				var o = event.target;
				startString = o.value.substring( 0 , o.selectionStart );
				endString = o.value.substring( o.selectionEnd , o.textLength );
				o.value = startString.substring(0 , startString.length) + String.fromCharCode(c[k]) + endString;
				o.setSelectionRange( startString.length+1 , startString.length+1 );
				event.preventDefault();
			} else if(k > 47 && k < 58) {
				return t;
			} else {
				return f;
			}
		}
	}
}
function c_maj(event) {
	var k = event.which || event.keyCode;
	if(d.all) {
		if(k!=8 && k!=13 && k!=9 && k!=32) {
			if(event.keyCode > 96 && event.keyCode < 123) {
				 event.returnValue = f;
				 d.selection.createRange().text = String.fromCharCode(k - 32);
			} else if((k > 64 && k < 91) || k==45 || k==46) {
				event.returnValue = t;
			} else {
				event.returnValue = f;
			}
		}
	} else {
		if(k!=8 && k!=13 && k!=9 && k!=0 && k!=32) {
			if(k > 96 && k < 123) {
				var obj = event.target;
				startString = obj.value.substring( 0 , obj.selectionStart );
				endString = obj.value.substring( obj.selectionEnd , obj.textLength );
				obj.value = startString.substring(0 , startString.length) + String.fromCharCode(k - 32) + endString;
				obj.setSelectionRange( startString.length+1 , startString.length+1 );
				event.preventDefault();
			} else if((k > 64 && k < 91) || k==45 || k==46) {
				return t;
			} else {
				return f;
			}
		}
	}
}
function c_alpha(event) {
	var k = event.which || event.keyCode;
	if(k!=8 && k!=13 && k!=9 && k!=32) {
		if((k > 64 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || k==34 || k==44 || k==46 || (k>38 && k<42) || k==54 || k==63) {
			if(d.all) {
				event.returnValue = t;
			} else {
				return t;
			}
		} else {
			if(d.all) {
				event.returnValue = f;
			} else {
				return f;
			}
		}
	}
}

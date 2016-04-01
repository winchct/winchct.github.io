//var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'));
var outputElement = document.getElementById('output')
var Module = 
{
	print: function(x) 
	{
		outputElement.innerHTML = (outputElement.innerHTML ? outputElement.innerHTML + '<br>' : '') + x;
	},
	aaa: function() { 
		return "aaa";
	}
};
function executeLua(code, clear) 
{
	if (clear) outputElement.innerHTML = '';
	Lua.execute(code);
}
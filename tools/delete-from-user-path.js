//
// Copyright (c) 2015 Danny Boisvert
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

// Standard Access Objects
var oWSHShell = WScript.CreateObject("WScript.Shell");
var oFSO = WScript.CreateObject("Scripting.FileSystemObject");
var oEnvUser = oWSHShell.Environment("USER");

// Script Directory
var sScriptDir = oFSO.GetParentFolderName(oFSO.GetFile(WScript.ScriptFullName));
var sGitCmdDir = oFSO.GetAbsolutePathName(sScriptDir + "\\..\\cmd");

// Remove the path from the list
var sPathUserEnvVars = oEnvUser("PATH");
if(sPathUserEnvVars !== ""){
	var aPathUserEnvVar = (sPathUserEnvVars).split(";");
	var aNewPathUserEnvVar = new Array();
	if(aPathUserEnvVar.length > 0){
		for(var i in aPathUserEnvVar){
			if(aPathUserEnvVar[i] !== sGitCmdDir && aPathUserEnvVar[i] !== sGitCmdDir + "\\"){
				aNewPathUserEnvVar.push(aPathUserEnvVar[i]);
			}
		}
	}
	oEnvUser("PATH") = aNewPathUserEnvVar.join(";");
}

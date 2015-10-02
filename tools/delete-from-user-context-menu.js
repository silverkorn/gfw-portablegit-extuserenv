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

// Git Bash to background directory context menu
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Bash\\Icon");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Bash\\command\\");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Bash\\");

// Git Bash to directory context menu
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\shell\\Git Bash\\Icon");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\shell\\Git Bash\\command\\");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\shell\\Git Bash\\");

// Git Gui to directory background context menu
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Gui\\Icon");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Gui\\command\\");
oWSHShell.RegDelete("HKEY_CURRENT_USER\\Software\\Classes\\Directory\\Background\\shell\\Git Gui\\");

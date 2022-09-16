---

---

# Sublime Text

[Sublime Text](https://www.sublimetext.com/) 是一个轻量、简洁、高效、跨平台的编辑器（收费软件，可以无限期试用），支持 Linux、Windows 和 Mac OS X 操作系统，受到许多程序员的喜爱。Sublime Text是由程序员Jon Skinner于2008年1月份所开发出来，它最初被设计为一个具有丰富扩展功能的Vim。

![Sublime Text](/images/subl.jpeg)

## 设置subl命令行
```bash
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl

#  ~/.bash_profile 中添加PATH 
export PATH=$PATH:/Applications/Sublime\ Text.app/Contents/SharedSupport/bin
```
## 包管理
安装过程: 使用 Ctrl+` 快捷键或者通过View->Show Console菜单打开命令行

- Sublime Text3在控制台输入
```javascript
import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```
Sublime Text2在控制台输入
```javascript
import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```
打开包管理神器 请使用快捷键`shift + cmd + p`, 然后输入package或者一些简写



## 插件管理
|  插件名称  |  描述  |
|  ----  | ----  |
| `ConvertToUTF8` | 转utf8格式 |
| `JsFormat` | JS格式化`ctrl+alt+f` |
| `Terminal` | 终端`ctrl+alt+t` |
| `HTML-CSS-JS prettify` | vue格式化 |
| `Sass` | SCSS |

<!--
- `SublimeLinter` jshint
- `SublimeLinter-jshint--jshint`
插件管理：http://www.cnblogs.com/hykun/p/sublimeText3.html
-->


## 常用快捷键
|  快捷键组合  |  功能  |
|  ----  | ----  |
| `shift + cmd + p` | 打开命令面板 |
| `cmd + n` | 新建标签 |
| `cmd + t` | 文件跳转 |
| `cmd + r` | 函数跳转 |
| `cmd + k + b` | 开关侧边栏 |
| `cmd + option + 2	` | 分成两屏 |


## 自定义快捷键
打开用户自定义快捷键配置文件`Preferences → Key Bindings – User`
```javascript
[{
	"keys": ["super+shift+f"],//js格式化
	"command": "js_format",
	"context": [{
		"key": "selector",
		"operator": "equal",
		"operand": "source.js,source.json"
	}]
}, {
	"keys": ["super+l"],//换行显示
	"command": "toggle_setting",
	"args": {
		"setting": "word_wrap"
	}
}]
```

## Build编译运行
1. Preferences->Browser Packages  User文件夹 `*.sublime-build`文件放入
2. `ctrl+shift+b`，选择刚才自定义的`*.sublime-build`，编译运行即可。

### javascript.sublime-build
```json
{
	"cmd": ["node", "$file"],
	"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
	"working_dir": "${project_path:${folder}}",
	"selector": "source.js",
	"shell": true,
	"encoding": "utf-8",
	"windows": {
		"cmd": ["taskkill /F /IM node.exe >nul 2>nul & node", "$file"]
	},
	"linux": {
		"cmd": ["killall node; node", "$file"]
	},
	"osx": {
		"cmd": ["killall node >/dev/null 2>&1; node $file"]
	}
}
```

### MyJavac.sublime-build
```json
{
	"shell_cmd": "javac \"$file\" && java \"$file_base_name\"",
	"file_regex": "^(...*?):([0-9]*):?([0-9]*)",
	"selector": "source.java"
}
```

### python3.sublime-build
```json
{
	"cmd": ["python3", "-u", "$file"],
	"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
	"selector": "source.python"
}
```

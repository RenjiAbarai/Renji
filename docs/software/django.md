

## django

#### 1.起步

```bash
# 安装django
pip install django
# 创建项目
django-admin startproject 项目名称
```

#### 2.项目结构

```
├── manage.py						【项目管理、启动项目、创建app、数据管理】
└── project
	  ├── __init__.py
	  ├── asgi.py					【不用动】
	  ├── settings.py			【项目配置】
	  ├── urls.py					【项目的主路由配置，HTTP请求进入Django时，优先调用该文件】
	  └── wsgi.py					【不用动，web网关的配置文件，Django正式启动时，需要用到】		
							
```

#### 3.创建app

```
# python startapp app名称

├── __init__.py
├── admin.py						【django默认提供admin后台管理】
├── apps.py							【app启动类】
├── migrations					【数据库变更记录】
│   └── __init__.py
├── models.py						【对数据库操作】
├── tests.py						【单元测试】
└── views.py						【视图函数 urls】

```

#### 4.启动项目

```bash
python manage.py runserver
```

- django命令生成数据库表

```
python manage.py makemigrations
python manage.py migrate
```






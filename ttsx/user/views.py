from django.contrib import auth
from django.contrib.auth.hashers import make_password
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
from user.models import UserInfo


def login(request):

    return render(request, 'login.html')

def register(request):

    return render(request, 'register.html')

def registerDeal(request):
    user_name = request.POST.get('user_name')
    user_pwd = request.POST.get('user_pwd')
    user_tel = request.POST.get('user_tel')
    user_email = request.POST.get('user_email')
    sex = request.POST.get('sex')
    try:
        user=UserInfo.objects.create(username=user_name,password=make_password(user_pwd),tel=user_tel,email=user_email,sex=sex)
        if user:
            return render(request, 'login.html',{"user_name":user.username,"user_pwd":user_pwd,"msg":"注册成功",})
        else:
            return render(request, 'register.html')
    except Exception:
        return render(request, 'register.html',{"msg":"用户名已被注册"})

def loginDeal(request):
    user_name = request.POST.get('user_name')
    user_pwd = request.POST.get('user_pwd')
    user=auth.authenticate(request=request,username=user_name,password=user_pwd)
    print(user)
    if user:
        auth.login(request,user)
        return HttpResponseRedirect('/user/userindex/')
    else:
        return render(request,'login.html',{"msg":"登录失败"})


def userindex(request):
    if request.user.is_authenticated :
        return render(request, 'userindex.html')
    return render(request,"login.html",{"msg":"请先登录"})

def user(request):
    if request.user.is_authenticated:
        user = UserInfo.objects.all()
        return render(request, 'user.html',{"data":user})
    return render(request, "login.html", {"msg": "请先登录"})

def add(request):
    if request.user.is_authenticated:
        return render(request, 'add.html')
    return render(request, "login.html", {"msg": "请先登录"})

def addDeal(request):
    user_name = request.POST.get('user_name')
    user_pwd = request.POST.get('user_pwd')
    user_tel = request.POST.get('user_tel')
    user_email = request.POST.get('user_email')
    sex = request.POST.get('sex')
    try:
        user=UserInfo.objects.create(username=user_name,password=make_password(user_pwd),tel=user_tel,email=user_email,sex=sex)
        if user:
            return render(request, 'add.html',{"msg":"新增成功"})
        else:
            return render(request, 'add.html',{"msg":"新增失败"})
    except Exception:
        return render(request, 'add.html',{"msg":"用户名已被使用"})

def edit(request):
    if request.user.is_authenticated:
        id = request.GET.get('id')
        user = UserInfo.objects.get(id=id)
        return render(request, 'edit.html',{"data":user})
    return render(request, "login.html", {"msg": "请先登录"})

def editDeal(request):
    id = request.POST.get('id')
    user_name = request.POST.get('user_name')
    user_tel = request.POST.get('user_tel')
    user_email = request.POST.get('user_email')
    sex = request.POST.get('sex')

    user = UserInfo.objects.get(id=id)
    if user.username != user_name :
        user.username = user_name
    user.tel = user_tel
    user.email = user_email
    user.sex = sex
    print(sex)
    try:
        user.save()
        user = UserInfo.objects.get(id=id)
        return render(request, 'edit.html',{"msg":"修改成功","data":user})
    except Exception:
        user = UserInfo.objects.get(id=id)
        return render(request, 'edit.html',{"msg":"修改失败","data":user})

def delete(request):
    id = request.GET.get('id')
    print(id)
    try:
        UserInfo.objects.filter(id=id).delete()
        user = UserInfo.objects.all()
        return render(request, 'user.html', {"msg":"删除成功","data": user})
    except Exception:
        user = UserInfo.objects.all()
        return render(request, 'user.html', {"msg":"删除失败","data": user})

def logout(request):
    request.session.flush()
    return render(request, 'login.html')

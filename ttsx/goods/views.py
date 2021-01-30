from django.shortcuts import render
# from django.http import HttpResponse
from .models import GoodsCategory,GoodsInfo
from django.core.paginator import Paginator

def index(request):
    """首页页面"""

    # 查询商品分类
    categories=GoodsCategory.objects.all()
    # 从每个分类中获取四个商品
    for cag in categories:
        cag.goods_list=GoodsInfo.objects.filter(goods_cag=cag)[:4]
    # 读取购物车商品列表
    cart_goods_list=[]
    # 商品总数
    cart_goods_count=0
    for goods_id,goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue
        cart_goods=GoodsInfo.objects.get(id=goods_id)
        cart_goods.goods_num=goods_num
        cart_goods_list.append(cart_goods)
        cart_goods_count+=int(goods_num)

    return render(request, 'index.html', {'categories': categories,
                                          'cart_goods_list': cart_goods_list,
                                          'cart_goods_count': cart_goods_count})


def detail(request):
    """商品详细页面"""

    # 获得产品ID
    good_id=request.GET['id']#或者good_id=request.GET.get('id','')
    # 查询该商品
    goods_data=GoodsInfo.objects.get(id=good_id)
    # 查询商品分类
    categories=GoodsCategory.objects.all()
    # 读取购物车商品列表
    cart_goods_list = []
    # 商品总数
    cart_goods_count = 0
    for goods_id, goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue
        cart_goods = GoodsInfo.objects.get(id=goods_id)
        cart_goods.goods_num = goods_num
        cart_goods_list.append(cart_goods)
        # 累加购物车商品总数
        cart_goods_count += int(goods_num)

    return render(request, 'detail.html', {'categories': categories,
                                           'goods_data': goods_data,
                                           'cart_goods_list': cart_goods_list,
                                           'cart_goods_count': cart_goods_count})

def goods(request):
    """商品展示页面"""

    # 获得当前分类
    cag_id = request.GET.get('cag',1)
    # 获得当前页码
    page_id=request.GET.get('page',1)
    # 查询所有数据
    goods_data=GoodsInfo.objects.filter(goods_cag=cag_id)
    # 数据分页
    paginator=Paginator(goods_data,12)
    # 获得当前页码数据
    page_data=paginator.page(page_id)
    # 查询商品分类
    categories=GoodsCategory.objects.all()
    # 查询当前商品分类
    current_cag=GoodsCategory.objects.get(id=cag_id)
    # 读取购物车商品列表
    cart_goods_list = []
    # 商品总数
    cart_goods_count = 0
    for goods_id, goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue

        cart_goods = GoodsInfo.objects.get(id=goods_id)
        cart_goods.goods_num = goods_num
        cart_goods_list.append(cart_goods)
        # 累加购物车商品总数
        cart_goods_count = cart_goods_count + int(goods_num)

    return render(request, 'goods.html', {'page_data': page_data,
                                          'categories': categories,
                                          'current_cag': current_cag,
                                          'cart_goods_list': cart_goods_list,
                                          'cart_goods_count': cart_goods_count,
                                          'paginator': paginator,
                                          'cag_id': cag_id})






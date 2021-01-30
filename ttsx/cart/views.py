from django.shortcuts import render,redirect
from goods.views import GoodsInfo

# Create your views here.
def show_cart(request):
    """展示购物车商品"""

    # 读取购物车商品列表
    cart_goods_list=[]
    # 商品总数
    cart_goods_count=0
    # 商品总价
    cart_goods_money=0
    for goods_id,goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue
        cart_goods=GoodsInfo.objects.get(id=goods_id)
        cart_goods.goods_num=goods_num
        # 累加购物车商品总数
        cart_goods_count+=int(goods_num)
        #累计购物车商品列表
        cart_goods_list.append(cart_goods)
        # 累计商品总价
        cart_goods_money+=cart_goods.goods_price*int(goods_num)


    return render(request, 'cart.html', {'cart_goods_list': cart_goods_list,
                                         'cart_goods_count': cart_goods_count,
                                         'cart_goods_money': cart_goods_money})

def add_cart(request):
    """添加商品到购物车"""

    # 获得商品ID
    goods_id=request.GET.get('id','')
    if goods_id:
        # 获得上一页面地址
        pre_url=request.META.get('HTTP_REFERER','http://127.0.0.1:8000/')
        # 写入到 cookie 中
        response=redirect(pre_url)
        # 判断商品是否存在
        goods_count=request.COOKIES.get(goods_id,'')
        if goods_count:
            goods_count=int(goods_count)+1
        else:
            goods_count=1
        response.set_cookie(goods_id,value=goods_count)

    return response

def remove_cart(request):
    """删除购物车商品"""

    # 获得要删除的商品ID
    goods_id=request.GET.get('id','')
    if goods_id:
        # 获得上一页面地址
        pre_url=request.META.get('HTTP_REFERER','http://127.0.0.1:8000/')#request.META得到的是字典
        # 写入到 cookie 中
        response=redirect(pre_url)
        # 判断商品是否存在
        goods_count=request.COOKIES.get(goods_id,'')
        if goods_count:
            response.delete_cookie(goods_id)

    return response
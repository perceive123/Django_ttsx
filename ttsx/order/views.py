from django.shortcuts import render,redirect
from goods.views import GoodsInfo
from .models import OrderInfo,OrderGoods
import time


# Create your views here.

def place_order(request):
    """提交订单页面"""

    # 读取购物车商品列表
    cart_goods_list = []
    # 商品总数
    cart_goods_count = 0
    # 商品总价
    cart_goods_money = 0
    for goods_id, goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue

        cart_goods = GoodsInfo.objects.get(id=goods_id)
        cart_goods.goods_num = goods_num
        cart_goods.total_money = int(goods_num) * cart_goods.goods_price
        cart_goods_list.append(cart_goods)
        # 累加购物车商品总数
        cart_goods_count = cart_goods_count + int(goods_num)
        # 累计商品总价
        cart_goods_money += int(goods_num) * cart_goods.goods_price

    return render(request, 'place_order.html', {'cart_goods_list': cart_goods_list,
                                                'cart_goods_count': cart_goods_count,
                                                'cart_goods_money': cart_goods_money})

def submit_order(request):
    """保存订单"""

    # 获得订单信息
    addr=request.POST.get('addr','')
    recv=request.POST.get('recv','')
    tele=request.POST.get('tele','')
    extra=request.POST.get('extra','')
    # 保存订单信息
    orderinfo=OrderInfo()
    orderinfo.order_addr=addr
    orderinfo.order_recv=recv
    orderinfo.order_tele=tele
    orderinfo.order_extra=extra
    # 生成订单编号
    orderinfo.order_id=str(int(time.time())*1000)+str(int(time.perf_counter())*1000000)
    orderinfo.save()
    # 跳转页面
    response=redirect(f'/order/submit_success/?id={orderinfo.order_id}')
    # 保存订单商品信息
    for goods_id, goods_num in request.COOKIES.items():
        if not goods_id.isdigit():
            continue
        # 查询商品信息
        cart_goods=GoodsInfo.objects.get(id=goods_id)
        # 创建订单商品信息
        ordergoods = OrderGoods()
        ordergoods.goods_num=goods_num
        ordergoods.goods_info = cart_goods
        ordergoods.goods_order = orderinfo
        ordergoods.save()
        # 删除购物车信息
        response.delete_cookie(goods_id)

    return response

def submit_success(request):
    """显示订单结果"""
    order_id=request.GET.get('id')
    order_info=OrderInfo.objects.get(order_id=order_id)
    order_goods_list=OrderGoods.objects.filter(goods_order=order_info)
    # 商品总价
    totla_money=0
    total_num = 0
    # 商品总数量
    for order_goods in order_goods_list:
        total_num+= order_goods.goods_num
        totla_money+= (order_goods.goods_num)*(order_goods.goods_info.goods_price)

    return render(request, 'success.html', {'order_info': order_info,
                                            'order_goods_list': order_goods_list,
                                            'totla_money': totla_money,
                                            'total_num': total_num})
from django.contrib import admin

# Register your models here.
from order.models import OrderInfo

class OrderInfoAdmin(admin.ModelAdmin):
    #注意列表参数要和模型类的一致
    list_display = ['id','order_id','order_addr','order_recv','order_tele','order_fee','order_extra','order_status']
    list_per_page = 15  # 分页显示，每页10条
    search_fields = ["id",'order_id','order_addr','order_recv','order_tele','order_fee','order_extra','order_status']

admin.site.register(OrderInfo,OrderInfoAdmin)#将此类和模型类关联起来
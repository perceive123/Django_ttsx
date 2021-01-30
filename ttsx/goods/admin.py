from django.contrib import admin

#register your models here
from goods.models import GoodsInfo

class GoodsInfoAdmin(admin.ModelAdmin):
    #注意列表参数要和模型类的一致
    list_display=['id',
                  'goods_name',
                  'goods_price',
                  'goods_desc',
                  'goods_img',
                  'goods_cag']
    #分页显示，每页显示15条
    list_per_page=15
    #模糊查找
    search_fields = ['id',
                    'goods_name',
                    'goods_price',
                    'goods_desc',
                    'goods_img',
                    'goods_cag']
admin.site.register(GoodsInfo,GoodsInfoAdmin)



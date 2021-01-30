from django.db import models

# Create your models here.
class GoodsCategory(models.Model):
    """商品分类模型"""

    # 分类名称
    cag_name = models.CharField(max_length=30)
    # 分类样式
    cag_css = models.CharField(max_length=20)
    # 分类图片
    cag_img = models.ImageField(upload_to='cag')


# class GoodsInfo(models.Model):
#     """商品信息模型"""
#
#     # 商品名字
#     goods_name = models.CharField(max_length=100)
#     # 商品单位
#     goods_unit = models.CharField(max_length=50)
#     # 商品价格
#     goods_price = models.IntegerField(default=0)
#     # 商品图片
#     goods_img = models.ImageField(upload_to='goods')
#     # 商品描述
#     goods_desc = models.CharField(max_length=2000)
#     # 所属分类
#     goods_cag = models.ForeignKey('GoodsCategory',on_delete=models.CASCADE)

class GoodsInfo(models.Model):
    goods_name = models.CharField(max_length=100)
    goods_price = models.IntegerField()
    goods_desc = models.CharField(max_length=2000)
    goods_img = models.CharField(max_length=100)
    goods_cag = models.ForeignKey('Goodscategory', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'goods_goodsinfo'
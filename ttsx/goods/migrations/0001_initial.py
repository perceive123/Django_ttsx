# Generated by Django 2.2.13 on 2021-01-05 13:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GoodsCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cag_name', models.CharField(max_length=30)),
                ('cag_css', models.CharField(max_length=20)),
                ('cag_img', models.ImageField(upload_to='cag')),
            ],
        ),
        migrations.CreateModel(
            name='GoodsInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goods_name', models.CharField(max_length=100)),
                ('goods_price', models.IntegerField(default=0)),
                ('goods_desc', models.CharField(max_length=2000)),
                ('goods_img', models.ImageField(upload_to='goods')),
                ('goods_cag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.GoodsCategory')),
            ],
        ),
    ]

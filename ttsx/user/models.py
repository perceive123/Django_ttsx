from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class UserInfo(AbstractUser,models.Model):
    tel = models.CharField(max_length=11, verbose_name='联系方式 ', blank=False)
    sex = models.BooleanField(verbose_name='性别 ', blank=False)  # true 男  false 女

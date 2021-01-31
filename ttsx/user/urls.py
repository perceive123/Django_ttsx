from django.urls import path
from .views import *

urlpatterns=[
    path('login/', login),
    path('loginDeal/', loginDeal),
    path('register/', register),
    path('registerDeal/', registerDeal),
    path('userindex/', userindex),
    path('user/', user),
    path('add/', add),
    path('addDeal/', addDeal),
    path('edit/', edit),
    path('editDeal/', editDeal),
    path('delete/', delete),
    path('logout/', logout),
]
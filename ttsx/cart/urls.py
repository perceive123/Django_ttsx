from django.urls import path
from .views import add_cart, show_cart, remove_cart

urlpatterns = [
    path('add_cart/', add_cart),
    path('show_cart/', show_cart),
    path('remove_cart/', remove_cart),
]
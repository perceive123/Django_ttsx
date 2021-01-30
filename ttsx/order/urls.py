from django.urls import path
from .views import place_order, submit_order, submit_success

urlpatterns = [
    path('place_order/', place_order),
    path('submit_order/', submit_order),
    path('submit_success/', submit_success),
]
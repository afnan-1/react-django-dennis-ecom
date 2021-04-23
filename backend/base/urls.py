from django.urls import path
from .views import *

urlpatterns = [
    path('',getRoutes, name="routes"),
    path('product/<int:pk>/',getProduct,name="products"),
    path('products/',getProducts,name="all_products"),
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/',getUserProfile,name="user_profile"),

]
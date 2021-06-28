from django.urls import path
from base.views import product_views as views

urlpatterns = [
    path('<int:pk>/',views.getProduct,name="products"),
    path('',views.getProducts,name="all_products"),
    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('top/', views.getTopProducts, name='top-products'),
    path('suggestedproducts/',views.getSuggestedProducts,name="suggested-products")

]
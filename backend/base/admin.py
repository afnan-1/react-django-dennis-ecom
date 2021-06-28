from django.contrib import admin
from .models import *
# Register your models here.

# class OrderAdmin(admin.ModelAdmin):

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Review)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

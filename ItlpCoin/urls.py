from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'ItlpCoin.views.home', name='home'),
    
    url(r'', include('coinSite.urls')),
    url(r'^admin/', include(admin.site.urls)),
]

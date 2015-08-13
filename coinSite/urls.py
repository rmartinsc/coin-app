from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_page, name='home_page'),    
    url(r'^post_list/$', views.post_list, name='post_list'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
    url(r'^post/new/$', views.post_new, name='post_new'),
    url(r'^unapproved/$', views.post_draft_list, name='post_draft_list'),
    url(r'^post/(?P<pk>[0-9]+)/approve/$', views.post_publish, name='post_publish'),
    url(r'^post/(?P<pk>[0-9]+)/reject/$', views.post_remove, name='post_remove'),
    url(r'^thanks_submit/$', views.thanks_submit, name='thanks_submit'),
    url(r'^ge_beliefs/$', views.ge_beliefs, name='ge_beliefs'),
    url(r'^aviation/$', views.aviation, name='aviation'),
    url(r'^corporate/$', views.corporate, name='corporate'),
    url(r'^about/$', views.about, name='about'),
]

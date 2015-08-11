from django.shortcuts import render
from django.utils import timezone
from .models import Story

# Create your views here.
def post_list(request):
    posts = Story.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'coinSite/post_list.html', {'posts': posts})
from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .forms import SubmitForm
from .models import Story

# Create your views here.
def post_list(request):
    posts = Story.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'coinSite/post_list.html', {'posts': posts})
    
def post_detail(request, pk):
    post = get_object_or_404(Story, pk=pk)
    return render(request, 'coinSite/post_detail.html', {'post': post})
    
@login_required
def post_new(request):
    if request.method == "POST":
        form = SubmitForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.coinGiver = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('coinSite.views.post_detail', pk=post.pk)
    else:
        form = SubmitForm()
    return render(request, 'coinSite/post_edit.html', {'form': form})

@login_required
def post_draft_list(request):
    posts = Story.objects.filter(published_date__isnull=True).order_by('created_date')
    return render(request, 'coinSite/post_draft_list.html', {'posts': posts})
    
@login_required
def post_publish(request, pk):
    post = get_object_or_404(Story, pk=pk)
    post.publish()
    return redirect('coinSite.views.post_detail', pk=pk)

@login_required   
def post_remove(request, pk):
    post = get_object_or_404(Story, pk=pk)
    post.delete()
    return redirect('coinSite.views.post_list')
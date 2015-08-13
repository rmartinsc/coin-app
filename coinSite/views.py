from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .forms import SubmitForm
from .models import Story

# Create your views here.
def post_list(request):
    posts = Story.objects.filter(published_date__lte=timezone.now()).order_by('receiverBusiness')
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
            post.save()
            return render(request, 'coinSite/post_thanks.html')
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
    return redirect('coinSite.views.post_draft_list')

@login_required   
def post_remove(request, pk):
    post = get_object_or_404(Story, pk=pk)
    post.delete()
    return redirect('coinSite.views.post_draft_list')
    
def home_page(request):
    return render(request, 'coinSite/home.html')

def ge_beliefs(request):
    return render(request, 'coinSite/ge_beliefs.html')

def about(request):
    return render(request, 'coinSite/about.html')
    
@login_required    
def thanks_submit(request):
    return render(request, 'coinSite/post_thanks.html')
    
def aviation(request):
    posts = Story.objects.filter(published_date__lte=timezone.now())
    return render(request, 'coinSite/aviation.html', {'posts': posts})
    
def corporate(request):
    posts = Story.objects.filter(published_date__lte=timezone.now())
    return render(request, 'coinSite/corporate.html', {'posts': posts})

@login_required    
def ge_dashboard(request):
    return render(request, 'coinSite/ge_dashboard.html',)
    
    
    
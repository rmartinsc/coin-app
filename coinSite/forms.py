from django import forms

from .models import Story

class SubmitForm(forms.ModelForm):

    class Meta:
        model = Story
        fields = ('coinReceiverName', 'receiverBusiness', 'storyTitle', 'storyText',)
from django import forms

from django.forms.widgets import RadioFieldRenderer
from django.utils.encoding import force_unicode
from django.utils.safestring import mark_safe

class MyCustomRenderer( RadioFieldRenderer ):
    def render( self ):
        """Outputs a series of <td></td> fields for this set of radio fields."""
        return mark_safe(u'\n'.join([u'<td>%s</td>\n' % w for w in self]))

from .models import Story

class SubmitForm(forms.ModelForm):

    class Meta:
        
        BUSINESS = [('Aviation', 'Aviation'),
                    ('Corporate', 'Corporate'),
                    ('Energy Management', 'Energy Management'),
                    ('Power and Water', 'Power and Water'),
                    ('Oil and Gas', 'Oil and Gas'),
                    ('Healthcare', 'Healthcare'),
                    ('Transportation', 'Transportation'),
                    ]
        
        model = Story
        fields = ('coinReceiverSSO','coinReceiverFirstName', 'coinReceiverLastName', 'coinReceiverEmail','receiverBusiness', 'storyTitle', 'storyText',)
        widgets = {'storyTitle' : forms.Textarea(attrs={'cols': 50, 'rows': 1}),
                   'storyText' : forms.Textarea(attrs={'cols': 50, 'rows': 5}),
                   'receiverBusiness' : forms.RadioSelect(choices = BUSINESS,
                                                          renderer=MyCustomRenderer,
                                                          ),
                   }
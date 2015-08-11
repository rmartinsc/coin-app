from django.db import models
from django.utils import timezone


class Story(models.Model):
    coinGiver = models.ForeignKey('auth.User')
    coinReceiverName = models.CharField(max_length=20)
    receiverBusiness = models.CharField(max_length=20)
    storyTitle = models.CharField(max_length=200)
    storyText = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.storyTitle
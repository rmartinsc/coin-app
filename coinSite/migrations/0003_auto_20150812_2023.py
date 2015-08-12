# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('coinSite', '0002_story_receiverbusiness'),
    ]

    operations = [
        migrations.RenameField(
            model_name='story',
            old_name='coinReceiverName',
            new_name='coinReceiverFirstName',
        ),
        migrations.AddField(
            model_name='story',
            name='coinReceiverEmail',
            field=models.CharField(default=datetime.datetime(2015, 8, 12, 20, 23, 12, 356731, tzinfo=utc), max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='story',
            name='coinReceiverLastName',
            field=models.CharField(default=datetime.datetime(2015, 8, 12, 20, 23, 20, 495280, tzinfo=utc), max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='story',
            name='coinReceiverSSO',
            field=models.CharField(default=datetime.datetime(2015, 8, 12, 20, 23, 27, 74271, tzinfo=utc), max_length=9),
            preserve_default=False,
        ),
    ]

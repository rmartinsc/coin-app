# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('coinSite', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='receiverBusiness',
            field=models.CharField(default=datetime.datetime(2015, 8, 11, 2, 57, 2, 896650, tzinfo=utc), max_length=20),
            preserve_default=False,
        ),
    ]

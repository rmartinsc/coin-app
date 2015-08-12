# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coinSite', '0003_auto_20150812_2023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='coinReceiverEmail',
            field=models.CharField(max_length=50),
        ),
    ]

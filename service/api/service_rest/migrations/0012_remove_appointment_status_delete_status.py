# Generated by Django 4.0.3 on 2022-06-21 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_status_appointment_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='status',
        ),
        migrations.DeleteModel(
            name='Status',
        ),
    ]

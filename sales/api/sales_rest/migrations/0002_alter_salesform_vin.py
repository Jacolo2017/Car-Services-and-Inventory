# Generated by Django 4.0.3 on 2022-06-24 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesform',
            name='vin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='sales_rest.automobilevo', unique=True),
        ),
    ]

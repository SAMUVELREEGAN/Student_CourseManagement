# Generated by Django 4.2.16 on 2024-10-31 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0004_remove_courses_course_image_courses_picture_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='courses',
            name='course_name',
        ),
        migrations.AddField(
            model_name='courses',
            name='course_nam',
            field=models.CharField(max_length=200, null=True),
        ),
    ]

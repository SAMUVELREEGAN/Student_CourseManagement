from django.db import models

# Create your models here.

class Courses(models.Model):
    course_name = models.CharField(max_length=200,null=True)
    course_duration = models.IntegerField(default=0)
    picture = models.ImageField(null=True,upload_to='images/')
    paid_fee = models.IntegerField(default=0)

    def __str__(self):
        return self.course_name
    # def __str__(self):
    #     return str(self.id)
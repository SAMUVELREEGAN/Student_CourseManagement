from django.db import models
from django.contrib.auth.models import User
from Course.models import *

# Create your models here.

class Students(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True)

    Full_name = models.CharField(max_length=200,null=True)

    Mobile_number = models.CharField(max_length=200,null=True)

    Course_ref = models.ForeignKey(Courses,on_delete=models.CASCADE,null=True)

    Paid_fee = models.IntegerField(default=0)

    def __str__(self):
        return self.Full_name
from rest_framework import serializers
from .models import *

class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model =Courses
        fields = '__all__'
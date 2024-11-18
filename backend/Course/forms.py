from django import forms
from .models import *

class CourseForm(forms.ModelForm):
    class Meta:
        model = Courses
        fields = ['course_name','course_duration','paid_fee','picture']
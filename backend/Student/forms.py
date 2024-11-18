from django import forms
from .models import *

class StudentFrom(forms.ModelForm):
    class Meta:
        model = Students
        fields =['Full_name','Mobile_number','Course_ref','Paid_fee']

class UserCreation(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username','password']
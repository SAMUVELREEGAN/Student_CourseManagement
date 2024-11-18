from django.shortcuts import render
from rest_framework.views import APIView
from .forms import *
from rest_framework.response import Response
from .models import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny,IsAdminUser
from rest_framework.authentication import BasicAuthentication
from .serializers import *
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView

# Create your views here.

# class CourseAddView(APIView):
#     def post(self,request):
#         course_data = CourseForm(request.data,request.FILES)

#         if course_data.is_valid():
#             new_course = Courses(
#                 course_name = course_data.data['course_name'],
#                 course_duration = course_data.data['course_duration'],
#                 picture = course_data.data['picture'],
#                 paid_fee = course_data.data['paid_fee']
#             )
#             new_course.save()
#             return Response({"success":"Course Data Saved"})
#         return Response({"error":"Course Data Not Saved"})   

class CourseDetails(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Courses.objects.all()
    serializer_class = CourseSerializers

class CourseCreate(CreateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializers

class CourseList(ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializers

class CourseDelete(DestroyAPIView):
    queryset = Courses.objects.all()
    Response ('deleted')

class CourseUpdate(UpdateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializers
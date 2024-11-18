from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .forms import *
from django.contrib.auth import authenticate,login
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny,IsAdminUser,IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from rest_framework.generics import ListAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class SignUpView(APIView):
    def post(self,request):
        student_data = StudentFrom(request.data)
        user_data = UserCreation(request.data)

        if student_data.is_valid() and user_data.is_valid():
            new_user = user_data.save(commit=False)
            new_user.set_password(user_data.data['password'])
            new_user.save()

            new_student = Students(
                user = new_user,
                Full_name = student_data.data['Full_name'],
                Mobile_number = student_data.data['Mobile_number'],
                Course_ref_id = student_data.data['Course_ref'],
                Paid_fee = student_data.data['Paid_fee']
            )
            new_student.save()
            return Response({"success":"User Create Successfully"})
        return Response({"error":"Invaild User Data"})
    
class StudentLogin(APIView):
    def post(self,request):
        user_data = authenticate(username = request.data['username'],password=request.data['password'])

        if user_data is not None:
            refresh = RefreshToken.for_user(user_data)
            access_token = str(refresh.access_token)
            return Response({'success': 'Login successful', "access_token": access_token,"refresh_token": str(refresh)})
        else:
            return Response({"error":"Invalid credentials"})
        
class StudentDetails(ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


class StudentList(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

class StudentUpdate(UpdateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

class StudentDelete(DestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


    

class StudentProfileView(APIView):

    permission_classes = [IsAuthenticated] 

    def get(self, request):
        user = request.user
        student = Students.objects.get(user=user)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    
       
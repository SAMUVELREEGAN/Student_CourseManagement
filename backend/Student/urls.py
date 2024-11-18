from django.urls import path,include
from .views import *

from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('stuentdetails',StudentDetails,basename='student')


urlpatterns = [
    path('',include(router.urls)),

    path('signup/',SignUpView.as_view()),
    path('login/',StudentLogin.as_view()),
    path('studentlist/',StudentList.as_view()),
    path('studentupdate/<int:pk>/',StudentUpdate.as_view()),
    path('studentdelete/<int:pk>/',StudentDelete.as_view()),
   path('profile/', StudentProfileView.as_view(), name='student-profile')
]

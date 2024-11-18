from django.urls import path,include
from .views import *


from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('coursedetails',CourseDetails,basename='course')



urlpatterns = [
  # path('courseadd/',CourseAddView.as_view()),
  path('',include(router.urls)),
  path('courseadd/',CourseCreate.as_view()),
  path("courselist/",CourseList.as_view()),
  path('coursedelete/<int:pk>/',CourseDelete.as_view()),
  path('courseupdate/<int:pk>/',CourseUpdate.as_view()),
]

from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class AdminPageView(APIView):
    def post(self, request):

        user_data = authenticate(username=request.data["username"], password=request.data["password"])

        if user_data is not None:
            if user_data.is_superuser:
                refresh = RefreshToken.for_user(user_data)
                access_token = str(refresh.access_token)
                return Response({'success': 'Login successful', "access_token": access_token,"refresh_token": str(refresh)})
            else:
                return Response({'error': 'User is not an admin'})
        else:
            return Response({'error': 'Invalid credentials'})

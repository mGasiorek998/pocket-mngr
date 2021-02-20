from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer

# Task Viewset


class TasksViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()  # get all tasks
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TaskSerializer

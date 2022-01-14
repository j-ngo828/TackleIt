from rest_framework import viewsets

from todoapp.serializers import TaskSerializer

from .models import Task


class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

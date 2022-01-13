from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.serializers import Serializer

from .models import Task
from .serializers import TaskSerializer


class TodoView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

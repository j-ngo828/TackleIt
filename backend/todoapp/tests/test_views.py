import json

from django.test import Client, TestCase
from django.urls import reverse
from rest_framework import status
from todoapp.models import Task
from todoapp.serializers import TaskSerializer

# initialize the APIClient app
client = Client()


class GetTaskTest(TestCase):
    def setUp(self):
        self.task_0 = Task.objects.create(
            title="Task 0", description="__description0__", completed=False
        )
        self.task_1 = Task.objects.create(
            title="Task 1", description="__description1__", completed=True
        )
        self.task_2 = Task.objects.create(
            title="Task 2", description="__description2__", completed=False
        )

    def test_get_task_0(self):
        response = client.get(
            reverse("task-detail", kwargs={"pk": self.task_0.pk})
        )
        task_obj = Task.objects.get(pk=self.task_0.pk)
        serializer = TaskSerializer(task_obj)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_all_tasks(self):
        response = client.get(reverse("task-list"))
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_nonexistent_task(self):
        response = client.get(reverse("task-detail", kwargs={"pk": 10000}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class CreateTaskTest(TestCase):
    def setUp(self):
        self.valid_payload = {
            "title": "MATH 239",
            "description": "Finish Assignment 1",
            "completed": False,
        }
        self.invalid_payload = {
            "title": "",
            "description": "Is this a valid task?",
            "completed": True,
        }

    def test_create_valid_task(self):
        response = client.post(
            reverse("task-list"),
            data=json.dumps(self.valid_payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        created_task = Task.objects.get(pk=response.data["id"])
        self.assertEqual(created_task.title, self.valid_payload["title"])
        self.assertEqual(
            created_task.description, self.valid_payload["description"]
        )
        self.assertEqual(
            created_task.completed, self.valid_payload["completed"]
        )

    def test_create_invalid_task(self):
        response = client.post(
            reverse("task-list"),
            data=json.dumps(self.invalid_payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

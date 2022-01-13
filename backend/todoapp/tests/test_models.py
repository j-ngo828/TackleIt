from django.test import TestCase
from todoapp.models import Task

TASK_TITLE = "__test_title_of_task_item__"

TASK_DESCRIPTION = "__test_to_do_task_item__"


class TaskModelTest(TestCase):
    def test_can_create_a_new_todo_task(self):
        task = Task(
            title=TASK_TITLE, description=TASK_DESCRIPTION, completed=False
        )
        task.save()
        obj = Task.objects.get(id=task.id)
        self.assertEqual(obj.title, TASK_TITLE)
        self.assertEqual(obj.description, TASK_DESCRIPTION)
        self.assertEqual(obj.completed, False)

    def test_task_model_has_string_representation_as_title(self):
        task = Task(
            title=TASK_TITLE, description=TASK_DESCRIPTION, completed=True
        )
        task.save()
        obj = Task.objects.get(id=task.id)
        self.assertEqual(str(obj), TASK_TITLE)

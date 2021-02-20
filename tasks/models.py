from django.db import models

# Create your models here.


class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    difficulty = models.IntegerField()
    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

from django.db.models import fields
from tasks.models import Task
from rest_framework import serializers


# Task Serializer:
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'  # Serialize all Task Fields

from rest_framework import routers, urlpatterns
from .api import TasksViewSet

router = routers.DefaultRouter()
router.register('api/tasks', TasksViewSet, 'tasks')

urlpatterns = router.urls

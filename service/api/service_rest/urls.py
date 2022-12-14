from django.urls import path
from .views import(
    api_list_technicians,
    api_show_technicians,
    api_list_appointment,
    api_show_appointment,
    api_list_vins,
    cancelled_status,
    completed_status,
    api_all_appointments,
    )

urlpatterns = [
    path('technicians/', api_list_technicians, name='api_technicians'),
    path('appointments/', api_list_appointment, name='api_appointment'),
    path('appointments/<int:pk>/', api_show_appointment, name='api_show_appointment'),
    path('technicians/<int:pk>/', api_show_technicians, name='api_show_technicians'),
    path('vins/', api_list_vins, name='api_list_vins'),
    path('appointments/completed/<int:pk>/', completed_status, name='completed_status'),
    path('appointments/cancelled/<int:pk>/', cancelled_status, name='cancelled_status'),
    path('history/', api_all_appointments, name='api_all_appointments'),
]
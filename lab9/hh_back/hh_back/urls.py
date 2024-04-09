"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from api.views import list_companies, get_company, list_vacancies_by_companies, list_vacancies, get_vacancy, get_top_vacancies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/', list_companies, name='list_companies'),
    path('companies/<int:company_id>/', get_company, name='get_company'),
    path('companies/<int:company_id>/vacancies', list_vacancies_by_companies, name='list_vacancies_by_companies'),

    path('vacancies/', list_vacancies, name='list_vacancies'),
    path('vacancies/<int:vacancy_id>/', get_vacancy, name='get_vacancy'),
    path('vacancies/top_ten/', get_top_vacancies, name='get_top_vacancies'),
]
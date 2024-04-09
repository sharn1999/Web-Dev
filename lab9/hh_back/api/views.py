from django.http import JsonResponse

# Create your views here.
from api.models import Company, Vacancy


def list_companies(request):
    companies = Company.objects.all().values()
    return JsonResponse(list(companies), safe=False)

def get_company(request, company_id):
    company = Company.objects.values().get(id=company_id)
    return JsonResponse(company)

def list_vacancies_by_companies(request, company_id):
    company = Vacancy.objects.filter(company_id=company_id).values()
    return JsonResponse(list(company), safe=False)


def list_vacancies(request):
    vacancies = Vacancy.objects.all().values()
    return JsonResponse(list(vacancies), safe=False)

def get_vacancy(request, vacancy_id):
    vacancy = Vacancy.objects.values().get(id=vacancy_id)
    return JsonResponse(vacancy)

def get_top_vacancies(request):
    vacancies = Vacancy.objects.all().values().order_by('-salary')[:10]
    return JsonResponse(list(vacancies), safe=False)
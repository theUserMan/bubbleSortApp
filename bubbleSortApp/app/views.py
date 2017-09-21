"""
Definition of views.
"""
import json
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.template import RequestContext
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt, requires_csrf_token
from app.functions import *

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )

@csrf_exempt
def launchBubble(request):
    inputArray = request.GET.get('inputArray')
    ''' convert the array into a json object '''
    jsonList = json.dumps(bubbleMain(inputArray))
    try:
        print(jsonList)
    except Exception as e:
        return HttpResponse('Failed', status=400)
        print('Error in getting request')
    return HttpResponse(jsonList, status=200)


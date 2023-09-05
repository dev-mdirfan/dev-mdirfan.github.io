---
title: 01. Simple CRUD Django App
author: irfan
date: 2023-09-01 11:33:00 +0800
categories: [Django, Django Projects]
tags: [python, django, crud, simple-crud-django-app]
math: true
mermaid: true
image:
  path: /assets/images/posts/django/django-projects/simple-crud-django-app.png
  alt: Simple CRUD Django App
---

Before you start, make sure you have installed Python on your computer. If you haven't installed it yet, you can download it [here](https://www.python.org/downloads/).

After installing Python, if you want to use the virtual environment, you can install it using the following command. otherwise you can skip this step. Head over to the [create-project](#1-create-project) section.

```bash
pip install virtualenv
```

After installing the virtual environment, you need to create a virtual environment using the following command.

```bash
virtualenv venv
```

After creating the virtual environment, you have to activate it using the following command.

```bash
venv\Scripts\activate
```


## 1. Create Project

```bash
django-admin startproject crud .
```

## 2. Create App

```bash
python manage.py startapp home
```
The server started successfully. You can access the server at <http://


## 3. Create Model

```python
from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
```
{: file="home/models.py" }

## 4. Create Migration

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

## 5. Create Super User

```bash
python manage.py createsuperuser
```

## 6. Register Model

```python
from django.contrib import admin
from .models import Student

# Register your models here.
admin.site.register(Student)
```
{: file="home/admin.py" }

## 7. Create View

```python
from django.shortcuts import render
from .models import Student

# Create your views here.

def home(request):
    students = Student.objects.all()
    context = {
        'students': students
    }
    return render(request, 'home/home.html', context)
```
{: file="_home/views.py" }

## 8. Create Base Template

````markdown
{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple CRUD Django App</title>
</head>
<body>
    <h1>Simple CRUD Django App</h1>
    {% block content %}
    <!-- Content -->
    {% endblock %}
</body>
</html>
```
{% endraw %}
````
{: file="home/templates/base.html" }

## 9. Create Template

````markdown
{% raw %}
```html
{% extends 'base.html' %}

{% block content %}
{% if students %}
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
        </thead>
        <tbody>
            {% for student in students %}
            <tr>
                <td>{{ student.name }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.address }}</td>
                <td>{{ student.created_at }}</td>
                <td>{{ student.updated_at }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
{% else %}
    <p>No data found.</p>
{% endif %}
{% endblock %}
```
{% endraw %}
````
{: file="home/templates/home/home.html" }

## 9. Create project URL

```python
from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('admin/', admin.site.urls),
]
```
{: file="crud/urls.py" }

## 10. Create App URL

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
```
{: file="home/urls.py" }

## 11. Run Server

```bash
python manage.py runserver
```

## 12. Create form

form is a built-in Django class for creating HTML forms. It is used to create forms with the database model. It is used to create a form in Django.

```python
from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'
    labels = {
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'address': 'Address',
    }
```
{: file="home/forms.py" }

## 13. Create View

```python
from django.shortcuts import render, redirect
from .models import Student
from .forms import StudentForm

# Create your views here.

def home(request):
    students = Student.objects.all()
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = StudentForm()
    context = {
        'students': students,
        'form': form
    }
    return render(request, 'home/home.html', context)
```

## 14. Create Template

````markdown
{% raw %}
```html
{% extends 'base.html' %}

{% block content %}
<form action="" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Submit</button>
</form>
{% endblock %}
```
{% endraw %}
````
{: file="home/templates/home/home.html" }










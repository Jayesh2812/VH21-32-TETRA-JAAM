from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error,mean_absolute_error
# Create your views here.
@csrf_exempt
def get_form_data(request):
    attribute_data = json.load(request)['data']
    print(attribute_data)
    # {'age': '45', 'height': '45', 'weight': '45', 'gender': '1', 'sbp': '45', 'dbp': '45', 'cholestrol': 'normal', 'glucose': 'normal', 'physically-active': '1'}
    result_text = ''
    value = predict(attribute_data)
    if value < 0.33:
        result_text = "Healthy State - You are more likely not suffering from cardiovascular disease"
    elif value < 0.66:
        result_text = "Concerned State - You are at moderate risk, do adopt some good habits"
    else:
        result_text = "Warning State - You are more likely suffering from cardiovascular disease, you may need to consult to a doctor"
    height = int(attribute_data['height'])
    weight = int(attribute_data['weight'])
    # print(height, weight)
    BMI = get_BMI(height, weight)
<<<<<<< HEAD
    return JsonResponse({'percentage':round(value, 2), 'result': result_text, 'BMI': BMI})
=======
    return JsonResponse({'percentage':round(value, 2), 'result': result_text, 'BMI': round(BMI,2)})
>>>>>>> a03ebf7ba02f808efd059c408fe30ba2923af729


def predict(data):
    attribute_data_values = [ ]
    attribute_data_values.append(int(data['gender']))
    attribute_data_values.append(int(data['height']))
    attribute_data_values.append(int(data['age']))
    attribute_data_values.append(int(data['weight']))
    attribute_data_values.append(int(data['sbp']))
    attribute_data_values.append(int(data['dbp']))
    attribute_data_values.append(int(data['cholestrol']))
    attribute_data_values.append(int(data['glucose']))
    attribute_data_values.append(int(data['smoking']))
    attribute_data_values.append(int(data['alcohol']))
    attribute_data_values.append(int(data['physically-active']))

    print(attribute_data_values)
    with open('RFRmodel','rb') as f:
        RFRmodel=pickle.load(f)
    
    return RFRmodel.predict([attribute_data_values])[0]

def get_BMI(height, weight):
    height = height / 100
    BMI = weight / (height ** 2)
    return round(BMI, 2)
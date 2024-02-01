from get_data_from_db import data
from collections import Counter

def x_vs_intensity(x):
    x_vs_intensity = {}
    for k in data:
        if k[x] != "" and k[x] not in x_vs_intensity.keys() and k["intensity"] != "":
            x_vs_intensity[k[x]] = []
            x_vs_intensity[k[x]].append(k["intensity"])
        elif k[x] != "" and (k["intensity"] != "" and k["intensity"]!=None):
            x_vs_intensity[k[x]].append(k["intensity"])
    return x_vs_intensity
    

def sector_vs_intensity_data():
    
    sector_vs_intensity = x_vs_intensity("sector")
    # print(len(sector_vs_intensity.keys()))
    sector_intensity_avg = []
    # print(sector_vs_intensity["Energy"])
    for i in sector_vs_intensity.keys():
        intensity_len = (len(sector_vs_intensity[i]))
        intensity_sum = (sum(sector_vs_intensity[i]))

        avg = intensity_sum/intensity_len
        avg = ("{:.2f}".format(avg))

        # print(i, avg)
        sector_intensity_avg.append({"sector":i,
                                     "intensity": avg})
    # print(sector_intensity_avg)
    return sector_intensity_avg
sector_vs_intensity_data()

def country_vs_intensity_data():

    country_vs_intensity = x_vs_intensity("country")
    country_intensity_avg = {}

    for i in country_vs_intensity.keys():
        intensity_len = (len(country_vs_intensity[i]))
        intensity_sum = (sum(country_vs_intensity[i]))

        avg = intensity_sum/intensity_len
        avg = ("{:.2f}".format(avg))

        country_intensity_avg[i] = avg

    return country_intensity_avg

# print(sector_vs_intensity_data())
# # print(data[0].keys())
# print(country_vs_intensity_data())

# print(topic_vs_relevance_data())

# def year_vs_sector_vs_intensity_data():
#     year_vs_sector_vs_intensity = {}
#     for k in data:
#         if k["year"] != "" and k["year"] not in year_vs_sector_vs_intensity.keys():
#                 year_vs_sector_vs_intensity[k["year"]] = {}
    
#     for i in year_vs_sector_vs_intensity.keys():
#         for k in data:
#             if k["year"] == i and k["sector"] != "" and k["sector"] not in year_vs_sector_vs_intensity[i].keys() and k["intensity"] != "":
#                 year_vs_sector_vs_intensity[i][k["sector"]] = []
#                 year_vs_sector_vs_intensity_data[i][k["sector"]].append(k["intensity"])
#             elif k["year"]==i and k["sector"] != "" and (k["intensity"] != "" and k["intensity"]!=None):
#                 year_vs_sector_vs_intensity_data[i][k["sector"]].append(k["intensity"])
    
#     year_sector_relevance_avg = {}
#     for i in year_vs_sector_vs_intensity.keys():
#         for j in year_vs_sector_vs_intensity[i]:
#             intensity_len = len(year_vs_sector_vs_intensity[i][j])
#             intensity_sum = sum(year_vs_sector_vs_intensity[i][j])

#             avg = intensity_sum/intensity_len
#             avg = ("{:.2f}".format(avg))

#             year_sector_relevance_avg[i][j] = avg
    
#     return year_sector_relevance_avg

# print(year_vs_sector_vs_intensity_data())


def x_vs_y(x,y):
    country_vs_sector = {}
    for k in data:
        if k[x] != "" and k[x] not in country_vs_sector.keys() and k[y] != "":
            country_vs_sector[k[x]] = []
            country_vs_sector[k[x]].append(k[y])
        elif k[x] != "" and (k[y] != "" and k[y]!=None):
            country_vs_sector[k[x]].append(k[y])
    
    return country_vs_sector

def country_vs_topic_data():
    country_vs_topic = x_vs_y("country", "topic")
    
    country_vs_topic_freq = {}
    
    for i in country_vs_topic.keys():
        if i not in country_vs_topic_freq.keys():
            country_vs_topic_freq[i] = dict(Counter(country_vs_topic[i]))
        else:
            country_vs_topic_freq[i] = dict(Counter(country_vs_topic[i]))

    return country_vs_topic_freq

def region_vs_sector_data():
    region_vs_sector = x_vs_y("region", "sector")
    
    region_vs_sector_final = []
    
    for i in region_vs_sector.keys():
        temp = []
        temp_dict = dict(Counter(region_vs_sector[i]))
        for k in temp_dict.keys():
            temp.append({
                "sector": k,
                "intensity": temp_dict[k]
            })
            # print(temp_dict)
        region_vs_sector_final.append({
            "region": i,
            "data": temp
        })
        # print(i, dict(Counter(region_vs_sector[i])))
        # region_vs_sector_final.append({
        #     "region" : i,
        #     "data": {
        #         dict((Counter(region_vs_sector[i])))
        #     }
        # })
        # if i not in region_vs_sector_freq.keys():
        #     region_vs_sector_freq[i] = dict(Counter(region_vs_sector[i]))
        # else:
        #     region_vs_sector_freq[i] = dict(Counter(region_vs_sector[i]))

    return region_vs_sector_final

# print(region_vs_sector_data()[0]['data'])


def topic_vs_relevance_data():
    topic_vs_relevance = {}
    for k in data:
        if k["topic"] != "" and k["topic"] not in topic_vs_relevance.keys() and k["relevance"] != "":
            topic_vs_relevance[k["topic"]] = []
            topic_vs_relevance[k["topic"]].append(k["relevance"])
        elif k["topic"] != "" and (k["relevance"] != "" and k["relevance"]!=None):
            topic_vs_relevance[k["topic"]].append(k["relevance"])
    
    topic_relevance_avg = []
    for i in topic_vs_relevance.keys():
        relevance_len = (len(topic_vs_relevance[i]))
        relevance_sum = (sum(topic_vs_relevance[i]))

        avg = relevance_sum/relevance_len
        avg = ("{:.2f}".format(avg))

        topic_relevance_avg.append({
            "topic":i,
            "relevance": avg
        })
    
    return topic_relevance_avg


def topic_vs_likelihood_data():
    topic_vs_likelihood = x_vs_y("topic", "likelihood")

    topic_vs_likelihood_final = []
    
    for k in topic_vs_likelihood.keys():
        avg = sum(topic_vs_likelihood[k])/len(topic_vs_likelihood[k])

        avg = ("{:.2f}".format(avg))

        topic_vs_likelihood_final.append({'topic': k,
                                          'value': avg})
        # print(k, avg)

    return ( topic_vs_likelihood_final)

topic_vs_likelihood_data()

# print(region_vs_sector_data())
# print(topic_vs_likelihood_data())
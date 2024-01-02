---
title: <span>How I managed my expenses with <strong>Python</strong> and <strong>Splitwise</strong></span>
description: After a recent move to <i>Switzerland</i>, I felt the necessity to <b>track all my expenses</b>. Here I explain how I did and how I managed to get the best from Splitwise and Python.
author: Gioele Crispo
img: /blog/how-i-managed-my-expenses-with-python-and-splitwise/_index.jpg
alt: Text chunks
tags: 
  - charts
  - python
  - finance
createdAt: 2023-08-31T21:15:32.000Z
updatedAt: 2023-12-31T21:15:32.000Z
---

# How I managed my expenses with Python and Splitwise

<br/>

+ Introduction 
+ Understanding **Splitwise** - *Simplifying Expense Management*
+ Empowering Splitwise with **Python** - *Customizing Expense Filtering*
+ Conclusions

<br/>

## Introduction
January 2023 has been a great month for me as I accepted a new job in Switzerland. 
Moving to Switzerland from Italy has been an eye-opening experience, especially when it comes to managing expenses. 
The stark difference in the cost of living compelled me to reevaluate how I handle my finances.

For more than a reason, my spending profile has changed drastically. 
Indeed, I had to leave my parents' house, choose new accommodation and started paying all the household bills 😁.
Suddenly, every purchase felt like a carefully considered decision, prompting the need for a more structured approach to tracking expenses.

Furthermore, my girlfriend and I moved in together; this made it even more crucial to understand costs and how to divide shared expenses.

As a method we chose a freemium expense tracking app, **Splitwise**. Splitwise is a great tool, and it has many useful features, available even with a free subscription.
Unfortunately, it has not all the filtering capabilities I needed, therefore... I have built my own filtering and analytics system with Python. 

In the subsequent sections of this post, we'll explore how combining Splitwise with Python automation took my expense management 
to a whole new level, providing deeper insights and empowering better financial decisions.

## Understanding Splitwise - Simplifying Expense Management
Splitwise is quite a famous tracking application, available for iOS and Android.
But let me introduce you to Splitwise in case you have never heard of it; 
I will give some reasons as to why I chose it, while also focusing on its advantages.

### What is Splitwise?
Splitwise is a user-friendly expense management application designed to streamline the process of splitting bills 
and tracking shared expenses among friends, family, or colleagues. 
It serves as a collaborative platform that simplifies the often intricate task of managing finances within groups.

### How does Splitwise Work?
At its core, Splitwise operates by allowing users to input expenses, categorize them, and distribute the costs 
among individuals involved. Users can create **various groups for different purposes**, such as sharing living expenses 
with roommates, splitting travel costs with friends, or even managing shared household expenses with family members.

The platform offers flexibility in adding diverse types of expenses, ranging from utility bills and rent to 
dining out or purchasing groceries. Once expenses are logged, Splitwise swiftly calculates each person's share, 
providing a transparent overview of who owes what to whom.
The tool is incredibly useful, as you do not need to compute nothing - you just add in your expenses and choose how it should be split.

### Key Advantages of Splitwise
- **Simplicity**: Splitwise simplifies complex calculations and minimizes misunderstandings, ensuring everyone is on the same page regarding shared expenses. This is extremely helpful when you share expenses with a large group of friend during a holiday or when you need to deal with a large number of expenses (e.g. personal daily and whole-life expenses) 

- **Transparency**: It fosters transparency by maintaining a clear record of expenses and balances, reducing potential conflicts arising from financial misunderstandings. Furthermore, **push notifications allow you to stay updated** on the latest group expenses added by other members.

- **Accessibility**: Available as both a website and a mobile app, Splitwise offers accessibility across various devices, making it convenient to update and **track expenses on the go**. This is a game-changer with respect to a spreadsheet, which need more attention and usually bigger screen to be updated.

- **Built-in Categorization**: It has a good number of built-in categories, such as: *rent*, *groceries*, *utilities*, *alcohol*, *sports*, *movies*, etc. It also has a semantic engine to automatically recognize category from the description. This is important to **immediately visualize spending patterns and find financial spots** to improve.

<br>


## Empowering Splitwise with Python - Customizing Expense Filtering

While Splitwise proved to be an invaluable tool in managing shared expenses, I encountered a limitation: 
the inability to filter expenses precisely as I desired. To gain a more comprehensive overview and finer control 
over the data, I decided to take matters into my own hands by developing a Python script to access Splitwise's data using its APIs.

Let me attach two example, to showcase the final result I got:

1. **Aggregate filtering**, to summarize rental and utility expenses in the time interval from May 1st to December 31st, 2023. Note that I could specify a different time frame or user for each filter, but in this case it makes no sense.

<br>
<div style="text-align:center;">
<div>
<img src="blog/how-i-managed-my-expenses-with-python-and-splitwise/filter1.png" 
alt="dataset" width="100%"/>

<span style="font-size: 12px;">Fig. 1. Snapshot of my expenses after filtering by rent and utilities categories in the time interval from May 1st to December 31st, 2023.</span>
<br>

</div>
</div>
<br>


2. **Not-shared expenses**, to filter out expenses belonging to a single user and not shared with others, in the last week.

<br>
<div style="text-align:center;">
<div>
<img src="blog/how-i-managed-my-expenses-with-python-and-splitwise/filter2.png" 
alt="dataset" width="100%"/>

<span style="font-size: 12px;">Fig. 2. Snapshot of my last week's expenses. A pie chart for macro-categories is generated.</span>
<br>


</div>
</div>
<br>

Note that I could filter out also by text, getting all the expenses that contain the typed text in their description.
I used this to discover how much money I spent eating Thai food 😁. 

Let me describe how I did it, going step-by-step.

### Authentication and data retrieval
To achieve this, I initiated an authentication process using my credentials and logging into the Splitwise website. 
I inspected the web page in Google Chrome, I went to the Network tab, and I copied the cookie obtained from logging request.
Upon reverse engineering of the site, I found also the `groupId` (representing the ID of the expense group) necessary for accessing the data.

Utilizing these details, I crafted a Python script to call Splitwise's APIs, enabling me to fetch all expenses in a structured JSON format. 

Let's see the code.

`SplitwiseClient` is an abstract class that collects the base headers and url for the subsequent requests (e.g. fetching the expenses).

```python
import requests
from abc import ABC

class SplitwiseClient(ABC):
    def __init__(self, cookie):
        self._base_url = "https://secure.splitwise.com/api/v3.0/"
        self._headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Cookie': cookie,   # cookie I took from splitwise website and which contains auth information
            'Referer': 'https://secure.splitwise.com/',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
        }
```

`GroupExpenses` inherits from `SplitwiseClient` and it is specialized for retrieving expenses for a specific group within Splitwise.

The `get_users()` method retrieves user information for the specified group. It makes an API request to fetch details about group members and stores their names in self.usernames.

The `get_expenses()` method fetches expense data for the group. 
It constructs an API request to retrieve expenses based on the group ID taken as parameter of the constructor of the class. 

It extracts relevant fields from the API response, such as `description`, `cost`, `currency_code`, `date`, `category`, 
and `users` involved in the expenses.
The code then processes and organizes the retrieved data, filtering and formatting it to maintain specific fields 
and convert relevant data types.
It changes a bit the user info, to filter out more easily; in particular, it operates on each user's contribution to an expense, 
incorporating their paid share and net balance. 
The calculated values are appended to the expenses list. The method finally returns the formatted expenses.

```python
import requests

class GroupExpenses(SplitwiseClient):
  
    def __init__(self, group_id, cookie):
        super().__init__(cookie)
        self._group_id = group_id
        self.get_users() 

    def get_users(self):
        path_url = f"get_main_data?no_expenses=1&limit=3"
        response = requests.request("GET", self._base_url + path_url, headers=self._headers, data={})
        response_body = response.json()
        self.users = [g for g in response_body["groups"] if g["id"] == self._group_id][0]["members"]
        self.usernames = {}
        for user in self.users:
            username = user["first_name"]
            username += f' {user["last_name"]}' if user["last_name"] is not None else ""
            self.usernames[user["id"]] = username

    def get_expenses(self):
        total_transactions = 10000
        path_url = f"get_expenses?visible=true&order=date&group_id={self._group_id}&limit={total_transactions}"
        response = requests.request("GET", self._base_url + path_url, headers=self._headers, data={})
        response_body = response.json()
        fields_to_keep = ["description", "cost", "currency_code", "date", "category", "users"]
        expenses = []
        for e in response_body["expenses"]:
            for k in list(e.keys()):
                if k not in fields_to_keep:
                    del e[k]
            e["cost"] = float(e["cost"])
            e["category"] = e["category"]["name"]
            # macro_categories is a map for mapping a category to a macrocategory as shown in Fig. 3
            e["macro_category"] = macro_categories[e["category"]]  
            
        # Changing a bit the user info, to filter out more easily
        expense_users = {u["user_id"]: u for u in e["users"]}
        for user in self.users:
            user_id = user["id"]
            if user_id in expense_users:
                e[self.usernames[user_id]] = float(expense_users[user_id]["paid_share"]) \
                                             - float(expense_users[user_id]["net_balance"])
            else:
                e[self.usernames[user_id]] = None

        expenses.append(e)
        return expenses, response
```

Now, we can instantiate the `GroupExpenses` class and call its `get_expenses` method to retrieve the expenses of the target group.
```python
group_expenses = GroupExpenses(group_id=group_id,  # group_id is taken from Splitwise website
                                cookie=cookie)  
expenses = group_expenses.get_expenses()
```

Finally, I transform it to a `pandas` `DataFrame`, and I adjust the date field setting the proper `Date` type.
`pandas` is a Python core library for Data Analysis, and therefore the core of my filtering system.

```python
import pandas as pd

df = pd.DataFrame.from_dict(expenses)
df["date"] = pd.to_datetime(self.df['date'])
```


### Unveiling Hidden Insights

This script not only granted me access to the raw data but also facilitated the ability to filter and analyze expenses
according to my preferred criteria.

Basically, being it an exploratory analysis, I used an IPython notebook to visualize and manipulate the data. 
Therefore, I found it useful having the UI in the same environment, and to interact with the data dynamically I employed the IPython UI components.

It was not a straightforward journey, and I think that the code I wrote is neither clean nor good to share with others.
Due to my ignorance of how UI updating works in an IPython environment, I am sure I have committed anti-patterns 
and written some non-reusable code. 

For this reason, I will only share part of the code (adapted for demonstration purposes) of the filtering.

```python
usernames_options = list(group_expenses.usernames.values())                    # get all the available group users 
macro_categories_options = list(set(group_expenses.macro_categories.values())) # get all the available macrocategories  
categories_options = list(group_expenses.macro_categories.keys())              # get all the available subcategories  


def expense_filter(df, from_date, to_date, usernames, single_expenses, text_filter, macro_categories, categories):
    usernames_value = usernames if "All" not in usernames else usernames_options
    categories_value = categories if "All" not in categories else categories_options
    macro_categories_value = macro_categories  if "All" not in macro_categories else macro_categories_options

    if single_expenses:
        user_query_parts = []
        for username in usernames_value:
            user_query_parts.append(" & ".join([f"`{u}` != `{u}`" for u in list(set(usernames_options) - set([username]))]))
    else:
        user_query_parts = [f"`{username}` > 0" for username in usernames_value]

    df = df[(df["date"] >= str(from_date)) & (df["date"] <= str(to_date)) &
        df['macro_category'].isin(macro_categories_value) & df['category'].isin(categories_value)]
    df = df.query(" | ".join(user_query_parts))

    if text_filter != "":
        df = df[df["description"].str.lower().str.contains(text_filter)]

    return df
```

The code above implements the filtering code used in each filter. 
Then, the resulting DataFrames are merged to the get the final result and compute the aggregated total costs and the charts.


## Conclusions
Navigating the intricacies of personal finance, especially in the face of a significant shift in location and cost of living, 
has been a journey of discovery and adaptation.
The fusion of Splitwise's collaborative expense management capabilities with Python's programming flexibility resulted 
in a harmonious synergy, offering a tailored approach to expense tracking that suited my unique needs. 
The journey culminated in a **deeper comprehension of my financial habits** and better-informed decision-making regarding expenditures.

**The process wasn't without its challenges.** Reverse engineering the Splitwise website to authenticate and access the
necessary API data required patience and a keen eye for detail. However, the outcome is good. 
The ability to filter and categorize expenses based on my preferences provided a level of control and understanding 
that significantly enhanced my financial awareness. 

Also, I needed to explore - with many fails and errors - the capabilities of the IPython UI components to build a 
flexible and interactive interface.
I have to admit that it is not the best UI tool to create a filtering tool, but for now, it is enough to fulfill my needs.

Very likely, I will change a bit the technological stack, to improve usability and appearance. 
Therefore... there will be a Part 2 - stay tuned!

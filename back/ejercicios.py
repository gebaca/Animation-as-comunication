# 1. Create a list
fruits = ['apple', 'banana', 'cherry']

# 2. Access an item by its index (starts at 0)
first_fruit = fruits[0]
last_fruit = fruits[-1]
print(f"First fruit: {first_fruit}")
print(f"Last fruit: {last_fruit}")
# Outputs: First fruit: apple

# 3. Add an item to the end of the list
fruits.append('date')
print(f"List after adding: {fruits}")
# Outputs: List after adding: ['apple', 'banana', 'cherry', 'date']

# 4. Remove an item by its value
fruits.remove('banana')
print(f"List after removing: {fruits}")
# Outputs: List after removing: ['apple', 'cherry', 'date']

# 5. Get the number of items in the list
print(f"There are {len(fruits)} fruits.")
# Outputs: There are 3 fruits.

colors = ['red', 'green', 'blue']
for color in colors:
    print(color)

# List for storing temperatures
temperatures = [20.1, 22.5, 19.8, 25.0]

# Filtering cool days with [list comprehension](https://mimo.org/glossary/python/list-comprehension)
cool_days = [temp for temp in temperatures if temp < 22]

print(f"Cool days: {cool_days}")

# Using the sort() method
numbers = [4, 2, 6, 5, 1, 3]
numbers.sort()
print(numbers)  # Output: [1, 2, 3, 4, 5, 6]

# Using the sorted() function
numbers = [4, 2, 6, 5, 1, 3]
sorted_numbers = sorted(numbers)
print(numbers)  # Output: [4, 2, 6, 5, 1, 3]
print(sorted_numbers)  # Output: [1, 2, 3, 4, 5, 6]

students = [
  ["Alice", 22, 85],
  ["Bob", 20, 90],
  ["Charlie", 23, 80]

]

# Sorting by grade (index 2)
sorted_students = sorted(students, key=lambda x: x[2])

print(sorted_students) # Outputs: [['Charlie', 23, 80], ['Alice', 22, 85], ['Bob', 20, 90]]




users = []
permits = []

flagged_users = []

users.append({"name": "Alice", "age": 30, "role": "admin"})
users.append({"name": "Bob", "age": 25, "role": "user"})
users.append({"name": "Charlie", "age": 35, "role": "user"})
permits.append({"read": True, "write": True})

for user in users:
    user["permits"] = permits.copy()

for user in users:
    if user["role"] == "user" and user["permits"]:
        flagged_users.append(user)

print(flagged_users)
print(users)

from typing import Literal

class User:
    def __init__(self, name: str, role: Literal["admin", "user"], permits: dict) -> None:
        self.name = name
        self.role = role
        self.permits = permits

    def check_permits(self) -> None:
        if self.role == "admin":
            print(f"Admin {self.name} has full access: {self.permits}")
        else:
            print(f"User {self.name} has limited access: {self.permits}")

    def flag_permit(self) -> None:
        is_user_with_write = self.role == "user" and self.permits.get("write")
        is_admin_without_write = self.role == "admin" and not self.permits.get("write")

        if is_user_with_write or is_admin_without_write:
            print(f"User {self.name} is flagged for write access.")
        else:
            print(f"User {self.name} has no issues with permits.")

user1 = User("Alice", "admin", {"read": True, "write": True})
user2 = User("Bob", "user", {"read": True, "write": False})

user1.flag_permit()
user2.flag_permit()
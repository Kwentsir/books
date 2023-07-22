# Book Library Application

The Book Library Application is a web-based platform that allows users to manage and view a collection of books. It consists of a backend developed with Django Rest Framework (DRF) to provide API endpoints and a frontend developed with React-Redux for the user interface.


## Backend Setup

### Requirements
- Python 3.x
- Django 4.x
- Django Rest Framework (DRF)
- PostgreSQL

#### Installation

1. Clone the repository
``` git clone https://github.com/Kwentsir/books.git
    cd books
```

2. Create a virtual environment
``` python3 -m venv venv source venv/bin/activate   # On Windows, use "venv\Scripts\activate"
```

3. Install the required packages
``` pip install -r requirements.txt ```

4. Create the PostgreSQL database and configure settings in `books/settings.py`

5. Run migrations
``` python manage.py migrate
```

6. Start the Django development server
```python manage.py runserver
```

7. The backend API is now accessible at `http://localhost:8000/api/book`.


## Frontend Setup

### Requirements
- Node.js
- npm (Node Package Manager)

#### Installation

1. Navigate to the frontend folder
``` cd ./frontend ```

2. Install the required packages
```npm install```

3. Start the development server
```npm start```

4. The frontend application will be accessible at `http://localhost:3000/`


### How to Use The App
1. Access the frontend application by opening `http://localhost:3000/` in your web browser.

2. The Book Library homepage will display a list of available books. You can add, edit, and delete books using the provided options.

3. To add a new book, fill in the required details "Add New Book" form, and click "Add Book" button.

4. To edit a book, click on the "Edit" button next to the book you want to update, make the necessary changes, and click "Update."

5. To delete a book, click on the "Delete" button next to the book you want to remove.


###Contributing
If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.


###License
This project is licensed under the MIT License.
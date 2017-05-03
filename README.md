# React Demo
React demo with sticky navbar, infinite scroll and user sign-up / login.

### Build method
1. `npm install`
2. `npm start`
3. Visit [localhost:8080](localhost:8080)

### Data and dummy API
- All news articles and images were taken from [HK01](https://www.hk01.com/). For demo purpose only.
- Data were declared in `/data/db.json`
- Dummy API was created using [json-server](https://github.com/typicode/json-server#install) via port 3000.
- An intended network delay of 500ms was added.

### Users' credentials
- Without implementing the backend, the users' credentials are stored in browser's LocalStorage. With a format of key-value pair `{email, hashed password}`.
- To sign-up a new user, please use a valid email and password with 6-12 alphanumeric chars.
- A default user had been created:
    - email: __foo@bar.com__
    - password: __hello2017__

### State structure
```json
{
  "articles": {
    "page": "paginationNumber",
    "articlesIsFetching": "boolean",
    "hasMore": "boolean",
    "lists": [
      {
        "id": "articleId",
        "image": "articleImage",
        "title": "articleTitle",
        "preview": "articleTextPreview",
        "url": "articleUrl"
      }
    ]
  },
  "categories": {
    "categoriesIsFetching": "boolean",
    "categories": [
      {
        "id": "categoryId",
        "url": "categoryUrl",
        "text": "categoryTitleText"
      }
    ]
  },
  "users": {
    "email": "userEmail",
    "login": "boolean"
  }
}
```

### Reserved ports
| Port | Usage                                                                                |
|------|--------------------------------------------------------------------------------------|
| 3000 | Mock API server using [json-server](https://github.com/typicode/json-server#install) |
| 8080 | Web server                                                                           |

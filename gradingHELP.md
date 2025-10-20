- Use at least three different data collections within the database (such as users, posts, or comments).
  ✅ Check src/models/.. ; src/data/.. ;  src/controllers/.. ; src/routes/..

- Utilize reasonable data modeling practices.
  ✅ Check src/models/Item.js ; src/models/Supplier.js ; src/models/User.js

- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
  ✅ Check src/routes/items.js ; src/routes/suppliers.js ; src/routes/users.js

- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
  ✅ Check src/routes/items.js ; src/routes/suppliers.js ; src/routes/users.js

- Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
  ✅ Check src/routes/items.js ; src/routes/suppliers.js ; src/routes/users.js

- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
  ✅ Check src/routes/items.js ; src/routes/suppliers.js ; src/routes/users.js

- Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
  ✅ Check src/models/Item.js ; src/models/Supplier.js ; src/models/User.js

- Include sensible MongoDB data validation rules for at least one data collection.
  ✅ Check src/models/ for MongoDB validation: required/unique/min/match/enum/...

- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
  ✅ Check src/data/ for sampleData and $ npm run seed

- Utilize reasonable code organization practices.
  ✅ Application follows layered architecture with clear separation
  Client => Routes => Controllers => Models => Database => Models => Controllers => Routes => Client

- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
  ✅ No errors

- Commit frequently to the git repository.
  ✅ 10+ commits (20++ with first project version)

- Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
  ❌

- Level of effort displayed in creativity and user experience.
  ✅ Relevant inventory theme. Clear, simple logic, attention to detail, structure, and transparency make the code maintainable and scalable.

# MHI-Evaluation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Project Details & Requirements

Dummy API is a free API utility used for testing web applications and teaching. One of their APIs simulates a database of employees in a company. The results are returned in JSON format as a list with the fields:

```
[
    {id: number}
    {employee_name: string}
    {employee_salary: number}
    {employee_age: number}
    {profile_image: string}
]
```

Given the URLs below for accessing info from their website, write a single‐page application in Angular that does the following:

1. Returns a list of names for all employees between the ages of 22 and 28 whose salaries are greater than 1000. Sort the list in order of employees with the highest salary to the lowest salary.

2. Given a particular employee id, return the employee’s name if it begins with a vowel. If it doesn’t, return "Employee's name does not begin with a vowel". If an id is entered that does not correspond to a valid employee, return "Invalid Employee"

### URL for all employee data:

> http://dummy.restapiexample.com/api/v1/employees

### URL for single employee data:

> http://dummy.restapiexample.com/api/v1/employee/{id}

\*{id} is to be replaced with the employee id

Ensure the web application is responsive and aesthetically designed for user experience. Handle improper user inputs with relevant error handling and notices to the user.

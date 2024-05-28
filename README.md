# Finance Management App

Welcome to my Finance Management Application, a comprehensive solution designed to empower users in efficiently managing their finances. This application utilizes micro front end architecture, providing a seamless and modular experience for users.

## Table of Contents
1. [Features](#features)
2. [Micro Front End Components](#micro-front-end-components)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Components Description](#components-description)
6. [License](#license)

## Features
- **Track and Update Balance:** Seamlessly monitor and update your current balance.
- **Visualize Expenses:** Utilize dynamic pie charts to visualize expenses by category.
- **Manage To-Do Tasks:** Efficiently manage your tasks with options to mark items as completed and delete them.

## Micro Front End Components
Our application is composed of four main micro front end components:
- User
- Balance
- Expenses
- To Do

## Installation
To get started with our Finance Management App on your local machine, follow these simple steps:
1. Clone the repository:
    ```
    git clone https://github.com/LionTara/MicroFEs.git
    cd MicroFEs
    ```
2. Install dependencies for each micro front end:
    ```
    cd user
    npm install
    cd ../balance
    npm install
    cd ../expenses
    npm install
    cd ../todo
    npm install
    ```
3. Start the development servers:
    ```
    cd user
    npm start
    ```
    Repeat this step for each micro front end.

Ensure all micro front ends are running, hosted on different ports.

## Usage
Once all micro front ends are running, navigate to the host application, seamlessly integrating these components into a unified user interface.

## Components Description
### User
Handles user-related information and functionality, providing an interface for user profile management.

### Balance
- **Current Balance:** Displays the user's current balance.
- **Add to Balance:** Allows users to add value to the balance through a modal.

### Expenses
- **Expenses Pie Chart:** Visualizes expense distribution via a dynamic pie chart.
- **Legend:** Displays categories where money has been spent.
- **Add Expense:** Enables users to add expenses and updates the pie chart accordingly.

### To Do
- **Input Field:** Adds new to-do items.
- **To Do List:** Displays to-do items with options for completion and deletion.
- **Completed List:** Displays completed items with options for restoration and deletion.

## License
All rights are reserved to LionTara

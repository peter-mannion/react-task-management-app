# Name: Peter Mannion

# Project 03: A Task Manager Web App using React Framework

# Project Overview

A task manager app and a contact form built with React components

# Project Description

1. Allows the user to navigate to Task Manager app or Contact Form via navbar links
2. Task Manager app allows the user to add tasks, mark tasks as completed, and delete tasks
3. Task Manager app allows the user to filter on All, Incomplete, or Completed Tasks
4. Tasks are preserved in the task list even after page reload
5. The Contact Form allows the user to submit first and last name, email, and feedback message

/docs - user stories, state diagrams, component descriptions
/src - App.js
/src/components - React components

# How to use the site

Site initialization

- On first loading, the page displays the Task Manager app with an empty task list

Task Manager

- Add a task by typing a description in the input field and clicking the "Add Task" button
- Each task item is displayed as a card with a checkbox, task description, and "DELETE" button
- Checking the checkbox marks a task as completed and the task description formats the text as strike-through
- Clicking the "DELETE" button permanently removes a task from the list

Task filtering

- Each task list can be filtered using buttons "All", "Incomplete", and "Completed"
  - Clicking "All" displays "Incomplete" and "Completed" tasks
  - Clicking "Incomplete" displays "Incomplete" tasks only
  - Clicking "Completed" displays "Completed" tasks only

Contact Form

- The Contact Form allows the user to submit feedback
- Each field has validation which ensures content is input before submission
- The email address field checks for the correct format

# Technologies used

- HTML
- CSS
- JavaScript
- React framework

# Ideas for improvement

1. Set filter=All or Incomplete when user adds a new task otherwise if user sets filter=Completed a new task will be filtered out and not displayed.
2. For mobile screens, rather than reducing filter button text font size explore stacking filter buttons vertically to prevent filter-button-group overflowing beyond the container.
3. Consider removing task-content as a separate wrapper, for Checkbox, Text, and Delete button. Restructure the layout where the checkbox and text are grouped on the left with a separate wrapper from the delete button which will sit alone on the right.
4. For Contact Form, change the success message to overlay the form fields rather than a container above the “Contact Us” header.
5. Consider moving the filter button logic into its own small component.

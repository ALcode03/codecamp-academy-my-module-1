Challenge: Expand the Task Manager SPA
Objective
The goal of this challenge is to continue expanding the Task Manager Single Page Application (SPA) developed during class.

Students must apply the concepts learned about:

React Components
React Router
JSX
Component Composition
Reusable Components
Navigation with Link
Route Configuration
Application Structure
Props
State Management
Component-Based Architecture
Scenario
The current Task Manager application allows users to navigate between basic pages such as Home, Tasks, About, and Task Details.

The development team has requested several new features to make the application feel more like a professional dashboard system.

Your task is to design and implement the missing pages and components.

Requirements
New Pages
Create the following pages inside the pages directory:

1. Profile Page
The Profile page should display information about the currently logged-in user.

Requirements:

User name
User role
Email address
Profile summary
Route:

/profile
2. Settings Page
The Settings page allows users to manage application preferences.

Requirements:

Theme settings section
Notification settings section
Account settings section
Route:

/settings
3. Reports Page
The Reports page should provide information about project performance.

Requirements:

Total tasks
Completed tasks
Pending tasks
Productivity summary
Route:

/reports
Routing Requirements
Update your routing configuration to include all new pages.

Required routes:

/
/dashboard
/tasks
/taskMenu
/tasks/:id
/profile
/settings
/reports
/about
*
# Interactive World Map

## Overview

This project aims to enhance a website by integrating a visual interface for a scalable vector graphic (SVG) map of the world. Utilizing the Angular JavaScript framework and various APIs, this application allows users to interact with the map and retrieve detailed information about each country, thereby enriching the user experience and making geographical data more accessible.

## Table of Contents

- [Introduction](#introduction)
- [Scenario](#scenario)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Future Work](#future-work)
- [License](#license)

## Introduction

As a software engineer, I frequently enhance website functionality using JavaScript and frameworks. This project demonstrates these skills by creating an interactive Angular component that displays a world map in SVG format, highlighting each country upon mouse events and connecting to APIs for comprehensive country information.

## Scenario

In this project, I expanded an existing website related to a geographic area in the United States to include a world map. The task involved presenting the map in SVG format and integrating it with API services to provide details about each country, allowing users to interactively explore global information.

## Requirements

- **SVG Map**: Identify an SVG map of the world for the project.
- **API Integration**: Use GeoNames or Worldbank API to gather specific country information, including:
  - Country name
  - Country capital
  - Country region
  - Income level
  - Two additional properties of my choice
- **Routing**: Assign the map component to the default URL using Angular's routing module.
- **HTML Layout**: Create a two-column layout, one for the map and another for displaying country information.
- **Interactive Component**: Convert the SVG map into an interactive Angular component that handles mouse events.
- **API Service**: Implement an API service using Angular's HTTP client to fetch country data based on user interaction.

## Technologies Used

- **Angular**: For building the interactive web application.
- **SVG**: For the scalable vector graphic representation of the world map.
- **GeoNames / Worldbank APIs**: To retrieve country data.
- **Visual Studio Code**: For development.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone [REPO_URL]
    ```
2. Navigate to the project directory:
    ```bash
    cd [PROJECT_NAME]
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    ng serve
    ```

## Future Work

- **Enhance API Integration**: Add more endpoints to gather additional country data.
- **User Experience Improvements**: Improve the interactivity and visual appeal of the map.
- **Responsive Design**: Ensure the application is fully responsive on various devices.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

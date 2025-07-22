# Road-accident-dashboard

 Road Accident Analytics Dashboard

 # Dataset https://www.kaggle.com/datasets/atharvasoundankar/road-accidents-dataset?resource=download

An interactive dashboard built with React, FastAPI, and PostgreSQL to visualise and analyse UK road accident data.
 Features

     Bar chart showing total accidents by day of the week

     Line chart showing monthly accident trends

     Pie chart breaking down road surface conditions

     Heatmap displaying accident density across the UK

     Fast API performance with async SQL queries

# Tech Stack

Frontend	
React + Vite	

Backend (FastAPI)
PostgreSQL

# Installation

cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend.main:app --reload

Frontend (React + Vite)

cd frontend
npm install
npm run dev

Future Improvements

    Filter by date range

    Export chart data

    Add login for saving dashboards

    Add analytics for accident causes, weather, and locations

# Road-accident-dashboard

🚗 Road Accident Analytics Dashboard

An interactive dashboard built with React, FastAPI, and PostgreSQL to visualise and analyse UK road accident data.
📊 Features

    📈 Bar chart showing total accidents by day of the week

    📉 Line chart showing monthly accident trends

    🧊 Pie chart breaking down road surface conditions

    🔥 Heatmap displaying accident density across the UK

    ⚡️ Fast API performance with async SQL queries

🧰 Tech Stack
Frontend	Backend	Database
React + Vite	FastAPI (Python)	PostgreSQL
📦 Installation
Backend (FastAPI)

cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend.main:app --reload

Frontend (React + Vite)

cd frontend
npm install
npm run dev

📁 Project Structure

road-accident-dashboard/
├── backend/
│   ├── main.py
│   ├── db/
│   ├── routers/
│   └── queries/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   └── context/
│   └── public/
└── README.md

🖼️ Screenshots
Bar Chart	Pie Chart	Heatmap
	
	
🌍 Heatmap Boundaries

The heatmap focuses on the UK:

    South: 49.9

    North: 60

    West: -8.6

    East: 1.8

📌 Future Improvements

    Filter by date range

    Export chart data

    Add login for saving dashboards

    Add analytics for accident causes, weather, and locations

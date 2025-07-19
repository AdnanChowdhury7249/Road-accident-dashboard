from sqlalchemy import Table, Column, String, Integer, Float, Date, MetaData
from .database import metadata

accidents = Table(
    "accidents",
    metadata,
    Column("accident_index", String, primary_key=True),
    Column("accident_date", Date),
    Column("day_of_week", String),
    Column("junction_control", String),
    Column("junction_detail", String),
    Column("accident_severity", String),
    Column("latitude", Float),
    Column("light_conditions", String),
    Column("local_authority_district", String),
    Column("carriageway_hazards", String),
    Column("longitude", Float),
    Column("number_of_casualties", Integer),
    Column("number_of_vehicles", Integer),
    Column("police_force", String),
    Column("road_surface_conditions", String),
    Column("road_type", String),
    Column("speed_limit", Integer),
    Column("time", String),
    Column("urban_or_rural_area", String),
    Column("weather_conditions", String),
    Column("vehicle_type", String),
)
